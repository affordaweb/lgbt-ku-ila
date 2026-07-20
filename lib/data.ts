export interface MemberProfile {
  displayName?: string;
  nickname?: string;
  pronouns?: string;
  orientation?: string[];
  genderIdentity?: string[];
  identityDescription?: string;
  previousRoles?: string[];
  chapter?: string;
  yearJoined?: string;
  committees?: string[];
  work?: string[];
  skills?: string[];
  businessName?: string;
  businessUrl?: string;
  biography?: string;
  story?: string;
  advocacy?: string[];
  contributions?: string[];
  achievements?: string[];
  quote?: string;
  publicEmail?: string;
  publicPhone?: string;
  socialLinks?: Partial<Record<"facebook" | "instagram" | "tiktok" | "youtube" | "linkedin" | "other", string>>;
}

export interface Member {
  name: string;
  slug: string;
  image: string;
  role: string;
  facebookUrl: string;
  profile?: MemberProfile;
}

export const members: Member[] = [
  { name: "Ricson Cultura", slug: "ricson-cultura", image: "/images/members/Ricson.webp", role: "LGBTQIA++ Kumintang Ilaya President", facebookUrl: "https://www.facebook.com/rcultura" },
  { name: "Donn Ramos", slug: "donn-ramos", image: "/images/members/Donn.webp", role: "LGBTQIA++ Batangas City Board Member", facebookUrl: "https://www.facebook.com/donn.ramos.5" },
  { name: "Reyann Buenviaje", slug: "reyann-buenviaje", image: "/images/members/Rey Ann.webp", role: "LGBTQIA++ Batangas City Board Member", facebookUrl: "https://www.facebook.com/reyann.buenviajeii.9" },
  { name: "Ariane Gamboa", slug: "ariane-gamboa", image: "/images/members/Ariane.webp", role: "Former LGBTQIA++ Batangas City President", facebookUrl: "https://www.facebook.com/ariane.gamboa.2024" },
  { name: "Alicia Festijo", slug: "alicia-festijo", image: "/images/members/Alicia.webp", role: "Member", facebookUrl: "https://www.facebook.com/aliw.eww.lopez.fajarito" },
  { name: "Angel Morales", slug: "angel-morales", image: "/images/members/Angel.webp", role: "Member", facebookUrl: "https://www.facebook.com/angelomoralesdelen" },
  { name: "Arnel Mores", slug: "arnel-mores", image: "/images/members/Arnel.webp", role: "Member", facebookUrl: "https://www.facebook.com/arnel.mores.54" },
  { name: "Bela Culla", slug: "bela-culla", image: "/images/members/Bela.webp", role: "LGBTQIA++ Kumintang Ilaya Member", facebookUrl: "https://www.facebook.com/iambelaculla" },
  { name: "Bhogs Ilagan", slug: "bhogs-ilagan", image: "/images/members/Bhogs.webp", role: "Member", facebookUrl: "https://www.facebook.com/ilaganbogs" },
  { name: "Bogs Gamboa", slug: "bogs-gamboa", image: "/images/members/Bogs.webp", role: "Member", facebookUrl: "https://www.facebook.com/bogs.gamboa" },
  { name: "Charlotte Piamonte", slug: "charlotte-piamonte", image: "/images/members/Charlotte.webp", role: "Member", facebookUrl: "https://www.facebook.com/charllotepiamonte" },
  { name: "Domilyn", slug: "domilyn", image: "/images/members/Domilyn.webp", role: "Member", facebookUrl: "https://www.facebook.com/me.alexandra.1500" },
  { name: "Ed Mendones", slug: "ed-mendones", image: "/images/members/Edward.webp", role: "Member", facebookUrl: "https://www.facebook.com/ed.mendones" },
  { name: "Edmund Andal", slug: "edmund-andal", image: "/images/members/Edmund.webp", role: "LGBTQIA++ Batangas City Board Member", facebookUrl: "https://www.facebook.com/edmund.andal" },
  { name: "Jerome Cate", slug: "jerome-cate", image: "/images/members/Jerome.webp", role: "Member", facebookUrl: "https://www.facebook.com/jerome.cate.9" },
  { name: "John Mores Salvana", slug: "john-mores-salvana", image: "/images/members/John Carlo.webp", role: "Member", facebookUrl: "https://www.facebook.com/johncarlo.salvana.9" },
  { name: "MJ Minano", slug: "mj-minano", image: "/images/members/MJ.webp", role: "Member", facebookUrl: "https://www.facebook.com/mjhay.minano" },
  { name: "Raven Baylosis", slug: "raven-baylosis", image: "/images/members/Raven.webp", role: "Member", facebookUrl: "https://www.facebook.com/meRaVen19" },
  { name: "Richiane Mira Advincula", slug: "richiane-mira-advincula", image: "/images/members/Richiane.webp", role: "Member", facebookUrl: "https://www.facebook.com/Green.Adz08" },
  { name: "RJ Paulo Plata", slug: "rj-paulo-plata", image: "/images/members/RJ Paulo.webp", role: "Member", facebookUrl: "https://www.facebook.com/paupauGuidotti" },
  { name: "Robert Dinglasan", slug: "robert-dinglasan", image: "/images/members/Robert.webp", role: "Member", facebookUrl: "https://www.facebook.com/robert.dinglasan.9" },
  { name: "Ruben Malundas", slug: "ruben-malundas", image: "/images/members/Ruben.webp", role: "Member", facebookUrl: "https://www.facebook.com/ruben.malundas.2024" },
  { name: "Rusty Misty Culla", slug: "rusty-misty-culla", image: "/images/members/Rusty.webp", role: "Member", facebookUrl: "https://www.facebook.com/profile.php?id=61574692694387" },
  { name: "Solo Ramirez", slug: "solo-ramirez", image: "/images/members/Solo.webp", role: "Member", facebookUrl: "https://www.facebook.com/solo.ramirez.98" },
];

export const galleryImages = [
  { src: "/images/events/733802303_122101099587380675_4257770319116326264_n.jpg", alt: "LGBTQIA++ Ku-Ila Community Event" },
  { src: "/images/events/731788066_2070636043809517_8341410874233716056_n.jpg", alt: "Community Gathering" },
  { src: "/images/events/731808096_2070636303809491_6925979401149413117_n.jpg", alt: "Ku-Ila Event" },
  { src: "/images/events/734768224_2070636277142827_2921723697569089008_n.jpg", alt: "Pride Celebration" },
  { src: "/images/events/734756136_2070636173809504_5831640839771367381_n.jpg", alt: "Community Activity" },
  { src: "/images/events/734685288_2070636003809521_4173291785777342497_n.jpg", alt: "Ku-Ila Members" },
  { src: "/images/events/734685130_2070636223809499_996300586797761429_n.jpg", alt: "Equality Event" },
  { src: "/images/events/733975150_122100780087380675_1338066647456866540_n.jpg", alt: "Advocacy Gathering" },
  { src: "/images/events/736055324_122100781401380675_9049107418053334814_n.jpg", alt: "Community Outreach" },
  { src: "/images/events/735205466_122099282751380675_3826971210084499359_n.jpg", alt: "Pride March" },
  { src: "/images/events/734896841_1747334810026168_6985617327012982623_n.jpg", alt: "Unity Event" },
  { src: "/images/events/736845534_122100813849380675_8484641132398570078_n.jpg", alt: "Solidarity Gathering" },
  { src: "/images/events/736065685_122101691037380675_675168795837495272_n.jpg", alt: "Ku-Ila Program" },
  { src: "/images/events/736966547_122101103409380675_3652929604956128964_n.jpg", alt: "Community Program" },
];

export const eventImages = galleryImages;

export interface CommunityResource {
  title: string;
  source: string;
  url: string;
  description: string;
  focusKeyword: string;
  relatedKeywords: string[];
}

/** Curated third-party learning links. Content remains with its original publisher. */
export const communityResources: CommunityResource[] = [
  {
    title: "How LGBTIQ+ students and schools are building more welcoming campuses together",
    source: "UNESCO",
    url: "https://www.unesco.org/en/articles/how-lgbtiq-students-and-their-schools-are-building-more-welcoming-campuses-together",
    description: "A Philippines-connected story on youth-led action, trusted support systems, and more inclusive learning spaces.",
    focusKeyword: "LGBTQIA+ safe spaces Philippines",
    relatedKeywords: ["LGBTQ youth support", "inclusive schools", "SOGIESC inclusion Philippines"],
  },
  {
    title: "Safe, seen and included",
    source: "UNESCO",
    url: "https://www.unesco.org/en/articles/safe-seen-and-included-report-school-based-sexuality-education",
    description: "A practical look at how inclusive education can help learners feel safe, seen, and supported.",
    focusKeyword: "inclusive sexuality education",
    relatedKeywords: ["safe learning environments", "LGBTQIA+ student wellbeing"],
  },
  {
    title: "Positive learning for learners living with HIV",
    source: "UNESCO",
    url: "https://www.unesco.org/en/articles/positive-learning-how-education-sector-can-meet-needs-learners-living-hiv-0",
    description: "Guidance on stigma-free learning environments, health information, and support for young people living with HIV.",
    focusKeyword: "HIV support for LGBTQIA+ youth",
    relatedKeywords: ["HIV awareness Philippines", "stigma-free education", "youth health support"],
  },
  {
    title: "Equality and non-discrimination",
    source: "United Nations Human Rights",
    url: "https://www.ohchr.org/sites/default/files/Documents/Issues/Discrimination/LGBT/FactSheets/unfe-25-UN_Fact_Sheets_Equalitynondisc_English.pdf",
    description: "A concise reference on equality, non-discrimination, and human rights protections for LGBT people.",
    focusKeyword: "LGBTQIA+ equality and rights",
    relatedKeywords: ["anti-discrimination", "SOGIE equality", "inclusive communities"],
  },
];

export type PridePartnerLevel = "major-partner" | "community-partner" | "event-contributor";

export interface PridePartner {
  name: string;
  title?: string;
  partnerLevel: PridePartnerLevel;
  contributionType?: string;
  eventYear: number;
  acknowledgment: string;
  website?: string;
  socialLink?: string;
  displayOrder: number;
  isPublished: boolean;
}

export const pridePartners: PridePartner[] = [
  { name: "Mae Babao", partnerLevel: "major-partner", eventYear: 2026, acknowledgment: "With sincere appreciation for supporting a celebration of pride, visibility, and community.", displayOrder: 1, isPublished: true },
  { name: "Congresswoman Beverly Rose A. Dimacuha", partnerLevel: "major-partner", eventYear: 2026, acknowledgment: "With sincere appreciation for supporting a celebration of pride, visibility, and community.", displayOrder: 2, isPublished: true },
  { name: "Malen Balina", partnerLevel: "major-partner", eventYear: 2026, acknowledgment: "With sincere appreciation for supporting a celebration of pride, visibility, and community.", displayOrder: 3, isPublished: true },
  { name: "Raquel Bugtong", partnerLevel: "major-partner", eventYear: 2026, acknowledgment: "With sincere appreciation for supporting a celebration of pride, visibility, and community.", displayOrder: 4, isPublished: true },
  { name: "Barangay Councilor Larry Furto", partnerLevel: "community-partner", eventYear: 2026, acknowledgment: "Thank you for standing with the community and supporting the Pride March celebration.", displayOrder: 1, isPublished: true },
  { name: "Barangay Councilor Monique Felipe", partnerLevel: "community-partner", eventYear: 2026, acknowledgment: "Thank you for standing with the community and supporting the Pride March celebration.", displayOrder: 2, isPublished: true },
  { name: "Mary Gabriel Hamilton", partnerLevel: "community-partner", eventYear: 2026, acknowledgment: "Thank you for standing with the community and supporting the Pride March celebration.", displayOrder: 3, isPublished: true },
  { name: "Rachel Mercado", partnerLevel: "community-partner", eventYear: 2026, acknowledgment: "Thank you for standing with the community and supporting the Pride March celebration.", displayOrder: 4, isPublished: true },
  { name: "Edmund Andal", partnerLevel: "event-contributor", contributionType: "Official T-Shirt Sponsor", eventYear: 2026, acknowledgment: "With appreciation for supporting the Pride March through the official event shirts worn by members and officers.", displayOrder: 1, isPublished: true },
  { name: "Raven Baylosis", partnerLevel: "event-contributor", contributionType: "Official T-Shirt Sponsor", eventYear: 2026, acknowledgment: "With appreciation for supporting the Pride March through the official event shirts worn by members and officers.", displayOrder: 2, isPublished: true },
];

export interface Event {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
  category: string;
  description: string;
  location: string;
  details: { label: string; value: string }[];
}

export const pastEvents: Event[] = [
  {
    id: 1,
    title: "Glow Beyond Limits: Hair & Makeup Competition",
    slug: "glow-beyond-limits-hair-makeup-competition",
    image: "/images/events/glow-beyond-limits.jpeg",
    date: "June 29, 2026 · 10:00 AM",
    category: "Pride Month",
    description:
      "A Pride Month hair and makeup competition for amateur, aspiring, and professional SILBI artists.",
    location: "Batangas City Convention Centre",
    details: [
      { label: "Date & time", value: "June 29, 2026 · 10:00 AM" },
      { label: "Venue", value: "Batangas City Convention Centre" },
      { label: "Who can join", value: "Amateur, aspiring, or professional SILBI artists." },
      { label: "Mechanics", value: "Models and gowns will be provided by CSWDO; the contest will be on the spot; participants bring their own setup; theme: fresh makeup look." },
      { label: "Contact", value: "Contact your Area President or any SILBI officer." },
    ],
  },
  {
    id: 2,
    title: "Batangas City Queen: The Screening",
    slug: "batangas-city-queen-screening",
    image: "/images/events/batangas-city-queen-screening.jpeg",
    date: "June 21, 2026 · 1:00 PM",
    category: "Pride Month",
    description:
      "Screening for trans queens joining the inaugural Batangas City Queen.",
    location: "Sinsayan Lounge",
    details: [
      { label: "Screening", value: "June 21, 2026 · 1:00 PM" },
      { label: "Venue", value: "Sinsayan Lounge" },
      { label: "Eligibility", value: "Active SILBI member, 18–30 years old." },
      { label: "Dress code", value: "White casual attire, light makeup, and heels." },
      { label: "Bring", value: "Certificate of residency, government ID, and proof of SILBI membership." },
    ],
  },
  {
    id: 3,
    title: "Bandera! Banner Making Contest",
    slug: "bandera-banner-making-contest",
    image: "/images/events/bandera-banner-making-contest.jpeg",
    date: "June 29, 2026 · 6:30 AM",
    category: "Pride Month",
    description:
      "Create a unique banner for the Pride Parade using as much recyclable material as possible.",
    location: "Assembly: Plaza Mabini",
    details: [
      { label: "Date & time", value: "June 29, 2026 · 6:30 AM" },
      { label: "Assembly", value: "Plaza Mabini" },
      { label: "Mechanics", value: "Create your own unique flag and use as much recyclable material as possible." },
      { label: "Required size", value: "2 feet × 6 feet" },
    ],
  },
  {
    id: 4,
    title: "King & Queen of Pride Parade",
    slug: "king-queen-of-pride-parade",
    image: "/images/events/king-and-queen-of-pride-parade.jpeg",
    date: "June 29, 2026 · 6:30 AM",
    category: "Pride Month",
    description:
      "Join the L.A.S.O. Pride Parade in your most unique and colorful outfit—anyone can join.",
    location: "Assembly: Plaza Mabini · Route to Batangas City Convention Centre",
    details: [
      { label: "Date & time", value: "June 29, 2026 · 6:30 AM" },
      { label: "Assembly", value: "Plaza Mabini" },
      { label: "Parade route", value: "Batangas City Convention Centre" },
      { label: "Participation", value: "Anyone can join. Wear your most unique and colorful outfit." },
      { label: "Dress code", value: "Costume or gown—kahit ano pa ’yan, i-rampa mo ’yan!" },
    ],
  },
  {
    id: 5,
    title: "Batangas City Queen",
    slug: "batangas-city-queen",
    image: "/images/events/batangas-city-queen.jpeg",
    date: "June 21, 2026 · 1:00 PM",
    category: "Pride Month",
    description: "A screening for the first Batangas City Queen, with finals during the Pride celebration.",
    location: "Sinsayan Lounge, Batangas City Coliseum",
    details: [
      { label: "Screening", value: "June 21, 2026 · 1:00 PM" },
      { label: "Venue", value: "Sinsayan Lounge, Batangas City Coliseum" },
      { label: "Eligibility", value: "Active SILBI member, 18–30 years old." },
      { label: "Dress code", value: "White casual attire, light makeup, and heels." },
      { label: "Bring", value: "Certificate of residency, any government ID, and proof of SILBI membership. Check with your Area President or SILBI officers." },
      { label: "Finals night", value: "June 29, 2026, as part of the Pride Celebration." },
    ],
  },
  {
    id: 6,
    title: "L.A.S.O. Photo Contest",
    slug: "laso-photo-contest",
    image: "/images/events/laso-photo-contest.jpeg",
    date: "June 29, 2026 · 6:00 AM",
    category: "Pride Month",
    description: "Snap a photo at any City LED wall for a chance to be one of ten winners selected on Pride Celebration day.",
    location: "Plaza Mabini to Batangas City Convention Centre",
    details: [
      { label: "Event", value: "L.A.S.O. Pride Celebration · June 29, 2026 · 6:00 AM · Open for all." },
      { label: "Route", value: "Plaza Mabini to Batangas City Convention Centre" },
      { label: "How to join", value: "Snap a photo at any City LED wall." },
      { label: "Submission", value: "Post on Facebook, Instagram, or TikTok using #KahitAnoKaLOVEkaYear2." },
      { label: "Winners", value: "Ten lucky winners will be selected during the Pride Celebration on June 29." },
    ],
  },
];
