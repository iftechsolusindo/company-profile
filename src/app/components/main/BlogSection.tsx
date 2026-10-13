
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  published: boolean;
  updatedAt: string;
}

interface BlogResponse {
  success: boolean;
  blogs?: BlogPost[];
  message?: string;
  error?: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs", {
          cache: "no-store",
        });

        const data: BlogResponse = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.error ||
              data.message ||
              "Failed to fetch blogs."
          );
        }

        // Tampilkan maksimal 4 artikel terbaru.
        setBlogPosts((data.blogs ?? []).slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <section className="w-full bg-white py-8 font-sans sm:py-12 md:py-14">
      <div className="container-main">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-3 sm:mb-6 sm:gap-4">
          <div className="min-w-0">
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#F59E0B] sm:mb-2 sm:text-[10px]">
              Blog
            </p>

            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-[#113a5d] sm:text-3xl md:text-4xl">
              Berita terbaru hari ini
            </h2>
          </div>

          <Link
            href="/blogs"
            className="group flex shrink-0 items-center rounded-full border border-gray-200 bg-white px-2.5 py-2 text-[10px] font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59E0B]/40 hover:text-[#B45309] hover:shadow-md sm:px-4 sm:text-sm"
          >
            <span className="whitespace-nowrap">
              View All Articles
            </span>

            <svg
              className="ml-1.5 h-3 w-3 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B] sm:ml-2 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[360px] animate-pulse overflow-hidden rounded-xl border border-gray-100 bg-gray-100 shadow-sm sm:h-[340px]"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && blogPosts.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 text-center sm:px-6 sm:py-10">
            <p className="text-xs font-medium text-gray-500 sm:text-sm">
              No blog articles available.
            </p>
          </div>
        )}

        {/* Blog Cards */}
        {!loading && blogPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_4px_16px_-8px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.22)]"
              >
                {/* Image */}
                <div className="relative h-52 w-full shrink-0 overflow-hidden bg-gray-100 sm:h-40">
                  {post.imageUrl ? (
                    <>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Image Label */}
                      <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#113a5d] shadow-sm">
                        Blog
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs font-medium text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col p-5 sm:p-4">
                  {/* Date */}
                  <div className="mb-2.5 flex items-center gap-2 text-[10px] font-semibold text-gray-400 sm:mb-2 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]" />

                    <span>{formatDate(post.updatedAt)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2.5 line-clamp-2 text-lg font-extrabold leading-snug tracking-tight text-[#0a1752] transition-colors duration-300 group-hover:text-[#B45309] sm:mb-2 sm:text-base">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-4 line-clamp-3 flex-grow text-sm font-medium leading-relaxed text-gray-500 sm:mb-4 sm:text-xs">
                    {post.excerpt || "Read this article to learn more."}
                  </p>

                  {/* Read More */}
                  <div className="mt-auto flex items-center justify-end border-t border-gray-100 pt-3">
                    <span className="flex items-center gap-2 text-xs font-bold text-[#113a5d] transition-all duration-300 group-hover:gap-3 group-hover:text-[#B45309] sm:text-xs">
                      Read More
                      <span className="text-sm">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
