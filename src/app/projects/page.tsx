"use client";

import { useEffect, useState, type ReactNode } from "react";

import NavbarMain from "../components/global/NavbarMain";
import Footer from "../components/global/Footer";
import CTA from "../components/main/CTA";

import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";

type ProjectType = "SOFTWARE" | "GOVERNMENT";
type ActiveType = "All" | ProjectType;

type Technology = {
  name: string;
};

interface Project {
  id: string | number;
  title: string;
  slug: string;
  imageUrl: string | null;
  client: string | null;
  year: string | number | null;
  type: ProjectType;
  clientLocation: string | null;
  link: string | null;
  category: string | null;
  devices: string[];
  projectDetails: string | null;
  projectDetailsImageUrl: string | null;
  ourResponsibility: string | null;
  ourResponsibilityImageUrl: string | null;
  responsibilities: string[];
  technologies: Technology[] | null;
  galleryImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#F59E0B]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[11px]">
        {children}
      </span>
    </div>
  );
}

function ProjectsContent() {
  const { language } = useLanguage();

  // Samakan format bahasa dengan LanguageProvider dan SolutionsPage.
  const isID = language === "ID";

  const [projects, setProjects] = useState<Project[]>([]);
  const [activeType, setActiveType] = useState<ActiveType>("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProjects() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/projects", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setProjects(Array.isArray(data.projects) ? data.projects : []);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          isID
            ? "Proyek belum dapat dimuat. Silakan coba kembali."
            : "Projects could not be loaded. Please try again.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => controller.abort();
  }, [isID]);

  const filteredProjects = projects.filter((project) => {
    if (activeType === "All") {
      return true;
    }

    return project.type === activeType;
  });

  const getTypeLabel = (type: ProjectType) => {
    if (type === "GOVERNMENT") {
      return isID ? "Pemerintahan" : "Government";
    }

    return "Software";
  };

  return (
    <main className="overflow-hidden bg-white text-neutral-900">
      <NavbarMain />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#171717] px-6 py-16 text-white sm:px-10 sm:py-20 md:px-14 md:py-24 lg:px-20 lg:py-28 xl:px-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.06] md:h-96 md:w-96" />

        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/[0.08] md:h-72 md:w-72" />

        <div className="pointer-events-none absolute -bottom-40 -left-24 h-72 w-72 rounded-full bg-[#F59E0B]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px]">
          <SectionLabel>
            {isID ? "Portofolio Kami" : "Our Portfolio"}
          </SectionLabel>

          <div className="mt-6 max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {isID ? (
                <>
                  Solusi Digital
                  <br />
                  untuk <span className="text-[#F59E0B]">Masa Depan.</span>
                </>
              ) : (
                <>
                  Digital Solutions
                  <br />
                  for the <span className="text-[#F59E0B]">Future.</span>
                </>
              )}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
              {isID
                ? "Jelajahi berbagai proyek yang kami kembangkan melalui teknologi, kreativitas, dan pendekatan yang berorientasi pada kebutuhan klien."
                : "Explore projects we have developed through technology, creativity, and an approach focused on our clients' needs."}
            </p>
          </div>

          {/* STATISTICS */}
          <div className="mt-12 grid grid-cols-1 gap-7 border-t border-white/15 pt-7 sm:grid-cols-3 sm:gap-8 md:mt-14 md:pt-8">
            <div>
             <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
      {Math.max(0, new Date().getFullYear() - 2024)}
      <span className="text-[#F59E0B]">+</span>
    </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[11px]">
                {isID ? "Tahun Pengalaman" : "Years of Experience"}
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {String(projects.length).padStart(2, "0")}
                <span className="text-[#F59E0B]">+</span>
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[11px]">
                {isID ? "Proyek Dikerjakan" : "Projects Delivered"}
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Software
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[11px]">
                {isID ? "Solusi Digital" : "Digital Solutions"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24 xl:px-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-20">
          <div>
            <SectionLabel>
              {isID ? "Tentang Pekerjaan Kami" : "About Our Work"}
            </SectionLabel>

            <h2 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              {isID ? (
                <>
                  Teknologi yang
                  <br />
                  memberikan <span className="text-[#F59E0B]">dampak.</span>
                </>
              ) : (
                <>
                  Technology that
                  <br />
                  makes an <span className="text-[#F59E0B]">impact.</span>
                </>
              )}
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              {isID
                ? "Kami menghadirkan solusi digital yang dirancang untuk menjawab tantangan nyata. Setiap proyek menjadi kesempatan untuk menggabungkan kebutuhan bisnis, pengalaman pengguna, dan teknologi yang tepat."
                : "We deliver digital solutions designed to address real challenges. Every project is an opportunity to combine business needs, user experience, and the right technology."}
            </p>

            <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              {isID
                ? "Dari pengembangan perangkat lunak hingga solusi untuk sektor pemerintahan, kami berfokus pada kualitas, fungsionalitas, dan hasil yang berkelanjutan."
                : "From software development to government-sector solutions, we focus on quality, functionality, and sustainable results."}
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT LIST SECTION */}
      <section className="bg-white px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24 xl:px-24">
        <div className="mx-auto max-w-[1440px]">
          {/* SECTION HEADER */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>
                {isID ? "Karya Pilihan" : "Selected Work"}
              </SectionLabel>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {isID ? "Proyek Kami" : "Our Projects"}
                <span className="text-[#F59E0B]">.</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
                {isID
                  ? "Lihat solusi dan pengalaman yang kami bangun bersama klien."
                  : "Discover the solutions and experiences we have built with our clients."}
              </p>
            </div>

            <p className="text-xs text-neutral-500">
              {filteredProjects.length}{" "}
              {isID ? "proyek ditampilkan" : "projects shown"}
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-black/10 pb-5">
            {(["All", "SOFTWARE", "GOVERNMENT"] as ActiveType[]).map(
              (type) => {
                const isActive = activeType === type;

                const label =
                  type === "All"
                    ? isID
                      ? "Semua Proyek"
                      : "All Projects"
                    : type === "SOFTWARE"
                      ? "Software"
                      : isID
                        ? "Pemerintahan"
                        : "Government";

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 text-[11px] font-medium transition-colors duration-200 sm:text-xs ${
                      isActive
                        ? "border-[#F59E0B] bg-[#F59E0B] text-black"
                        : "border-black/10 bg-white text-neutral-600 hover:border-[#F59E0B] hover:text-neutral-900"
                    }`}
                  >
                    {label}
                  </button>
                );
              },
            )}
          </div>

          {/* LOADING STATE */}
          {loading && (
            <div
              className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              aria-label={isID ? "Memuat proyek" : "Loading projects"}
              aria-busy="true"
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-black/5 bg-white"
                >
                  <div className="aspect-[16/10] animate-pulse bg-neutral-200" />

                  <div className="space-y-3 p-3.5">
                    <div className="h-3 w-1/3 animate-pulse rounded bg-neutral-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-200" />
                    <div className="h-3 w-full animate-pulse rounded bg-neutral-200" />
                    <div className="h-3 w-2/3 animate-pulse rounded bg-neutral-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ERROR STATE */}
          {!loading && error && (
            <div
              className="mt-9 rounded-xl border border-red-200 bg-white px-5 py-10 text-center"
              role="alert"
            >
              <p className="text-sm text-red-600">{error}</p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-5 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-neutral-700"
              >
                {isID ? "Coba Lagi" : "Try Again"}
              </button>
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && !error && filteredProjects.length === 0 && (
            <div className="mt-9 rounded-xl border border-black/10 bg-white px-5 py-14 text-center">
              <p className="text-base font-medium text-neutral-800">
                {isID ? "Belum ada proyek" : "No projects yet"}
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {isID
                  ? "Proyek untuk kategori ini belum tersedia."
                  : "There are no projects available in this category yet."}
              </p>
            </div>
          )}

          {/* PROJECT CARDS */}
          {!loading && !error && filteredProjects.length > 0 && (
            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* CARD IMAGE */}
                  <a
                    href={`/projects/${project.slug}`}
                    aria-label={
                      isID
                        ? `Lihat detail ${project.title}`
                        : `View ${project.title} details`
                    }
                    className="relative block aspect-[16/10] overflow-hidden bg-neutral-200"
                  >
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                          {isID ? "Gambar Proyek" : "Project Image"}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-neutral-800">
                      {getTypeLabel(project.type)}
                    </span>

                    {project.year && (
                      <span className="absolute bottom-2.5 right-2.5 text-[10px] font-medium text-white">
                        {project.year}
                      </span>
                    )}
                  </a>

                  {/* CARD CONTENT */}
                  <div className="flex flex-1 flex-col p-3 sm:p-3.5">
                    {project.client && (
                      <p className="mb-1.5 line-clamp-1 text-[9px] font-medium uppercase tracking-wider text-neutral-400">
                        {project.client}
                      </p>
                    )}

                    <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-5 tracking-tight text-neutral-900 transition-colors group-hover:text-[#B77900]">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 min-h-[3.75rem] text-[11px] leading-5 text-neutral-500">
                      {project.projectDetails ||
                        (isID
                          ? "Pelajari solusi digital yang dikembangkan dalam proyek ini."
                          : "Discover the digital solution developed for this project.")}
                    </p>

                    {/* TECHNOLOGY TAGS */}
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {project.technologies
                            .slice(0, 2)
                            .map((technology, index) => (
                              <span
                                key={`${technology.name}-${index}`}
                                className="max-w-full truncate rounded bg-neutral-100 px-1.5 py-1 text-[8px] font-medium text-neutral-600"
                              >
                                {technology.name}
                              </span>
                            ))}

                          {project.technologies.length > 2 && (
                            <span className="rounded bg-neutral-100 px-1.5 py-1 text-[8px] font-medium text-neutral-500">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      )}

                    {/* CARD FOOTER */}
                    <div className="mt-auto pt-3">
                      <a
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 border-b border-[#F59E0B] pb-1 text-[10px] font-semibold text-neutral-800 transition-colors hover:text-[#B77900]"
                      >
                        {isID ? "Lihat Detail" : "View Details"}

                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
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
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <LanguageProvider>
      <ProjectsContent />
    </LanguageProvider>
  );
}