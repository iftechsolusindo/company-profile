
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

        setBlogPosts((data.blogs ?? []).slice(0, 3));
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
    <section className="w-full bg-white py-16 font-sans">
      <div className="container-main">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            {/* Label */}
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Blog
            </p>

            {/* Title */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#113a5d] md:text-4xl">
              Berita terbaru hari ini
            </h2>
          </div>

          <Link
            href="/blogs"
            className="group flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-[0_3px_12px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59E0B]/40 hover:text-[#B45309] hover:shadow-[0_6px_18px_-6px_rgba(0,0,0,0.2)]"
          >
            View All Articles

            <svg
              className="ml-2 h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[480px] animate-pulse rounded-2xl border border-gray-100 bg-gray-100 shadow-[0_8px_25px_-12px_rgba(0,0,0,0.2)]"
              />
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && blogPosts.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center shadow-[0_8px_25px_-15px_rgba(0,0,0,0.15)]">
            <p className="text-sm font-medium text-gray-500">
              No blog articles available.
            </p>
          </div>
        )}

        {/* Blog Cards */}
        {!loading && blogPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_25px_-12px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_16px_35px_-12px_rgba(0,0,0,0.28)]"
              >
                {/* Image */}
                <div className="relative h-52 w-full shrink-0 overflow-hidden bg-gray-100">
                  {post.imageUrl ? (
                    <>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                      {/* Image Label */}
                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#113a5d] shadow-sm">
                        Blog
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm font-medium text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col p-6">
                  {/* Date */}
                  <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />

                    {formatDate(post.updatedAt)}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 line-clamp-2 text-xl font-extrabold leading-snug tracking-tight text-[#0a1752] transition-colors duration-300 group-hover:text-[#B45309]">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-6 line-clamp-3 flex-grow text-sm font-medium leading-relaxed text-gray-500">
                    {post.excerpt || "Read this article to learn more."}
                  </p>

                  {/* Read More */}
                  <div className="mt-auto flex items-center justify-end border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-2 text-sm font-bold text-[#113a5d] transition-all duration-300 group-hover:gap-3 group-hover:text-[#B45309]">
                      Read More
                      <span className="text-base">→</span>
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
