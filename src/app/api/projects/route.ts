import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import { supabaseAdmin } from "../../lib/supabase";

const BUCKET_NAME = "Iftech-projects";

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
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch projects.",
      },
      {
        status: 500,
      }
    );
  }
}