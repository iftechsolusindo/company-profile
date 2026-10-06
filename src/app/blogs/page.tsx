"use client";

import { useMemo, useState } from "react";

import Footer from "../components/global/Footer";
import CTA from "../components/main/CTA";
import NavbarMain from "../components/global/NavbarMain";

import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";

type BlogCategory = "Technology" | "Business" | "Development";

interface Blog {
  id: number;
  category: BlogCategory;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    category: "Technology",
    title: "How Technology Helps Businesses Grow in the Digital Era",
    excerpt:
      "Exploring how the right technology can improve business processes, efficiency, and decision making.",
    date: "12 September 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    category: "Development",
    title: "Building Scalable Software for Growing Businesses",
    excerpt:
      "Key considerations when designing software systems that can adapt to changing business requirements.",
    date: "05 September 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    category: "Business",
    title: "Digital Transformation: Where Should Businesses Start?",
    excerpt:
      "A practical look at the first steps businesses can take when beginning their digital transformation journey.",
    date: "28 August 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    category: "Technology",
    title: "Why Cloud Technology Matters for Modern Applications",
    excerpt:
      "Understanding how cloud infrastructure can support flexibility, scalability, and reliable application delivery.",
    date: "20 August 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    category: "Development",
    title: "From Business Requirements to Software Solutions",
    excerpt:
      "How a structured development process turns business requirements into functional and maintainable software.",
    date: "14 August 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    category: "Business",
    title: "The Role of Software in Improving Operational Efficiency",
    excerpt:
      "How custom software can help organizations simplify workflows and gain better visibility into their operations.",
    date: "07 August 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories: Array<"All" | BlogCategory> = [
  "All",
  "Technology",
  "Business",
  "Development",
];

function BlogCard({
  blog,
  isID,
}: {
  blog: Blog;
  isID: boolean;
}) {
  return (
    <article className="group flex overflow-hidden border border-black/[0.08] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      {/* Image */}
      <div className="relative w-[42%] shrink-0 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
      </div>

      {/* Content */}
      <div className="flex min-h-[230px] flex-1 flex-col p-5 md:p-6">
        {/* Meta */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#F59E0B]">
            {blog.category}
          </span>

          <span className="text-[9px] text-black/35">
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-[19px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#171717] transition-colors duration-300 group-hover:text-[#F59E0B] md:text-[21px]">
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-3 text-[11px] leading-5 text-black/45">
          {blog.excerpt}
        </p>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-[9px] text-black/35">
            {blog.date}
          </span>

          <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#171717] transition-colors hover:text-[#F59E0B]">
            {isID ? "Baca" : "Read"}
            <span className="text-[14px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

function BlogsContent() {
  const { language } = useLanguage();
  const isID = language === "ID";

  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const searchValue = search.toLowerCase();

      const matchesSearch =
        blog.title.toLowerCase().includes(searchValue) ||
        blog.excerpt.toLowerCase().includes(searchValue) ||
        blog.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#171717]">
      <NavbarMain />

      {/* BLOG HEADER */}
      <section className="border-b border-black/[0.08] bg-white">
        <div className="mx-auto max-w-[1180px] px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-[700px]">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                <span>IFTECH SOLUSINDO</span>
                <span className="h-px w-7 bg-black/15" />
                <span className="text-[#F59E0B]">Blog</span>
              </div>

              <h1 className="text-[44px] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-[54px] md:text-[64px]">
                {isID ? (
                  <>
                    Insight, teknologi, dan{" "}
                    <span className="text-[#F59E0B]">
                      inovasi.
                    </span>
                  </>
                ) : (
                  <>
                    Insights, technology, and{" "}
                    <span className="text-[#F59E0B]">
                      innovation.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-[600px] text-[13px] leading-6 text-black/45">
                {isID
                  ? "Temukan berbagai insight mengenai teknologi, software development, dan transformasi digital."
                  : "Explore insights about technology, software development, and digital transformation."}
              </p>
            </div>

            {/* Blog count */}
            <div className="border-l border-black/10 pl-5 md:min-w-[140px]">
              <div className="text-[34px] font-semibold tracking-[-0.05em]">
                {String(blogs.length).padStart(2, "0")}
                <span className="text-[#F59E0B]">+</span>
              </div>

              <p className="text-[9px] uppercase tracking-[0.14em] text-black/35">
                {isID ? "Artikel" : "Articles"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="mx-auto max-w-[1180px] px-6 py-16 md:px-10 md:py-20">
        {/* Search + Filter */}
        <div className="mb-10 flex flex-col gap-5 border-b border-black/[0.08] pb-7 lg:flex-row lg:items-center lg:justify-between">
          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              const label =
                category === "All"
                  ? isID
                    ? "Semua"
                    : "All"
                  : category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`border px-4 py-2 text-[9px] font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                    active
                      ? "border-[#F59E0B] bg-[#F59E0B] text-white"
                      : "border-black/10 bg-white text-black/45 hover:border-black/25 hover:text-black"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-[280px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isID ? "Cari artikel..." : "Search articles..."
              }
              className="w-full border border-black/10 bg-white px-4 py-3 pr-10 text-[11px] outline-none transition-colors placeholder:text-black/25 focus:border-[#F59E0B]"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/30">
              ⌕
            </span>
          </div>
        </div>

        {/* Results */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                isID={isID}
              />
            ))}
          </div>
        ) : (
          <div className="border border-black/[0.08] bg-white py-20 text-center">
            <p className="text-[12px] text-black/40">
              {isID
                ? "Artikel tidak ditemukan."
                : "No articles found."}
            </p>
          </div>
        )}
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

export default function BlogsPage() {
  return (
    <LanguageProvider>
      <BlogsContent />
    </LanguageProvider>
  );
}