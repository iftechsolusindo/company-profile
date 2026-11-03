import { NextResponse } from "next/server";

import { prisma } from "../../lib/prisma";
import { supabaseAdmin } from "../../lib/supabase";

const BUCKET_NAME = "Iftech-blogs";
const PUBLIC_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
};

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        published: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        published: true,
        updatedAt: true,
      },
    });

    const blogsWithImageUrl = blogs.map((blog) => {
      let imageUrl: string | null = null;

      if (blog.imageUrl) {
        imageUrl = /^https?:\/\//i.test(blog.imageUrl)
          ? blog.imageUrl
          : supabaseAdmin.storage
              .from(BUCKET_NAME)
              .getPublicUrl(blog.imageUrl).data.publicUrl;
      }

      return {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        imageUrl,
        published: blog.published,
        updatedAt: blog.updatedAt,
      };
    });

    return NextResponse.json({
      success: true,
      blogs: blogsWithImageUrl,
    }, { headers: PUBLIC_CACHE_HEADERS });
  } catch (error) {
    const errorCode =
      error && typeof error === "object" && "code" in error
        ? String(error.code)
        : "UNKNOWN";

    console.error("Failed to fetch blogs. Error code:", errorCode);

    return NextResponse.json(
      {
        success: false,
        message: "Blog data is temporarily unavailable.",
      },
      {
        status: 503,
        headers: {
          "Retry-After": "30",
        },
      }
    );
  }
}
