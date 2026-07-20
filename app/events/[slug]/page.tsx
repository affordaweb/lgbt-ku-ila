import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import InnerCta from "@/components/InnerCta";
import styles from "@/components/InnerPage.module.css";
import { pastEvents } from "@/lib/data";
import { pageSeo } from "@/lib/seo";
export function generateStaticParams(){ return pastEvents.map(event=>({slug:event.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const event=pastEvents.find(event=>event.slug===slug); return event?pageSeo({title:event.title,description:event.description,path:`/events/${event.slug}`,image:event.image}):{title:"Event Not Found",robots:{index:false,follow:false}}; }
export default async function EventPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const event=pastEvents.find(e=>e.slug===slug);if(!event)notFound();return <main><HeroSection title={event.title} subtitle={`Home / Events / ${event.title}`} description={event.description} backgroundImage="/images/stock/stock-06.jpg" />
  <section className={styles.section}><div className={styles.wrap}><div className={styles.detail}><div><Image className={styles.poster} src={event.image} alt={event.title} width={1000} height={1000} sizes="(max-width:820px) 90vw, 40vw"/></div><div className={styles.copy}><p className={styles.eyebrow}>Event details</p><h2 className={styles.heading}>{event.title}</h2><div className={styles.featureList}><div className={styles.feature}><span className={styles.featureIcon}><Calendar size={18}/></span><div><b>Date</b>{event.date}</div></div><div className={styles.feature}><span className={styles.featureIcon}><MapPin size={18}/></span><div><b>Location</b>{event.location}</div></div></div><p>{event.description}</p><dl className={styles.detailMeta}>{event.details.map(detail=><div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}</dl><div className={styles.actions}><Link href="/events" className={styles.secondaryButton}><ArrowLeft size={16}/> Back to events</Link></div></div></div></div></section><InnerCta label="Keep showing up" title={<>More moments,<br />more <em>belonging.</em></>} description="See what is happening next, and find a place in the story." primaryHref="/events" primaryLabel="View all events" /></main>;}
