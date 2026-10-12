import { NextResponse } from "next/server";

import { prisma } from "../../lib/prisma";
import { supabaseAdmin } from "../../lib/supabase";

const BUCKET_NAME = "Iftech-blogs";

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
        contentUrl: true,
        imageUrl: true,
        published: true,
        updatedAt: true,
      },
    });

    const blogsWithImageUrl = blogs.map((blog) => {
      let imageUrl: string | null = null;

      if (blog.imageUrl) {
        const { data } = supabaseAdmin.storage
          .from(BUCKET_NAME)
          .getPublicUrl(blog.imageUrl);

        imageUrl = data.publicUrl;
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
    });
  } catch (error) {
    console.error("Failed to fetch blogs:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs.",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}