"use client";

import { useState, type ReactNode } from "react";

import Footer from "../components/global/Footer";
import CTA from "../components/main/CTA";
import NavbarMain from "../components/global/NavbarMain";

import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";

type ProjectCategory = "Software" | "Government";

interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  image: string;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
      <span className="h-px w-7 bg-current" />
      {children}
    </div>
  );
}

const projects: Project[] = [
  {
    id: 1,
    category: "Software",
    title: "Business Management Platform",
    description:
      "A digital platform designed to help businesses manage operational processes, data, and workflows in one integrated system.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    category: "Software",
    title: "Enterprise Digital System",
    description:
      "An integrated software system built to connect business processes and provide better visibility across daily operations.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    category: "Software",
    title: "Customer Service Platform",
    description:
      "A modern web-based platform designed to simplify customer management and improve service workflows.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    category: "Government",
    title: "Public Information System",
    description:
      "A digital information platform designed to provide accessible and structured public information.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    category: "Government",
    title: "Government Service Platform",
    description:
      "A digital platform supporting government services through a more structured and accessible online experience.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    category: "Government",
    title: "Regional Management System",
    description:
      "A centralized system designed to support administrative processes, reporting, and regional data management.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  },
];

function ProjectsContent() {
  const { language } = useLanguage();
  const isID = language === "ID";

  const [activeCategory, setActiveCategory] = useState<
    "All" | ProjectCategory
  >("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <NavbarMain />

     {/* HERO */}
<section className="relative overflow-hidden bg-[#171717] text-white">
  {/* Background decoration */}
  <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border-[90px] border-[#F59E0B]/10" />

  <div className="pointer-events-none absolute bottom-[-300px] left-[-180px] h-[560px] w-[560px] rounded-full border-[100px] border-white/[0.025]" />

  <div className="relative mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-24 lg:py-28">
    <div className="max-w-[900px]">
      {/* Label */}
      <div className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
        <span>IFTECH SOLUSINDO</span>
        <span className="h-px w-8 bg-white/20" />
        <span className="text-[#F59E0B]">
          {isID ? "Projects" : "Projects"}
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[46px] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-[58px] md:text-[68px]">
        {isID ? (
          <>
            Dari ide menjadi{" "}
            <span className="text-[#F59E0B]">
              solusi digital:
            </span>
            <br />
            Project Solusi Kami
          </>
        ) : (
          <>
            Where Ideas Become{" "}
            <span className="text-[#F59E0B]">
              Digital Solutions:
            </span>
            <br />
            Our Solution Projects
          </>
        )}
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-[780px] text-[14px] leading-7 text-white/45 md:text-[15px] md:leading-7">
        {isID
          ? "Dengan pengalaman bertahun-tahun dalam pengembangan software, kami menghadirkan berbagai solusi digital yang dirancang berdasarkan kebutuhan dan tantangan setiap klien. Mulai dari custom software, enterprise platform, hingga sistem terintegrasi, setiap project kami kembangkan dengan memadukan keahlian teknis, desain yang tepat, dan perhatian terhadap kualitas untuk menghasilkan solusi yang praktis, scalable, dan memberikan nilai jangka panjang."
          : "With years of experience in software development, we transform ideas, requirements, and business challenges into reliable digital solutions. From custom software and enterprise platforms to integrated systems, every project is carefully designed around the unique needs of our clients. We combine technical expertise, thoughtful design, and a commitment to quality to deliver solutions that are practical, scalable, and built to create lasting value."}
      </p>

      {/* Bottom information */}
      <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/10 pt-6">
        <div>
          <div className="text-[24px] font-semibold tracking-[-0.04em]">
            15<span className="text-[#F59E0B]">+</span>
          </div>
          <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
            {isID ? "Tahun Pengalaman" : "Years of Experience"}
          </p>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div>
          <div className="text-[24px] font-semibold tracking-[-0.04em]">
            {String(projects.length).padStart(2, "0")}
            <span className="text-[#F59E0B]">+</span>
          </div>
          <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
            {isID ? "Project Dibangun" : "Projects Built"}
          </p>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div>
          <div className="text-[24px] font-semibold tracking-[-0.04em]">
            Software
          </div>
          <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/30">
            {isID ? "Digital Solutions" : "Digital Solutions"}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionLabel>
                {isID ? "Yang Telah Kami Bangun" : "What We Have Built"}
              </SectionLabel>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-[850px] text-[28px] font-medium leading-[1.25] tracking-[-0.035em] md:text-[40px]">
                {isID ? (
                  <>
                    Dari sistem bisnis hingga program untuk institusi,
                    kami membangun{" "}
                    <span className="text-gray-400">
                      project yang dirancang untuk kebutuhan nyata.
                    </span>
                  </>
                ) : (
                  <>
                    From business systems to institutional programs, we build{" "}
                    <span className="text-gray-400">
                      projects designed around real-world needs.
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="bg-[#F7F7F6] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>
                {isID ? "Daftar Project" : "Project List"}
              </SectionLabel>

              <h2 className="mt-6 max-w-[750px] text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[58px]">
                {isID ? (
                  <>
                    Project yang telah{" "}
                    <span className="text-[#F59E0B]">
                      berhasil kami kerjakan.
                    </span>
                  </>
                ) : (
                  <>
                    Projects we have{" "}
                    <span className="text-[#F59E0B]">
                      successfully delivered.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">
              {String(filteredProjects.length).padStart(2, "0")}{" "}
              {isID ? "PROJECT" : "PROJECTS"}
            </div>
          </div>

          {/* FILTER */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-black/10 pb-6">
            {(["All", "Software", "Government"] as const).map(
              (category) => {
                const isActive = activeCategory === category;

                const label =
                  category === "All"
                    ? isID
                      ? "Semua"
                      : "All"
                    : category === "Government"
                      ? isID
                        ? "Pemerintah"
                        : "Government"
                      : "Software";

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      rounded-full
                      border
                      px-5
                      py-2.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-[#F59E0B] bg-[#F59E0B] text-white"
                          : "border-black/10 bg-white text-black/40 hover:border-[#F59E0B]/40 hover:text-black"
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              },
            )}
          </div>

          {/* PROJECT GRID */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="
                  group
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-black/10
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  {/* CATEGORY */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                      {project.category === "Government"
                        ? isID
                          ? "Pemerintah"
                          : "Government"
                        : "Software"}
                    </span>
                  </div>

                  {/* NUMBER */}
                  <div className="absolute bottom-5 right-5">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-white/60">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-7">
                  <h3 className="text-[23px] font-semibold leading-[1.15] tracking-[-0.035em]">
                    {project.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-[12px] leading-6 text-black/40">
                    {project.description}
                  </p>

                  {/* SEE MORE */}
                  <button
                    type="button"
                    className="
                      mt-7
                      flex
                      items-center
                      gap-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#171717]
                      transition-colors
                      duration-300
                      group-hover:text-[#F59E0B]
                    "
                  >
                    <span>
                      {isID ? "Lihat Detail" : "See More"}
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white">
                      →
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* BOTTOM STATEMENT */}
          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                IFTECH SOLUSINDO
              </span>
            </div>

            <p className="max-w-[420px] text-[11px] leading-6 text-black/30 md:text-right">
              {isID
                ? "Setiap project mencerminkan pengalaman kami dalam membangun dan mengembangkan sistem digital."
                : "Every project reflects our experience in building and developing digital systems."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
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