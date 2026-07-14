import { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest news, stories, and insights from the Ku-Ila LGBTQIA++ community.",
};

const categories = ["Advocacy", "Community", "Health", "Legal", "Stories"];

const tags = ["Rights", "Health", "Community", "Legal", "Stories", "Youth"];

const recentPosts = [
  "Understanding LGBTQIA++ Rights",
  "Building Inclusive Communities",
  "Mental Health Awareness",
  "Celebrating Pride Together",
];

const posts = [
  {
    id: 1,
    title: "Understanding LGBTQIA++ Rights in the Philippines",
    image: "/images/stock/stock-07.jpg",
    date: "June 10, 2026",
    excerpt:
      "A comprehensive look at the current legal landscape and what it means for LGBTQIA++ Filipinos in their fight for equality and recognition.",
    category: "Legal",
  },
  {
    id: 2,
    title: "Building Inclusive Communities",
    image: "/images/stock/stock-08.jpg",
    date: "May 28, 2026",
    excerpt:
      "How communities across Laguna are working together to create safe, welcoming spaces for everyone regardless of sexual orientation and gender identity.",
    category: "Community",
  },
  {
    id: 3,
    title: "Mental Health Awareness",
    image: "/images/stock/stock-09.jpg",
    date: "May 15, 2026",
    excerpt:
      "Addressing the unique mental health challenges faced by LGBTQIA++ individuals and the support systems available in our community.",
    category: "Health",
  },
  {
    id: 4,
    title: "Celebrating Pride Together",
    image: "/images/stock/stock-10.jpg",
    date: "April 30, 2026",
    excerpt:
      "A recap of this year's Pride celebrations, highlighting the joy, solidarity, and continued push for visibility and acceptance.",
    category: "Stories",
  },
];

export default function BlogPage() {
  return (
    <main>
      <HeroSection
        title="Blog & News"
        subtitle="Home / Blog"
        backgroundImage="/images/stock/stock-07.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Sidebar */}
            <aside className="space-y-8 lg:col-span-1 order-2 lg:order-1">
              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog..."
                    className="w-full border border-[#E5DDD3] py-2.5 pl-10 pr-4 text-sm focus:border-[#D4AF37] outline-none bg-white transition-colors"
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-[#6B7280]" />
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="text-sm text-[#6B7280] transition hover:text-[#7B2D8E]"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1.5 text-xs text-[#6B7280] bg-white border border-[#E5DDD3] hover:bg-[#7B2D8E] hover:text-white hover:border-[#7B2D8E] transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Recent Posts</h3>
                <ul className="space-y-2">
                  {recentPosts.map((post) => (
                    <li key={post}>
                      <a
                        href="#"
                        className="text-sm text-[#6B7280] transition hover:text-[#7B2D8E]"
                      >
                        {post}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Blog Posts */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="overflow-hidden bg-white border border-[#E5DDD3] card-luxury"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-[300px_1fr]">
                      <div className="relative h-52 w-full sm:h-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-8">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="bg-[#7B2D8E]/10 px-3 py-0.5 text-xs font-semibold text-[#7B2D8E] uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="text-xs text-[#6B7280]">
                            {post.date}
                          </span>
                        </div>
                        <h2 className="mb-3 text-xl font-bold text-[#1A1A2E] font-[var(--font-playfair)]">
                          {post.title}
                        </h2>
                        <p className="mb-4 text-sm text-[#6B7280] leading-relaxed">
                          {post.excerpt}
                        </p>
                        <a
                          href="#"
                          className="text-sm font-semibold text-[#7B2D8E] transition hover:text-[#9B4DAC] inline-flex items-center gap-1"
                        >
                          Read More <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
