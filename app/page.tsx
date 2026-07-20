import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  HandHeart,
  HeartPulse,
  MapPin,
  Users,
} from "lucide-react";
import { galleryImages, pastEvents } from "@/lib/data";
import AboutVisual from "@/components/AboutVisual";
import AchievementSection from "@/components/AchievementSection";
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
    title: "Upcoming Events",
    description: "Find gatherings, celebrations, and activities that bring our community together.",
    href: "/events",
  },
  {
    icon: Users,
    title: "Become a Member",
    description: "Join Ku-Ila and help create a safer, kinder community for everyone.",
    href: "/become-member",
  },
  {
    icon: HandHeart,
    title: "Support Us",
    description: "Help sustain community-led programs, advocacy, and safe spaces for LGBTQIA++ people.",
    href: "/support",
  },
  {
    icon: MapPin,
    title: "Contact Us",
    description: "Reach out for support, questions, partnerships, or a conversation with our team.",
    href: "/contact",
  },
];

const leadershipMembers = [
  {
    firstName: "Ricson",
    surname: "Cultura",
    profileSlug: "ricson-cultura",
    image: "/images/members/Ricson.webp",
    role: "LGBTQIA++ Kumintang Ilaya President",
    textFirst: false,
  },
  {
    firstName: "Donn",
    surname: "Ramos",
    profileSlug: "donn-ramos",
    image: "/images/members/Donn.webp",
    role: "LGBTQIA++ Batangas City Board Member",
    textFirst: true,
  },
  {
    firstName: "Rey Anne",
    surname: "Buenviaje",
    profileSlug: "rey-anne-buenviaje",
    image: "/images/members/Rey Ann.webp",
    role: "LGBTQIA++ Batangas City Board Member",
    textFirst: false,
  },
  {
    firstName: "Edmund",
    surname: "Andal",
    profileSlug: "edmund-andal",
    image: "/images/members/Edmund.webp",
    role: "LGBTQIA++ Batangas City Board Member",
    textFirst: true,
  },
  {
    firstName: "Ariana",
    surname: "Gamboa",
    profileSlug: "ariana-gamboa",
    image: "/images/members/Ariane.webp",
    role: "Former LGBTQIA++ Batangas City President",
    textFirst: false,
  },
  {
    firstName: "Bela",
    surname: "Culla",
    profileSlug: "bela-culla",
    image: "/images/members/Bela.webp",
    role: "LGBTQIA++ Kumintang Ilaya Member",
    textFirst: true,
  },
];
const featuredEvent = pastEvents[0];
const eventList = pastEvents.slice(1, 4);
const heroSlides = [
  { ...galleryImages[10]!, width: 2048, height: 1366 },
  { ...galleryImages[11]!, width: 1198, height: 540 },
  { ...galleryImages[0]!, width: 791, height: 540 },
];

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
                  width={image.width}
                  height={image.height}
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
        <AboutVisual />
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
            <h2>Leadership shaped by<br /><em>Lived experience.</em></h2>
          </div>
          <div>
            <p>
              Meet the people who listen, organize, advocate, and create safe
              spaces for the LGBTQIA++ community in Batangas City.
            </p>
            <Link href="/members" className={styles.outlineButtonLight}>
              Meet Every Member <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className={styles.memberRail} aria-label="Ku-Ila leadership">
          <div className={styles.memberTrack}>
          {[...leadershipMembers, ...leadershipMembers].map((member, index) => {
            const name = `${member.firstName} ${member.surname}`;
            const caption = (
              <div className={styles.memberCaption}>
                <h3 className={styles.memberName}>
                  <span className={styles.firstName}>{member.firstName}</span>{" "}
                  <span className={styles.surname}>{member.surname}</span>
                </h3>
                <p>{member.role}</p>
              </div>
            );

            return (
            <article
              className={`${styles.memberCard} ${member.textFirst ? styles.memberTextFirst : styles.memberImageFirst}`}
              key={`${member.profileSlug}-${index}`}
            >
              {member.textFirst && caption}
              <Link
                href={`/leadership/${member.profileSlug}`}
                className={styles.memberImageLink}
                aria-label={`View ${name}'s profile`}
              >
                <div className={styles.memberImage}>
                <Image
                  src={member.image}
                  alt={name}
                  fill
                  sizes="(max-width: 700px) 72vw, 25vw"
                  className={styles.coverImage}
                />
                </div>
                <span className={styles.profileLinkIcon} aria-hidden="true"><ArrowUpRight /></span>
              </Link>
              {!member.textFirst && caption}
            </article>
            );
          })}
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
              <p className={styles.storyMeta}>{featuredEvent.date} · {featuredEvent.category}</p>
              <h3>{featuredEvent.title}</h3>
              <p>{featuredEvent.description}</p>
              <span className={styles.readLink}>Read More <ArrowRight aria-hidden="true" /></span>
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
                  <p className={styles.storyLocation}>{event.location}</p>
                  <p className={styles.storySummary}>{event.description}</p>
                  <span className={styles.readLink}>Read More <ArrowRight aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AchievementSection />

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
