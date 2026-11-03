import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import { supabaseAdmin } from "../../lib/supabase";

const BUCKET_NAME = "Iftech-projects";
const PUBLIC_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
};

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const projectsWithImages = projects.map((project) => {
      const getPublicImageUrl = (imageUrl: string | null) => {
        if (!imageUrl) {
          return null;
        }

        // Jika sudah berupa URL lengkap, langsung gunakan.
        if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
          return imageUrl;
        }

        // Jika yang disimpan adalah path file di bucket,
        // ubah menjadi public URL Supabase Storage.
        const { data } = supabaseAdmin.storage
          .from(BUCKET_NAME)
          .getPublicUrl(imageUrl);

        return data.publicUrl;
      };

      return {
        ...project,

        imageUrl: getPublicImageUrl(project.imageUrl),

        projectDetailsImageUrl: getPublicImageUrl(
          project.projectDetailsImageUrl
        ),

        ourResponsibilityImageUrl: getPublicImageUrl(
          project.ourResponsibilityImageUrl
        ),

        galleryImageUrl: getPublicImageUrl(project.galleryImageUrl),
      };
    });

    return NextResponse.json({
      success: true,
      projects: projectsWithImages,
    }, { headers: PUBLIC_CACHE_HEADERS });
  } catch (error) {
    const errorCode =
      error && typeof error === "object" && "code" in error
        ? String(error.code)
        : "UNKNOWN";
    console.error("Failed to fetch projects. Error code:", errorCode);

    return NextResponse.json(
      {
        success: false,
        message: "Project data is temporarily unavailable.",
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
