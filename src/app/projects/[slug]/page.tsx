"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { canOptimizeImage } from "../../lib/image-utils";

import Footer from "../../components/global/Footer";
import NavbarMain from "../../components/global/NavbarMain";
import { useLanguage } from "../../components/global/LanguageProvider";

interface Project {
  id: number;
  title: string;
  slug: string;
  imageUrl: string | null;
  client: string | null;
  year: number | null;
  type: string | null;
  clientLocation: string | null;
  link: string | null;
  category: string | null;
  devices: string[];
  projectDetails: string | null;
  projectDetailsImageUrl: string | null;
  ourResponsibility: string | null;
  ourResponsibilityImageUrl: string | null;
  responsibilities: string[];
  technologies: unknown;
  galleryImageUrl: string | null;
}

function isHttpUrl(value: string | null): value is string {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const isID = language === "ID";

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProject() {
      setLoading(true);
      setLoadError(false);

      try {
        const response = await fetch(`/api/projects/${encodeURIComponent(slug)}`, {
          signal: controller.signal,
          cache: "default",
        });

        if (response.status === 404) {
          setProject(null);
          return;
        }

        if (!response.ok) {
          throw new Error("Project request failed");
        }

        const data: { project?: Project } = await response.json();
        setProject(data.project ?? null);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setLoadError(true);
        setProject(null);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadProject();
    return () => controller.abort();
  }, [slug]);

  const technologies = Array.isArray(project?.technologies)
    ? project.technologies.filter(
        (item): item is { name: string } =>
          typeof item === "object" &&
          item !== null &&
          "name" in item &&
          typeof item.name === "string",
      )
    : [];
  const devices = project?.devices ?? [];
  const responsibilities = project?.responsibilities ?? [];

  const message = loading
    ? isID ? "Memuat proyek..." : "Loading project..."
    : loadError
      ? isID ? "Proyek belum dapat dimuat. Silakan coba lagi nanti." : "This project is temporarily unavailable. Please try again later."
      : isID ? "Proyek tidak ditemukan." : "Project not found.";

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <NavbarMain />

      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
        <Link
          href="/projects"
          className="text-sm font-semibold text-[#9A6700] hover:underline"
        >
          {isID ? "← Kembali ke Proyek" : "← Back to Projects"}
        </Link>

        {project ? (
          <article className="mt-8">
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1600}
                height={900}
                unoptimized={!canOptimizeImage(project.imageUrl)}
                priority
                className="max-h-[520px] w-full rounded-2xl object-cover"
              />
            )}

            <header className="py-8 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A6700]">
                {[project.category, project.type, project.year]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
                {project.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
                {project.client && <span>{project.client}</span>}
                {project.clientLocation && <span>{project.clientLocation}</span>}
              </div>
              {isHttpUrl(project.link) && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-semibold text-[#9A6700] hover:underline"
                >
                  {isID ? "Kunjungi proyek" : "Visit project"} ↗
                </a>
              )}
            </header>

            {project.projectDetails && (
              <section className="border-t border-neutral-200 py-8">
                <h2 className="text-xl font-semibold">
                  {isID ? "Tentang Proyek" : "About the Project"}
                </h2>
                <p className="mt-4 whitespace-pre-line leading-7 text-neutral-600">
                  {project.projectDetails}
                </p>
                {project.projectDetailsImageUrl && (
                  <Image
                    src={project.projectDetailsImageUrl}
                    alt=""
                    width={1600}
                    height={900}
                    unoptimized={!canOptimizeImage(project.projectDetailsImageUrl)}
                    loading="lazy"
                    className="mt-6 max-h-[440px] w-full rounded-xl object-cover"
                  />
                )}
              </section>
            )}

            {project.ourResponsibility && (
              <section className="border-t border-neutral-200 py-8">
                <h2 className="text-xl font-semibold">
                  {isID ? "Tanggung Jawab Kami" : "Our Responsibility"}
                </h2>
                <p className="mt-4 whitespace-pre-line leading-7 text-neutral-600">
                  {project.ourResponsibility}
                </p>
                {project.ourResponsibilityImageUrl && (
                  <Image
                    src={project.ourResponsibilityImageUrl}
                    alt=""
                    width={1600}
                    height={900}
                    unoptimized={!canOptimizeImage(project.ourResponsibilityImageUrl)}
                    loading="lazy"
                    className="mt-6 max-h-[440px] w-full rounded-xl object-cover"
                  />
                )}
              </section>
            )}

            {responsibilities.length > 0 && (
              <section className="border-t border-neutral-200 py-8">
                <h2 className="text-xl font-semibold">
                  {isID ? "Lingkup Pekerjaan" : "Scope of Work"}
                </h2>
                <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
                  {responsibilities.map((item, index) => (
                    <li key={`${index}-${item}`}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {(devices.length > 0 || technologies.length > 0) && (
              <section className="border-t border-neutral-200 py-8">
                {devices.length > 0 && (
                  <p className="text-sm text-neutral-600">
                    <strong className="text-neutral-900">
                      {isID ? "Platform:" : "Platforms:"}
                    </strong>{" "}
                    {devices.join(", ")}
                  </p>
                )}
                {technologies.length > 0 && (
                  <p className="mt-3 text-sm text-neutral-600">
                    <strong className="text-neutral-900">
                      {isID ? "Teknologi:" : "Technologies:"}
                    </strong>{" "}
                    {technologies.map((technology) => technology.name).join(", ")}
                  </p>
                )}
              </section>
            )}

            {project.galleryImageUrl && (
              <Image
                src={project.galleryImageUrl}
                alt=""
                width={1600}
                height={900}
                unoptimized={!canOptimizeImage(project.galleryImageUrl)}
                loading="lazy"
                className="max-h-[520px] w-full rounded-2xl object-cover"
              />
            )}
          </article>
        ) : (
          <div
            className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-14 text-center text-neutral-600"
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
