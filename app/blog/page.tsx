import { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Search } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Sidebar */}
            <aside className="space-y-8 lg:col-span-1 order-2 lg:order-1">
              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog..."
                    className="w-full border border-[#e4e4e4] py-2 pl-10 pr-4 text-sm focus:border-[#e85242] outline-none bg-white"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#787878]" />
                </div>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="text-sm text-[#787878] transition hover:text-[#e85242]"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1 text-xs text-[#787878] bg-white border border-[#e4e4e4] hover:bg-[#e85242] hover:text-white hover:border-[#e85242] transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Recent Posts</h3>
                <ul className="space-y-2">
                  {recentPosts.map((post) => (
                    <li key={post}>
                      <a
                        href="#"
                        className="text-sm text-[#787878] transition hover:text-[#e85242]"
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
                    className="overflow-hidden bg-white border border-[#e4e4e4]"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr]">
                      <div className="relative h-48 w-full sm:h-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-6">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="bg-[#e85242]/10 px-3 py-0.5 text-xs font-semibold text-[#e85242]">
                            {post.category}
                          </span>
                          <span className="text-sm text-[#787878]">
                            {post.date}
                          </span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold text-[#3a3d44]">
                          {post.title}
                        </h2>
                        <p className="mb-4 text-sm text-[#787878]">
                          {post.excerpt}
                        </p>
                        <a
                          href="#"
                          className="text-sm font-semibold text-[#e85242] transition hover:text-[#d44133]"
                        >
                          Read More &rarr;
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
