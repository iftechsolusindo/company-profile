"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { canOptimizeImage } from "../../lib/image-utils";

import Footer from "../../components/global/Footer";
import NavbarMain from "../../components/global/NavbarMain";
import { useLanguage } from "../../components/global/LanguageProvider";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  imageUrl: string | null;
  updatedAt: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const isID = language === "ID";

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBlog() {
      setLoading(true);
      setLoadError(false);

      try {
        const response = await fetch(`/api/blogs/${encodeURIComponent(slug)}`, {
          signal: controller.signal,
          cache: "default",
        });

        if (response.status === 404) {
          setBlog(null);
          return;
        }

        if (!response.ok) {
          throw new Error("Blog request failed");
        }

        const data: { blog?: BlogPost } = await response.json();
        setBlog(data.blog ?? null);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setLoadError(true);
        setBlog(null);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadBlog();
    return () => controller.abort();
  }, [slug]);

  const message = loading
    ? isID ? "Memuat artikel..." : "Loading article..."
    : loadError
      ? isID ? "Artikel belum dapat dimuat. Silakan coba lagi nanti." : "This article is temporarily unavailable. Please try again later."
      : isID ? "Artikel tidak ditemukan." : "Article not found.";

  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#171717]">
      <NavbarMain />

      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        <Link
          href="/blogs"
          className="text-sm font-semibold text-[#9A6700] hover:underline"
        >
          {isID ? "← Kembali ke Blog" : "← Back to Blog"}
        </Link>

        {blog ? (
          <article className="mt-8 overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
            {blog.imageUrl && (
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={1600}
                height={900}
                unoptimized={!canOptimizeImage(blog.imageUrl)}
                priority
                className="max-h-[480px] w-full object-cover"
              />
            )}

            <div className="p-6 sm:p-10">
              <time
                dateTime={blog.updatedAt}
                className="text-xs font-medium text-neutral-500"
              >
                {new Intl.DateTimeFormat(isID ? "id-ID" : "en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(blog.updatedAt))}
              </time>
              <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {blog.title}
              </h1>
              {blog.excerpt && (
                <p className="mt-6 whitespace-pre-line text-base leading-8 text-neutral-600">
                  {blog.excerpt}
                </p>
              )}
            </div>
          </article>
        ) : (
          <div
            className="mt-8 rounded-2xl border border-black/[0.07] bg-white px-6 py-14 text-center text-neutral-600"
            role={loadError ? "alert" : "status"}
            aria-live="polite"
          >
            {message}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
