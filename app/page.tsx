import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  GraduationCap,
  HandHeart,
  HeartPulse,
  MapPin,
  Scale,
  Users,
} from "lucide-react";
import { galleryImages, members, pastEvents } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "LGBTQIA++ Kumintang Ilaya | A Community Where Everyone Belongs",
  description:
    "LGBTQIA++ SILBI Kumintang Ilaya creates safe spaces, support, opportunity, and belonging for the LGBTQIA++ community in Batangas City.",
};

const programs = [
  {
    icon: HandHeart,
    title: "Community Support",
    description: "Safe spaces, peer support, and community activities where every person is welcomed and heard.",
    href: "/support",
  },
  {
    icon: HeartPulse,
    title: "Health & Well-being",
    description: "Mental health support, wellness programs, and pathways to inclusive care for our community.",
    href: "/support",
  },
  {
    icon: Scale,
    title: "Rights & Advocacy",
    description: "Know-your-rights education and collective action for equality, dignity, and lasting change.",
    href: "/about",
  },
  {
    icon: GraduationCap,
    title: "Education & Opportunity",
    description: "Skills training, workshops, and learning opportunities that help every member move forward.",
    href: "/events",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    description: "Programs that nurture the next generation of compassionate and courageous community leaders.",
    href: "/become-member",
  },
];

const leaders = members.filter((member) => member.role !== "Member").slice(0, 6);
const featuredEvent = pastEvents[0];
const eventList = pastEvents.slice(1, 4);
const heroSlides = [galleryImages[0]!, galleryImages[3]!, galleryImages[5]!];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Love · solidarity · belonging</p>
            <h1 id="hero-title" className={styles.heroTitle}>
              Kahit <span className={styles.scriptAccent}>ano</span> ka,
              <br />
              <span className={styles.scriptAccent}>Love</span> ka!
            </h1>
            <p className={styles.heroCopy}>
              Building a safer, kinder, and more inclusive Batangas—one voice,
              one story, and one act of courage at a time.
            </p>
            <div className={styles.heroActions}>
              <Link href="/become-member" className={styles.primaryButton}>
                Join our community <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/about" className={styles.textLinkLight}>
                Discover our story <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={styles.heroGallery} aria-label="Ku-Ila event highlights">
            {heroSlides.map((image, index) => (
              <div className={styles.heroSlide} key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 960px) 90vw, 42vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.aboutCopy}>
          <p className={styles.sectionTag}>About Ku-Ila</p>
          <h2>Here, every identity has a place to feel <em>at home.</em></h2>
          <p className={styles.lead}>
            LGBTQIA++ SILBI Kumintang Ilaya is a community-based organization
            creating safe spaces for LGBTQIA++ people in Batangas City.
          </p>
          <p>
            Walang judgment, walang discrimination. We show up for one another
            through support, advocacy, education, and opportunities to lead.
          </p>
          <div className={styles.aboutFooter}>
            <Link href="/about" className={styles.darkButton}>
              More about us <ArrowRight aria-hidden="true" />
            </Link>
            <div className={styles.location}>
              <MapPin aria-hidden="true" />
              <span>Serving Kumintang Ilaya<br /><strong>Batangas City</strong></span>
            </div>
          </div>
        </div>
        <div className={styles.aboutVisual}>
          <div className={styles.archImage}>
            <Image
              src={galleryImages[5]?.src || "/images/stock/stock-02.jpg"}
              alt="Ku-Ila members sharing a community moment"
              fill
              sizes="(max-width: 900px) 90vw, 48vw"
              className={styles.coverImage}
            />
          </div>
          <div className={styles.impactCard}>
            <strong>80%</strong>
            <span>of belonging begins<br />with being seen</span>
          </div>
        </div>
      </section>

      <section className={styles.programs}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionTag}>What we do</p>
            <h2>Support that meets<br />our community where it is.</h2>
          </div>
          <p>
            Practical programs rooted in dignity, care, and the belief that
            everyone deserves the chance to thrive.
          </p>
        </div>
        <div className={styles.programList}>
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.title}
                href={program.href}
                className={`${styles.programRow} ${index === 0 ? styles.programFeatured : ""}`}
              >
                <span className={styles.programNumber}>0{index + 1}</span>
                <span className={styles.programIcon}><Icon aria-hidden="true" /></span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <span className={styles.rowArrow}><ArrowRight aria-hidden="true" /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.leaders}>
        <div className={styles.leaderIntro}>
          <div>
            <p className={styles.sectionTagDark}>People of Ku-Ila</p>
            <h2>Leadership shaped by<br /><em>lived experience.</em></h2>
          </div>
          <div>
            <p>
              Meet the people who listen, organize, advocate, and make space
              for our community to grow together.
            </p>
            <Link href="/members" className={styles.outlineButtonLight}>
              Meet every member <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className={styles.memberRail} aria-label="Ku-Ila leadership">
          <div className={styles.memberTrack}>
          {[...leaders, ...leaders].map((member, index) => (
            <Link href={`/members/${member.slug}`} className={styles.memberCard} key={`${member.slug}-${index}`}>
              <div className={styles.memberTopline}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <div className={styles.memberImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 700px) 72vw, 25vw"
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.memberCaption}>
                <div><h3>{member.name}</h3><p>{member.role}</p></div>
                <ArrowRight aria-hidden="true" />
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>

      <section className={styles.events}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionTag}>Community journal</p>
            <h2>Moments that move<br />our story forward.</h2>
          </div>
          <Link href="/events" className={styles.textLinkDark}>
            View all events <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.editorialGrid}>
          {featuredEvent && (
            <Link href={`/events/${featuredEvent.slug}`} className={styles.featureStory}>
              <div className={styles.featureImage}>
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 58vw"
                  className={styles.coverImage}
                />
              </div>
              <p className={styles.storyMeta}>{featuredEvent.date} · Community</p>
              <h3>{featuredEvent.title}</h3>
              <p>{featuredEvent.description}</p>
              <span className={styles.readLink}>View event <ArrowRight aria-hidden="true" /></span>
            </Link>
          )}
          <div className={styles.storyList}>
            {eventList.map((event) => (
              <Link href={`/events/${event.slug}`} className={styles.storyRow} key={event.id}>
                <div className={styles.storyThumb}>
                  <Image
                    src={event.image}
                    alt=""
                    fill
                    sizes="160px"
                    className={styles.coverImage}
                  />
                </div>
                <div>
                  <p className={styles.storyMeta}>{event.date}</p>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <span className={styles.readLink}>View event <ArrowRight aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.galleryBand} aria-label="Community gallery highlights">
        <div className={styles.galleryFade} />
        <div className={styles.galleryTrack}>
          {[...galleryImages.slice(0, 8), ...galleryImages.slice(0, 8)].map((image, index) => (
            <Link href="/gallery" className={styles.galleryTile} key={`${image.src}-${index}`}>
              <Image src={image.src} alt={index < 8 ? image.alt : ""} fill sizes="320px" className={styles.coverImage} />
              <span>View gallery <ExternalLink aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.preFooter}>
        <div className={styles.preFooterGrid}>
          <div>
            <p className={styles.sectionTagDark}>Begin with belonging</p>
            <h2>A stronger community begins when you <em>show up.</em></h2>
            <p>
              Whether you need support, want to volunteer, or are ready to stand
              with us, there is a place for you in Ku-Ila.
            </p>
            <div className={styles.preFooterActions}>
              <Link href="/become-member" className={styles.primaryButton}>
                Become a member <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.outlineButtonLight}>
                Start a conversation <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div><span>Email</span><a href="mailto:lgbtkuila@outlook.com">lgbtkuila@outlook.com</a></div>
            <div><span>Community</span><strong>Kumintang Ilaya<br />Batangas City, Philippines</strong></div>
            <div><span>Our promise</span><strong>Safe. Open. Inclusive.</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
}
