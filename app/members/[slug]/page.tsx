import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, HeartHandshake, Quote, Sparkles, Users } from "lucide-react";
import FacebookIcon from "@/components/FacebookIcon";
import InnerCta from "@/components/InnerCta";
import ProfileUpdateRequestModal from "@/components/ProfileUpdateRequestModal";
import styles from "@/components/InnerPage.module.css";
import { members } from "@/lib/data";
import { pageSeo } from "@/lib/seo";

export function generateStaticParams(){ return members.map(member => ({ slug: member.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const member=members.find(item=>item.slug===slug); return member?pageSeo({title:member.profile?.displayName ?? member.name,description:`Learn more about ${member.name}, ${member.role} at LGBTQIA++ SILBI Kumintang Ilaya.`,path:`/members/${member.slug}`,image:member.image}):{title:"Member Not Found",robots:{index:false,follow:false}}; }

function List({ title, items, icon: Icon }: { title: string; items?: string[]; icon: typeof Sparkles }) { if (!items?.length) return null; return <section className={styles.profileSection}><div className={styles.profileSectionTitle}><Icon size={20}/><h2>{title}</h2></div><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></section>; }

export default async function MemberPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const member=members.find(item=>item.slug===slug); if(!member) notFound(); const profile=member.profile; const name=profile?.displayName ?? member.name;
  return <main>
    <section className={styles.memberHero}><span className={styles.memberHeroWord} aria-hidden="true">{name}</span><div className={styles.wrap}><div className={styles.memberHeroGrid}>
      <div className={styles.memberHeroCopy}><p className={styles.eyebrow}>People of Ku-Ila</p><p className={styles.memberBreadcrumb}>Home / Members / {name}</p><h1>{name}</h1><p className={styles.memberRole}>{member.role}</p><p className={styles.memberLead}>{profile?.biography ?? "A member of the community helping make room for more voices, more stories, and more belonging."}</p><div className={styles.actions}><ProfileUpdateRequestModal member={{name, slug: member.slug, role: member.role, pageUrl: `/members/${member.slug}`}} /><Link href="/members" className={styles.secondaryButton}><ArrowLeft size={15}/> All members</Link></div></div>
      <div className={styles.memberHeroImage}><Image src={member.image} alt={name} fill priority sizes="(max-width:820px) 90vw, 43vw" /></div>
    </div></div></section>
    <section className={styles.section}><div className={styles.wrap}><div className={styles.profileLayout}>
      <div className={styles.profileMain}><p className={styles.eyebrow}>About</p><h2 className={styles.heading}>A part of the<br /><em>community story.</em></h2>{profile?.story ? <p className={styles.profileText}>{profile.story}</p> : <p className={styles.profileText}>{name} is part of LGBTQIA++ SILBI Kumintang Ilaya, supporting the work of community, dignity, and belonging in Batangas City.</p>}{profile?.quote ? <blockquote className={styles.profileQuote}><Quote size={24}/>{profile.quote}</blockquote> : null}
        <List title="Work and Creative Practice" items={profile?.work} icon={BriefcaseBusiness}/><List title="Skills and Talents" items={profile?.skills} icon={Sparkles}/><List title="Advocacy" items={profile?.advocacy} icon={HeartHandshake}/><List title="Community Contributions" items={profile?.contributions} icon={Users}/><List title="Achievements" items={profile?.achievements} icon={Sparkles}/>
      </div>
      <aside className={styles.profileAside}><p className={styles.eyebrow}>Profile details</p><dl>{profile?.nickname ? <div><dt>Also known as</dt><dd>{profile.nickname}</dd></div> : null}{profile?.pronouns ? <div><dt>Pronouns</dt><dd>{profile.pronouns}</dd></div> : null}{profile?.identityDescription ? <div><dt>Community</dt><dd>{profile.identityDescription}</dd></div> : null}{profile?.chapter ? <div><dt>Chapter</dt><dd>{profile.chapter}</dd></div> : null}{profile?.yearJoined ? <div><dt>Year joined</dt><dd>{profile.yearJoined}</dd></div> : null}{profile?.businessName ? <div><dt>Professional name</dt><dd>{profile.businessUrl ? <a href={profile.businessUrl} target="_blank" rel="noreferrer">{profile.businessName} <ArrowUpRight size={14}/></a> : profile.businessName}</dd></div> : null}<div><dt>Connect</dt><dd>{member.facebookUrl ? <a href={member.facebookUrl} target="_blank" rel="noreferrer"><FacebookIcon className="h-4 w-4"/> Facebook</a> : "—"}</dd></div></dl><div className={styles.profileRequest}><p>Need to correct or add something?</p><ProfileUpdateRequestModal member={{name, slug: member.slug, role: member.role, pageUrl: `/members/${member.slug}`}} /></div></aside>
    </div></div></section>
    <InnerCta label="People of Ku-Ila" title={<>Meet the people<br />who make us <em>stronger.</em></>} description="Every member brings a distinct voice to the work of community." primaryHref="/members" primaryLabel="Meet every member" />
  </main>;
}
