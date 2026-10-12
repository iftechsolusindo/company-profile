
"use client";

import { type ReactNode } from "react";

import Footer from "../components/global/Footer";
import CTA from "../components/main/CTA";
import NavbarMain from "../components/global/NavbarMain";

import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";

type IconName =
  | "arrow"
  | "code"
  | "layers"
  | "mobile"
  | "cloud"
  | "check";

interface Technology {
  name: string;
  logo: string;
}

function Icon({
  name,
  size = 22,
  strokeWidth = 1.8,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  const props = {
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" {...props} />
          <path d="m13 6 6 6-6 6" {...props} />
        </svg>
      );

    case "code":
      return (
        <svg {...common}>
          <path d="m9 7-5 5 5 5" {...props} />
          <path d="m15 7 5 5-5 5" {...props} />
          <path d="m13 4-2 16" {...props} />
        </svg>
      );

    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 8 4-8 4-8-4 8-4Z" {...props} />
          <path d="m4 12 8 4 8-4" {...props} />
          <path d="m4 17 8 4 8-4" {...props} />
        </svg>
      );

    case "mobile":
      return (
        <svg {...common}>
          <rect
            x="6.5"
            y="2.5"
            width="11"
            height="19"
            rx="2"
            {...props}
          />
          <path d="M10 18.5h4" {...props} />
        </svg>
      );

    case "cloud":
      return (
        <svg {...common}>
          <path
            d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6 8.5 4.5 4.5 0 0 0 7 18Z"
            {...props}
          />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12.5 4.5 4.5L19 7.5" {...props} />
        </svg>
      );

    default:
      return null;
  }
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
      <span className="h-px w-7 bg-current" />
      {children}
    </div>
  );
}

const technologies: Technology[] = [
  {
    name: "Laravel",
    logo: "/hero-slider/laravel-96.png",
  },
  {
    name: "Java",
    logo: "/hero-slider/java.svg",
  },
  {
    name: "Spring Boot",
    logo: "/hero-slider/spring-boot.svg",
  },
  {
    name: "Node.js",
    logo: "/hero-slider/nodejs.svg",
  },
  {
    name: "Flutter",
    logo: "/hero-slider/flutter.svg",
  },
  {
    name: "Docker",
    logo: "/hero-slider/docker.svg",
  },
  {
    name: "Next JS",
    logo: "/hero-slider/nextjs.svg",
  },
  {
    name: ".NET",
    logo: "/hero-slider/dotnet.svg",
  },
  {
    name: "Golang",
    logo: "/hero-slider/golang.svg",
  },
];

function SolutionsContent() {
  const { language } = useLanguage();
  const isID = language === "ID";

  const solutions: {
    number: string;
    icon: IconName;
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      number: "01",
      icon: "code",
      title: "Web Development",
      description: isID
        ? "Website dan web application yang cepat, responsif, dan dirancang untuk kebutuhan bisnis."
        : "Fast, responsive websites and web applications built around your business needs.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "02",
      icon: "mobile",
      title: "Mobile Application",
      description: isID
        ? "Aplikasi mobile yang intuitif, modern, dan memberikan pengalaman pengguna yang nyaman."
        : "Intuitive and modern mobile applications designed for a seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "03",
      icon: "layers",
      title: "UI/UX Design",
      description: isID
        ? "Merancang interface dan pengalaman pengguna yang sederhana, jelas, dan berorientasi pada kebutuhan pengguna."
        : "Designing clear, intuitive interfaces and experiences focused on real user needs.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "04",
      icon: "cloud",
      title: "Custom Software",
      description: isID
        ? "Software khusus yang dibangun mengikuti proses, workflow, dan kebutuhan operasional bisnis."
        : "Custom software built around your business processes, workflows, and operational requirements.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "05",
      icon: "layers",
      title: "Procurement Services",
      description: isID
        ? "Penyediaan perangkat IT, perangkat keras, dan kebutuhan teknologi bisnis sesuai spesifikasi dan kebutuhan perusahaan."
        : "Sourcing and supplying IT equipment, hardware, and business technology products based on your company's specifications and needs.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Relevant",
      text: isID
        ? "Dibangun berdasarkan kebutuhan nyata."
        : "Built around real business needs.",
    },
    {
      number: "02",
      title: "Scalable",
      text: isID
        ? "Siap berkembang bersama bisnis."
        : "Designed to grow with the business.",
    },
    {
      number: "03",
      title: "Measurable",
      text: isID
        ? "Memberikan hasil yang dapat dievaluasi."
        : "Designed to deliver measurable results.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <NavbarMain />

      {/* ================================================== */}
      {/* HERO SECTION */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#171717] text-white">
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full border-[75px] border-[#F59E0B]/10 md:h-[520px] md:w-[520px]" />

        <div className="pointer-events-none absolute bottom-[-260px] left-[-180px] h-[440px] w-[440px] rounded-full border-[80px] border-white/[0.025]" />

        <div className="pointer-events-none absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-[#F59E0B]" />

        <div className="pointer-events-none absolute right-[22%] top-[32%] h-1 w-1 rounded-full bg-white/30" />

        <div className="relative mx-auto max-w-[1180px] px-6 py-14 md:px-10 md:py-18 lg:py-22">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            {/* LEFT CONTENT */}

            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                <span>IFTECH SOLUSINDO</span>
                <span className="h-px w-7 bg-white/20" />
                <span className="text-[#F59E0B]">
                  {isID ? "Solusi" : "Solutions"}
                </span>
              </div>

              <h1 className="max-w-[900px] text-[42px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[56px] md:text-[68px] lg:text-[76px]">
                {isID ? (
                  <>
                    Solusi digital untuk{" "}
                    <span className="text-[#F59E0B]">
                      kebutuhan bisnis.
                    </span>
                  </>
                ) : (
                  <>
                    Digital solutions for{" "}
                    <span className="text-[#F59E0B]">
                      business needs.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-[650px] text-[14px] leading-7 text-white/45 md:text-[15px]">
                {isID
                  ? "Kami membantu perusahaan merancang, membangun, dan mengembangkan solusi teknologi yang relevan, scalable, dan siap digunakan."
                  : "We help businesses design, build, and evolve technology solutions that are relevant, scalable, and ready for real-world use."}
              </p>
            </div>

            {/* RIGHT CONTENT */}

            <div className="lg:col-span-4">
              <div className="border-l border-white/10 pl-5 lg:pl-7">
                <div className="text-[38px] font-semibold tracking-[-0.05em] text-white">
                  04<span className="text-[#F59E0B]">+</span>
                </div>

                <p className="mt-1 max-w-[180px] text-[10px] uppercase leading-5 tracking-[0.12em] text-white/35">
                  {isID
                    ? "Area layanan teknologi"
                    : "Technology service areas"}
                </p>
              </div>
            </div>
          </div>

          {/* HERO TAGS */}

          <div className="mt-9 flex flex-wrap gap-2.5 md:mt-10">
            {[
              "Business Focused",
              "Technology Driven",
              "Built to Grow",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-white/55"
              >
                <span className="text-[#F59E0B]">
                  0{index + 1}
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* WHAT WE BUILD */}
      {/* ================================================== */}

      <section className="bg-white py-10 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <SectionLabel>
                {isID ? "Apa yang Kami Bangun" : "What We Build"}
              </SectionLabel>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-[850px] text-[26px] font-medium leading-[1.25] tracking-[-0.035em] md:text-[36px]">
                {isID ? (
                  <>
                    Dari ide hingga produk digital, kami membantu bisnis
                    mengubah{" "}
                    <span className="text-gray-400">
                      kebutuhan kompleks menjadi solusi yang sederhana.
                    </span>
                  </>
                ) : (
                  <>
                    From ideas to digital products, we help businesses turn{" "}
                    <span className="text-gray-400">
                      complex requirements into simple solutions.
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SERVICES */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F7F7F6] text-[#171717]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          {/* SERVICES HEADER */}

          <div className="grid grid-cols-1 gap-5 py-10 md:py-12 lg:grid-cols-12 lg:gap-10 lg:py-14">
            <div className="lg:col-span-7">
              <SectionLabel>
                {isID ? "Layanan Kami" : "Our Services"}
              </SectionLabel>

              <h2 className="mt-4 max-w-[760px] text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] md:text-[52px] lg:text-[58px]">
                {isID ? (
                  <>
                    Kami membangun{" "}
                    <span className="text-[#F59E0B]">
                      solusi digital.
                    </span>
                  </>
                ) : (
                  <>
                    We build{" "}
                    <span className="text-[#F59E0B]">
                      digital solutions.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="flex items-end lg:col-span-5">
              <div className="max-w-[430px] border-l border-black/10 pl-5">
                <p className="text-[13px] leading-6 text-black/45 md:text-[14px]">
                  {isID
                    ? "Mulai dari website hingga software khusus, setiap solusi dibuat berdasarkan kebutuhan nyata."
                    : "From websites to custom software, every solution is built around real business needs."}
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES LIST */}

          <div className="border-t border-black/10">
            {solutions.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden border-b border-black/10"
              >
                {/* BACKGROUND IMAGE */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full scale-[1.06] object-cover opacity-0 saturate-50 blur-[1px] transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-[0.08]"
                  />

                  <div className="absolute inset-0 bg-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/[0.035] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* SERVICE ROW */}

                <div className="relative z-10 flex min-h-[120px] items-center py-5 transition-all duration-500 group-hover:min-h-[150px] md:py-6">
                  {/* NUMBER */}

                  <div className="w-[42px] shrink-0 md:w-[80px]">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#F59E0B]">
                      {item.number}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="flex min-w-0 flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
                    <div className="min-w-0">
                      <div className="mb-1.5 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30 transition-colors duration-300 group-hover:text-black/50">
                          {isID ? "Layanan" : "Service"}
                        </span>
                      </div>

                      <h3 className="text-[25px] font-semibold tracking-[-0.04em] text-[#171717] transition-all duration-500 group-hover:translate-x-1 sm:text-[30px] md:text-[36px]">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-[580px] text-[12px] leading-6 text-black/40 transition-colors duration-500 group-hover:text-black/60 md:text-[13px]">
                        {item.description}
                      </p>
                    </div>

                    {/* ARROW ICON */}

                    <div className="flex shrink-0 items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/30 transition-all duration-500 group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white md:h-12 md:w-12">
                        <Icon
                          name="arrow"
                          size={19}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACKGROUND NUMBER */}

                <div className="pointer-events-none absolute bottom-[-20px] right-4 text-[90px] font-bold leading-none tracking-[-0.08em] text-black/[0.025] transition-all duration-500 group-hover:text-black/[0.05] md:text-[100px]">
                  {item.number}
                </div>

                {/* ORANGE HOVER LINE */}

                <div className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-[#F59E0B] transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>

          <div className="h-8 md:h-10" />
        </div>
      </section>

      {/* ================================================== */}
      {/* TECHNOLOGY STACK */}
      {/* ================================================== */}

      <section className="bg-white py-10 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* LEFT CONTENT */}

            <div className="lg:col-span-5">
              <SectionLabel>
                Technology Stack
              </SectionLabel>

              <h2 className="mt-4 max-w-[520px] text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[50px]">
                {isID
                  ? "Teknologi yang mendukung setiap solusi."
                  : "Technology behind every solution."}
              </h2>

              <p className="mt-5 max-w-[450px] text-[13px] leading-6 text-gray-500 md:text-[14px]">
                {isID
                  ? "Kami memilih teknologi berdasarkan kebutuhan, skalabilitas, performa, dan keberlanjutan produk."
                  : "We select technologies based on requirements, scalability, performance, and long-term sustainability."}
              </p>

              <div className="mt-7 border-l-2 border-[#F59E0B] pl-4 md:mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-gray-900">
                  Technology agnostic
                </p>

                <p className="mt-1.5 max-w-[350px] text-[12px] leading-6 text-gray-400">
                  {isID
                    ? "Teknologi dipilih berdasarkan kebutuhan proyek, bukan sekadar mengikuti tren."
                    : "Technology is selected based on project needs, not simply because it is trending."}
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT: TECHNOLOGY GRID */}

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 border-l border-t border-gray-200 sm:grid-cols-3">
                {technologies.map((technology, index) => (
                  <div
                    key={technology.name}
                    className="group relative flex min-h-[130px] flex-col justify-between border-b border-r border-gray-200 bg-white p-4 transition-all duration-500 ease-out hover:bg-gray-50/80 hover:shadow-[inset_0_0_0_1px_rgba(245,158,11,0.08)] md:min-h-[145px] md:p-5"
                  >
                    {/* HOVER GLOW */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F59E0B]/[0.035] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* NUMBER */}

                    <span className="relative z-10 text-[9px] font-bold tracking-[0.16em] text-gray-300 transition-colors duration-300 group-hover:text-[#F59E0B]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TECHNOLOGY */}

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-2 transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:border-[#F59E0B]/20 group-hover:bg-white group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                        <img
                          src={technology.logo}
                          alt={`${technology.name} logo`}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="break-words text-[13px] font-semibold tracking-[-0.02em] text-gray-900 transition-colors duration-300 group-hover:text-[#171717] md:text-[14px]">
                          {technology.name}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-gray-400 transition-colors duration-300 group-hover:text-[#F59E0B]/70">
                          Technology
                        </p>
                      </div>
                    </div>

                    {/* ORANGE INDICATOR */}

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F59E0B] transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SOLUTION PRINCIPLES */}
      {/* ================================================== */}

      <section className="bg-white py-10 md:py-12 lg:py-16 mb-10">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-10">
            {/* LEFT CONTENT */}

            <div className="lg:col-span-5">
              <SectionLabel>
                {isID ? "Prinsip Solusi" : "Solution Principles"}
              </SectionLabel>

              <h2 className="mt-4 max-w-[500px] text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[50px]">
                {isID
                  ? "Bukan sekadar teknologi."
                  : "More than just technology."}
              </h2>
            </div>

            {/* RIGHT CONTENT */}

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 border-t border-gray-200 sm:grid-cols-3">
                {principles.map((item) => (
                  <div
                    key={item.number}
                    className="border-b border-gray-200 py-6 sm:border-r sm:px-5 sm:last:border-r-0 md:py-7"
                  >
                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#F59E0B]">
                      {item.number}
                    </span>

                    <h3 className="mt-7 text-[22px] font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-gray-500 md:text-[13px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* CALL TO ACTION */}
      {/* ================================================== */}

      <CTA />

      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}

      <Footer />
    </main>
  );
}

export default function SolutionsPage() {
  return (
    <LanguageProvider>
      <SolutionsContent />
    </LanguageProvider>
  );
}
