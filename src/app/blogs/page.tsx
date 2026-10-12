
"use client";

import { useEffect, useMemo, useState } from "react";

import Footer from "../components/global/Footer";
import CTA from "../components/main/CTA";
import NavbarMain from "../components/global/NavbarMain";

import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  published: boolean;
  updatedAt: string;
}

function BlogCard({
  blog,
  isID,
}: {
  blog: Blog;
  isID: boolean;
}) {
  const formattedDate = new Intl.DateTimeFormat(
    isID ? "id-ID" : "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  ).format(new Date(blog.updatedAt));

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:flex-row">
      {/* IMAGE */}
      <a
        href={`/blogs/${blog.slug}`}
        aria-label={
          isID
            ? `Baca artikel ${blog.title}`
            : `Read article ${blog.title}`
        }
        className="relative block aspect-[16/10] shrink-0 overflow-hidden bg-[#F0F0ED] sm:aspect-auto sm:w-[40%]"
      >
        {blog.imageUrl ? (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight text-black/10">
                IFTECH
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/30">
                {isID ? "Artikel" : "Article"}
              </span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

        <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          IFTECH Journal
        </span>
      </a>

      {/* CONTENT */}
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-5 md:p-6">
        {/* META */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#B77900]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            Blog
          </span>

          <span className="h-3 w-px bg-black/10" />

          <time
            dateTime={blog.updatedAt}
            className="text-[10px] text-neutral-400"
          >
            {formattedDate}
          </time>
        </div>

        {/* TITLE */}
        <h2 className="mt-4 line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-[#171717] transition-colors duration-300 group-hover:text-[#B77900] md:text-xl">
          {blog.title}
        </h2>

        {/* EXCERPT */}
        <p className="mt-3 line-clamp-3 text-xs leading-6 text-neutral-500">
          {blog.excerpt ||
            (isID
              ? "Jelajahi insight dan informasi terbaru dari IFTECH Solusindo."
              : "Explore the latest insights and information from IFTECH Solusindo.")}
        </p>

        {/* FOOTER */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/[0.06] pt-4 mt-5">
          <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-neutral-400">
            IFTECH SOLUSINDO
          </span>

          <a
            href={`/blogs/${blog.slug}`}
            className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold text-neutral-800 transition-colors hover:text-[#B77900]"
          >
            {isID ? "Baca Artikel" : "Read Article"}

            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M4 10H16M10 4L16 10L10 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function BlogSkeleton() {
  return (
    <div className="flex min-w-0 animate-pulse flex-col overflow-hidden rounded-xl border border-black/[0.06] bg-white sm:flex-row">
      <div className="aspect-[16/10] shrink-0 bg-neutral-200 sm:aspect-auto sm:w-[40%]" />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="h-3 w-24 rounded bg-neutral-200" />
        <div className="mt-5 h-5 w-full rounded bg-neutral-200" />
        <div className="mt-2 h-5 w-3/4 rounded bg-neutral-200" />

        <div className="mt-5 h-3 w-full rounded bg-neutral-100" />
        <div className="mt-2 h-3 w-full rounded bg-neutral-100" />
        <div className="mt-2 h-3 w-2/3 rounded bg-neutral-100" />

        <div className="mt-7 flex justify-between border-t border-black/[0.06] pt-4">
          <div className="h-3 w-24 rounded bg-neutral-100" />
          <div className="h-3 w-20 rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}

function BlogsContent() {
  const { language } = useLanguage();
  const isID = language === "ID";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBlogs() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/blogs", {
          signal: controller.signal,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch blogs.",
          );
        }

        setBlogs(
          Array.isArray(data.blogs) ? data.blogs : [],
        );
      } catch (err) {
        if (
          err instanceof Error &&
          err.name === "AbortError"
        ) {
          return;
        }

        console.error("Failed to fetch blogs:", err);

        setError(
          isID
            ? "Artikel belum dapat dimuat. Silakan coba kembali."
            : "Articles could not be loaded. Please try again.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => controller.abort();
  }, [isID]);

  const filteredBlogs = useMemo(() => {
    const searchValue = search.trim().toLocaleLowerCase(
      isID ? "id-ID" : "en-US",
    );

    if (!searchValue) {
      return blogs;
    }

    return blogs.filter((blog) => {
      const title = blog.title.toLocaleLowerCase(
        isID ? "id-ID" : "en-US",
      );

      const excerpt = (
        blog.excerpt || ""
      ).toLocaleLowerCase(isID ? "id-ID" : "en-US");

      return (
        title.includes(searchValue) ||
        excerpt.includes(searchValue)
      );
    });
  }, [blogs, search, isID]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F5] text-[#171717]">
      <NavbarMain />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-black/[0.07] bg-white">
        {/* DECORATIVE ELEMENTS */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-black/[0.035] sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-black/[0.04] sm:h-72 sm:w-72" />

        <div className="pointer-events-none absolute -bottom-20 left-[42%] h-52 w-52 rounded-full bg-[#F59E0B]/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-10 pt-28 sm:px-10 sm:pb-12 sm:pt-32 md:px-14 md:pb-14 md:pt-36 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_auto] md:gap-10">
            <div className="max-w-4xl">
              {/* EYEBROW */}
              <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span>IFTECH SOLUSINDO</span>
                <span className="h-px w-8 bg-[#F59E0B]" />
                <span className="text-[#B77900]">
                  Blogs
                </span>
              </div>

              {/* TITLE */}
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
                {isID ? (
                  <>
                    Ide besar.
                    <br />
                    <span className="text-[#B77900]">
                      Perspektif baru.
                    </span>
                  </>
                ) : (
                  <>
                    Big ideas.
                    <br />
                    <span className="text-[#B77900]">
                      Fresh perspectives.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
                {isID
                  ? "Temukan wawasan seputar teknologi, pengembangan perangkat lunak, dan transformasi digital untuk membantu bisnis terus berkembang."
                  : "Explore insights on technology, software development, and digital transformation to help businesses move forward."}
              </p>
            </div>

            {/* ARTICLE COUNT */}
            <div className="flex items-center gap-4 border-t border-black/[0.08] pt-5 md:min-w-[170px] md:border-l md:border-t-0 md:pl-7 md:pt-0">
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  {String(blogs.length).padStart(2, "0")}
                  <span className="text-[#F59E0B]">+</span>
                </p>

                <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                  {isID ? "Artikel dipublikasikan" : "Published articles"}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM ACCENT */}
          <div className="mt-9 flex items-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#F59E0B]" />
            <span className="h-1 w-3 rounded-full bg-neutral-200" />
            <span className="h-1 w-3 rounded-full bg-neutral-200" />
          </div>
        </div>
      </section>

      {/* BLOG LIST SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-20 xl:px-24">
        {/* SECTION HEADER + SEARCH */}
        <div className="mb-7 flex flex-col gap-5 border-b border-black/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                {isID ? "Jelajahi Artikel" : "Explore Articles"}
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {isID ? "Artikel Terbaru" : "Latest Articles"}
              <span className="text-[#F59E0B]">.</span>
            </h2>

            <p className="mt-2 text-xs leading-6 text-neutral-500 sm:text-sm">
              {isID
                ? "Ide, informasi, dan perspektif terbaru dari kami."
                : "The latest ideas, information, and perspectives from our team."}
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full sm:max-w-[300px]">
            <label
              htmlFor="blog-search"
              className="mb-2 block text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400"
            >
              {isID ? "Cari artikel" : "Search articles"}
            </label>

            <div className="relative">
              <input
                id="blog-search"
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder={
                  isID
                    ? "Ketik judul atau topik..."
                    : "Enter a title or topic..."
                }
                className="w-full rounded-lg border border-black/[0.09] bg-white px-4 py-3 pr-11 text-xs text-neutral-800 outline-none transition placeholder:text-neutral-400 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10"
              />

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
              >
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* RESULT COUNT */}
        {!loading && !error && (
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-[10px] text-neutral-400">
              {isID
                ? `Menampilkan ${filteredBlogs.length} dari ${blogs.length} artikel`
                : `Showing ${filteredBlogs.length} of ${blogs.length} articles`}
            </p>

            {search.trim() && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-[10px] font-semibold text-neutral-500 transition-colors hover:text-[#B77900]"
              >
                {isID ? "Hapus pencarian" : "Clear search"}
              </button>
            )}
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5"
            aria-busy="true"
            aria-label={isID ? "Memuat artikel" : "Loading articles"}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <BlogSkeleton key={index} />
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div
            className="rounded-xl border border-red-200 bg-white px-5 py-12 text-center sm:py-16"
            role="alert"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M12 8v5m0 3h.01M10.3 3.9 2.9 17a2 2 0 0 0 1.75 3h14.7a2 2 0 0 0 1.75-3l-7.4-13.1a2 2 0 0 0-3.4 0Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-4 text-base font-semibold">
              {isID
                ? "Artikel gagal dimuat"
                : "Unable to load articles"}
            </h3>

            <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-neutral-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 rounded-lg bg-[#171717] px-5 py-3 text-[10px] font-semibold text-white transition hover:bg-[#333333]"
            >
              {isID ? "Coba Lagi" : "Try Again"}
            </button>
          </div>
        )}

        {/* ARTICLES */}
        {!loading && !error && filteredBlogs.length > 0 && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                isID={isID}
              />
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && filteredBlogs.length === 0 && (
          <div className="rounded-xl border border-black/[0.07] bg-white px-5 py-14 text-center sm:py-16">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#B77900]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mt-4 text-base font-semibold">
              {search.trim()
                ? isID
                  ? "Artikel tidak ditemukan"
                  : "No articles found"
                : isID
                  ? "Belum ada artikel"
                  : "No articles yet"}
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-neutral-500">
              {search.trim()
                ? isID
                  ? "Coba gunakan kata kunci lain atau periksa kembali ejaan pencarian."
                  : "Try another keyword or check your search spelling."
                : isID
                  ? "Artikel baru akan ditampilkan di sini setelah tersedia."
                  : "New articles will appear here when they become available."}
            </p>

            {search.trim() && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 text-xs font-semibold text-[#B77900] transition-colors hover:text-[#F59E0B]"
              >
                {isID ? "Tampilkan semua artikel" : "Show all articles"}
              </button>
            )}
          </div>
        )}
      </section>

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
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
