import { NextResponse } from "next/server";

import { prisma } from "../../../lib/prisma";
import { supabaseAdmin } from "../../../lib/supabase";

const BUCKET_NAME = "Iftech-blogs";
const PUBLIC_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
};

function publicStorageUrl(value: string | null) {
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;

  return supabaseAdmin.storage.from(BUCKET_NAME).getPublicUrl(value).data.publicUrl;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await context.params;
    const blog = await prisma.blog.findFirst({
      where: { slug, published: true },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        updatedAt: true,
      },
    });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog article not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      blog: {
        ...blog,
        imageUrl: publicStorageUrl(blog.imageUrl),
      },
    }, { headers: PUBLIC_CACHE_HEADERS });
  } catch (error) {
    const errorCode =
      error && typeof error === "object" && "code" in error
        ? String(error.code)
        : "UNKNOWN";
    console.error("Failed to fetch blog detail. Error code:", errorCode);

    return NextResponse.json(
      { success: false, message: "Blog data is temporarily unavailable." },
      { status: 503, headers: { "Retry-After": "30" } },
    );
  }
}
