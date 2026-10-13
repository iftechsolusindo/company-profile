
"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import Footer from "../components/global/Footer";
import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";
import NavbarMain from "../components/global/NavbarMain";

type IconName =
  | "arrow"
  | "check"
  | "search"
  | "design"
  | "code"
  | "rocket"
  | "target"
  | "layers"
  | "chart"
  | "users"
  | "shield"
  | "spark";

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

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12.5 4.5 4.5L19 7.5" {...props} />
        </svg>
      );

    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" {...props} />
          <path d="m16 16 4 4" {...props} />
        </svg>
      );

    case "design":
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="17" height="16" rx="3" {...props} />
          <path d="M7.5 9h9M7.5 13h5" {...props} />
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

    case "rocket":
      return (
        <svg {...common}>
          <path
            d="M14.5 4.5c2.2-1.8 4.2-2 5-2 .1.8-.2 2.8-2 5l-5.7 5.7-3-3L14.5 4.5Z"
            {...props}
          />
          <path d="m8.8 11.2-3.5.7-2 2 4.2.6" {...props} />
          <path d="m12.8 15.2-.7 3.5-2 2-.6-4.2" {...props} />
          <path d="M6.5 17.5c-1.2.1-2.2.6-3 1.5" {...props} />
        </svg>
      );

    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" {...props} />
          <circle cx="12" cy="12" r="4.5" {...props} />
          <circle cx="12" cy="12" r="1.5" {...props} />
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

    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5" {...props} />
          <path d="M4 19h16" {...props} />
          <path d="m7 15 3-4 3 2 5-7" {...props} />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" {...props} />
          <path d="M3.5 20c.5-3.2 2.3-5 5.5-5s5 1.8 5.5 5" {...props} />
          <path d="M15 5.5a3 3 0 0 1 0 5.8" {...props} />
          <path d="M17 15c2 .5 3.3 2.1 3.5 5" {...props} />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 3 19 6v5.5c0 4.4-2.8 7.5-7 9.5-4.2-2-7-5.1-7-9.5V6l7-3Z"
            {...props}
          />
          <path d="m9 12 2 2 4-4" {...props} />
        </svg>
      );

    case "spark":
      return (
        <svg {...common}>
          <path
            d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z"
            {...props}
          />
          <path
            d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"
            {...props}
          />
        </svg>
      );

    default:
      return null;
  }
}

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em] ${
        light ? "text-[#F59E0B]" : "text-[#F59E0B]"
      }`}
    >
      <span className="h-px w-6 bg-current sm:w-7" />
      {children}
    </div>
  );
}

function NumberBadge({ number }: { number: string }) {
  return (
    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#F59E0B] sm:text-[11px]">
      {number}
    </span>
  );
}

/* =========================================================
   CORE VALUE CAROUSEL
========================================================= */

function CoreValueCarousel({ isID }: { isID: boolean }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const coreValues = [
    {
      number: "01",
      title: isID ? "Berorientasi pada Bisnis" : "Business Focused",
      subtitle: isID
        ? "Memahami sebelum membangun"
        : "Understand before building",
      description: isID
        ? "Kami memulai setiap proyek dengan memahami kebutuhan, tantangan, dan tujuan bisnis pelanggan agar solusi yang dibangun memberikan manfaat nyata."
        : "We start every project by understanding our customers' needs, challenges, and business goals to ensure every solution delivers meaningful value.",
      keywords: ["Business Goals", "Real Needs", "Measurable Impact"],
    },
    {
      number: "02",
      title: isID ? "Inovasi & Kualitas" : "Innovation & Quality",
      subtitle: isID
        ? "Teknologi dengan tujuan"
        : "Technology with purpose",
      description: isID
        ? "Kami menggabungkan kreativitas, teknologi yang tepat, dan proses pengembangan yang terstruktur untuk menghasilkan solusi yang efektif, andal, dan mudah dikembangkan."
        : "We combine creativity, appropriate technology, and structured development processes to deliver effective, reliable, and scalable solutions.",
      keywords: ["Innovation", "Reliability", "Scalability"],
    },
    {
      number: "03",
      title: isID ? "Kolaborasi & Kepercayaan" : "Collaboration & Trust",
      subtitle: isID
        ? "Tumbuh bersama pelanggan"
        : "Growing with our customers",
      description: isID
        ? "Kami membangun hubungan jangka panjang melalui komunikasi terbuka, kolaborasi yang erat, dan komitmen untuk terus mendukung perkembangan bisnis pelanggan."
        : "We build long-term relationships through open communication, close collaboration, and a commitment to supporting our customers' continued growth.",
      keywords: ["Transparency", "Partnership", "Long-Term Growth"],
    },
  ];

  const currentValue = coreValues[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % coreValues.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [coreValues.length]);

  return (
    <div className="mt-8 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.045)] sm:mt-12 md:mt-20">
      <div className="grid grid-cols-1 md:min-h-[340px] md:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT IMAGE PANEL */}
        <div className="relative flex min-h-[230px] flex-col justify-end overflow-hidden bg-neutral-900 p-5 text-white sm:min-h-[280px] sm:p-8 md:min-h-[340px] md:p-10">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
            alt={
              isID
                ? "Tim profesional berkolaborasi mengembangkan solusi teknologi"
                : "Professionals collaborating on technology solutions"
            }
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

          <div className="relative z-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F59E0B] sm:text-xs">
              {currentValue.number} / 03
            </p>

            <h3 className="mt-3 font-[var(--font-plus-jakarta)] text-xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl">
              {currentValue.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/80 sm:mt-3 sm:text-base">
              {currentValue.subtitle}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div className="flex flex-col justify-between p-5 sm:p-8 md:min-h-[340px] md:p-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F59E0B] sm:text-xs">
              {isID ? "Prinsip Kami" : "Our Principles"}
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:mt-5 sm:text-base sm:leading-8">
              {currentValue.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {currentValue.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-[11px] font-medium text-neutral-600 sm:text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* INDICATORS */}
          <div className="mt-6 border-t border-neutral-100 pt-4 sm:mt-8 sm:pt-5">
            <div
              className="flex items-center justify-start gap-2"
              role="group"
              aria-label={
                isID ? "Navigasi nilai inti" : "Core values navigation"
              }
            >
              {coreValues.map((value, index) => (
                <button
                  key={value.number}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={
                    isID
                      ? `Buka slide nilai inti ${index + 1}`
                      : `Go to core value slide ${index + 1}`
                  }
                  aria-current={activeSlide === index ? "step" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 ${
                    activeSlide === index
                      ? "w-8 bg-[#F59E0B]"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT CONTENT
========================================================= */

function AboutContent() {
  const { language } = useLanguage();
  const isID = language === "ID";

  const services = [
    {
      number: "01",
      icon: "code" as IconName,
      title: "Digital Product",
      description: isID
        ? "Website dan aplikasi digital yang dirancang berdasarkan kebutuhan pengguna dan tujuan bisnis."
        : "Websites and digital applications designed around user needs and business objectives.",
    },
    {
      number: "02",
      icon: "layers" as IconName,
      title: "Custom Software",
      description: isID
        ? "Sistem khusus yang menyesuaikan alur kerja, proses, dan kebutuhan operasional perusahaan."
        : "Custom systems tailored to your company's workflows, processes, and operational needs.",
    },
    {
      number: "03",
      icon: "users" as IconName,
      title: "Technology Partner",
      description: isID
        ? "Partner teknologi yang membantu merencanakan, membangun, dan mengembangkan solusi digital."
        : "A technology partner that helps plan, build, and continuously evolve your digital solutions.",
    },
  ];

  const values = [
    {
      number: "01",
      icon: "target" as IconName,
      title: "Business First",
      text: isID
        ? "Kami memahami tujuan bisnis terlebih dahulu sebelum menentukan solusi teknologi."
        : "We understand the business goal before deciding on the technology.",
    },
    {
      number: "02",
      icon: "spark" as IconName,
      title: "Simple & Effective",
      text: isID
        ? "Kami mencari solusi yang sederhana, efektif, dan mudah digunakan."
        : "We seek solutions that are simple, effective, and easy to use.",
    },
    {
      number: "03",
      icon: "chart" as IconName,
      title: "Built to Grow",
      text: isID
        ? "Kami membangun sistem dengan mempertimbangkan kebutuhan bisnis di masa depan."
        : "We build systems with future business needs in mind.",
    },
    {
      number: "04",
      icon: "shield" as IconName,
      title: "Long-Term Partnership",
      text: isID
        ? "Kami ingin menjadi partner jangka panjang, bukan hanya vendor dalam satu proyek."
        : "We aim to become a long-term partner, not simply a vendor for one project.",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Discover",
      icon: "search" as IconName,
      text: isID
        ? "Memahami masalah, kebutuhan, dan tujuan bisnis."
        : "Understanding the problem, needs, and business goals.",
    },
    {
      number: "02",
      title: "Design",
      icon: "design" as IconName,
      text: isID
        ? "Menyusun pengalaman dan solusi yang tepat."
        : "Designing the right experience and solution.",
    },
    {
      number: "03",
      title: "Develop",
      icon: "code" as IconName,
      text: isID
        ? "Membangun produk menggunakan teknologi yang sesuai."
        : "Building the product with the right technology.",
    },
    {
      number: "04",
      title: "Deliver & Grow",
      icon: "rocket" as IconName,
      text: isID
        ? "Meluncurkan solusi dan terus mengembangkannya."
        : "Launching the solution and continuously improving it.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-white font-[var(--font-inter)] text-neutral-900">
      <NavbarMain />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#B9470B] text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border-[45px] border-white/[0.045] sm:-right-40 sm:-top-40 sm:h-[500px] sm:w-[500px] sm:border-[80px]" />

        <div className="pointer-events-none absolute -bottom-36 left-[38%] h-[300px] w-[300px] rounded-full border-[45px] border-white/[0.035] sm:-bottom-48 sm:h-[500px] sm:w-[500px] sm:border-[70px]" />

        <div className="relative mx-auto grid min-h-0 max-w-[1280px] grid-cols-1 lg:min-h-[600px] lg:grid-cols-[1fr_1fr] xl:min-h-[650px]">
          {/* LEFT */}
          <div className="relative z-10 flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-20 xl:px-16">
            <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8 sm:gap-3">
              <span className="h-px w-6 bg-[#F59E0B] sm:w-8" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[11px] sm:tracking-[0.16em]">
                IFTECH SOLUSINDO
              </span>

              <span className="text-white/30">/</span>

              <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/85 sm:text-[11px] sm:tracking-[0.16em]">
                {isID ? "Tentang Kami" : "About Us"}
              </span>
            </div>

            <div className="max-w-[650px]">
              <h1 className="font-[var(--font-plus-jakarta)] text-[36px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[54px] md:text-[62px] xl:text-[70px]">
                {isID ? (
                  <>
                    Mengenal
                    <br />
                    <span className="text-white/75">
                      IFTECH SOLUSINDO.
                    </span>
                  </>
                ) : (
                  <>
                    About
                    <br />
                    <span className="text-white/75">
                      IFTECH SOLUSINDO.
                    </span>
                  </>
                )}
              </h1>
            </div>

            <p className="mt-5 max-w-[550px] text-sm leading-6 text-white/75 sm:mt-7 sm:text-base sm:leading-8">
              {isID
                ? "Kami adalah perusahaan teknologi yang membantu bisnis membangun solusi digital yang relevan, terukur, dan dapat berkembang bersama kebutuhan mereka."
                : "We are a technology company helping businesses build relevant, measurable, and scalable digital solutions that grow with their needs."}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-y-4 sm:mt-10">
              {[
                { number: "01", label: "Business First" },
                { number: "02", label: "Digital Solution" },
                { number: "03", label: "Long Term" },
              ].map((item, index) => (
                <div key={item.number} className="flex items-center">
                  {index > 0 && (
                    <div className="mr-3 h-8 w-px bg-white/20 sm:mr-5" />
                  )}

                  <div className="pr-3 sm:pr-5">
                    <p className="font-[var(--font-plus-jakarta)] text-xl font-bold leading-none tracking-tight sm:text-2xl">
                      {item.number}
                    </p>

                    <p className="mt-2 text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-white/60 sm:text-[10px] sm:tracking-[0.12em]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — HERO IMAGE */}
          <div className="relative min-h-[240px] overflow-hidden sm:min-h-[360px] lg:mr-[calc((100vw-1280px)/-2)] lg:min-h-[600px] xl:min-h-[650px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85')",
              }}
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-y-0 left-0 hidden w-[65%] bg-gradient-to-r from-[#B9470B] via-[#B9470B]/80 to-transparent lg:block" />

            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#B9470B]/60 to-transparent lg:hidden" />

            <div className="absolute inset-y-0 left-0 hidden w-[38%] bg-gradient-to-r from-[#B9470B] to-transparent lg:block" />

            <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#B9470B]/35 to-transparent" />
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK PROCESS CARD
      ===================================================== */}
      <section className="relative z-20 mx-auto -mt-5 max-w-[1120px] px-4 sm:-mt-10 sm:px-5">
        <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.07)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                icon: "search" as IconName,
                title: isID ? "Memahami Kebutuhan" : "Understanding Needs",
                text: isID
                  ? "Memahami masalah dan tujuan bisnis."
                  : "Understanding the business problem and goals.",
              },
              {
                icon: "design" as IconName,
                title: isID ? "Merancang Solusi" : "Designing Solutions",
                text: isID
                  ? "Menyusun solusi yang tepat dan terukur."
                  : "Creating the right and measurable solution.",
              },
              {
                icon: "rocket" as IconName,
                title: isID ? "Membangun & Berkembang" : "Build & Grow",
                text: isID
                  ? "Membangun dan mengembangkan solusi."
                  : "Building and continuously improving the solution.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group px-5 py-6 sm:px-8 sm:py-9 ${
                  index !== 2
                    ? "border-b border-neutral-100 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F59E0B] transition-colors duration-300 group-hover:bg-[#F59E0B] group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon name={item.icon} size={23} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="mt-4 text-center sm:mt-5">
                  <h3 className="font-[var(--font-plus-jakarta)] text-base font-semibold tracking-tight text-neutral-900 sm:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[270px] text-sm leading-6 text-neutral-500">
                    {item.text}
                  </p>
                </div>

                <div className="mx-auto mt-4 h-0.5 w-7 bg-[#F59E0B]/70 transition-all duration-300 group-hover:w-11 sm:mt-5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT / CORE VALUE / MISSION & VISION
      ===================================================== */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6 md:px-10">
          {/* STATEMENT */}
          <div className="mx-auto max-w-[850px] text-center">
            <p className="text-[15px] font-normal leading-7 text-neutral-700 sm:text-lg sm:leading-9 md:text-xl">
              {isID ? (
                <>
                  Kami menghadirkan solusi inovatif melalui{" "}
                  <span className="font-semibold text-[#F59E0B]">
                    Application, Digital Service, Mobile, AI, dan Security
                  </span>{" "}
                  untuk membantu bisnis berkembang di dunia yang terus
                  berubah.
                </>
              ) : (
                <>
                  We deliver innovative solutions around{" "}
                  <span className="font-semibold text-[#F59E0B]">
                    Application, Digital Service, Mobile, AI, and Security
                  </span>{" "}
                  to help businesses thrive in a dynamic world.
                </>
              )}
            </p>

            <p className="mt-4 text-[15px] font-normal leading-7 text-neutral-700 sm:mt-5 sm:text-lg sm:leading-9 md:text-xl">
              {isID ? (
                <>
                  Kami menyediakan layanan teknologi untuk berbagai industri
                  di Indonesia, termasuk{" "}
                  <span className="font-semibold text-[#F59E0B]">
                    Institusi, Telekomunikasi & Service Provider, Perusahaan
                    Besar, dan BUMN.
                  </span>
                </>
              ) : (
                <>
                  We deliver IT technology services for customers across
                  industries in Indonesia, including{" "}
                  <span className="font-semibold text-[#F59E0B]">
                    Banking & Financial Institutions, Telecommunication &
                    Service Providers, Big Enterprises, and State-Owned
                    Companies.
                  </span>
                </>
              )}
            </p>
          </div>

          {/* CORE VALUE */}
          <CoreValueCarousel isID={isID} />

          {/* MISSION & VISION */}
          <div className="mt-4 grid grid-cols-1 items-stretch gap-4 sm:mt-5 sm:gap-5 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-colors duration-300 hover:bg-white sm:p-8">
              <h3 className="mt-1 font-[var(--font-plus-jakarta)] text-2xl font-bold tracking-tight text-neutral-900 sm:mt-2">
                {isID ? "Misi Kami" : "Our Mission"}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600 sm:mt-4 sm:text-[15px] sm:leading-8">
                {isID
                  ? "Menghadirkan solusi teknologi yang inovatif, andal, dan tepat guna dengan memahami kebutuhan bisnis, membangun kemitraan yang kuat, serta membantu pelanggan meningkatkan efisiensi dan mencapai tujuan mereka."
                  : "To deliver innovative, reliable, and effective technology solutions by understanding business needs, building strong partnerships, and helping customers improve efficiency and achieve their goals."}
              </p>

              <div className="mt-auto pt-5 sm:pt-7">
                <div className="h-1 w-10 rounded-full bg-[#F59E0B]" />
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-neutral-900 p-5 text-white transition-colors duration-300 hover:bg-neutral-800 sm:p-8">
              <h3 className="mt-1 font-[var(--font-plus-jakarta)] text-2xl font-bold tracking-tight sm:mt-2">
                {isID ? "Visi Kami" : "Our Vision"}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75 sm:mt-4 sm:text-[15px] sm:leading-8">
                {isID
                  ? "Menjadi mitra teknologi terpercaya yang mendorong transformasi digital dan menciptakan dampak positif bagi bisnis serta masyarakat melalui solusi teknologi yang berkelanjutan."
                  : "To become a trusted technology partner that drives digital transformation and creates a positive impact on businesses and society through sustainable technology solutions."}
              </p>

              <div className="mt-auto pt-5 sm:pt-7">
                <div className="h-1 w-10 rounded-full bg-[#F59E0B]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY
      ===================================================== */}
      <section
        id="company"
        className="bg-white py-12 sm:py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>
                {isID ? "Perusahaan Kami" : "Our Company"}
              </SectionLabel>

              <h2 className="mt-4 font-[var(--font-plus-jakarta)] text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-[44px]">
                {isID
                  ? "Lebih dari sekadar solusi masa depan Anda."
                  : "More than just a solution for your future."}
              </h2>

              <div className="mt-6 hidden h-px w-20 bg-[#F59E0B] lg:mt-7 lg:block" />
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-[760px] font-[var(--font-plus-jakarta)] text-lg font-semibold leading-7 tracking-tight text-neutral-800 sm:text-xl sm:leading-8 md:text-2xl md:leading-9">
                {isID
                  ? "Kami membantu perusahaan menerjemahkan kebutuhan bisnis menjadi solusi teknologi yang dapat digunakan, diukur, dan dikembangkan."
                  : "We help businesses translate their needs into technology solutions that can be used, measured, and scaled."}
              </p>

              <p className="mt-4 max-w-[700px] text-sm leading-7 text-neutral-600 sm:mt-5 sm:text-[15px] sm:leading-8">
                {isID
                  ? "Mulai dari website, aplikasi, hingga custom software, kami menggabungkan pemahaman terhadap bisnis dengan proses pengembangan yang terstruktur. Setiap solusi dirancang untuk menjawab kebutuhan nyata, bukan sekadar mengikuti tren teknologi."
                  : "From websites and applications to custom software, we combine business understanding with a structured development process. Every solution is designed to solve real needs rather than simply follow technology trends."}
              </p>

              <div className="mt-7 grid grid-cols-2 border-y border-neutral-200 sm:mt-9 md:grid-cols-4">
                {[
                  { number: "01", title: "Business Focused" },
                  { number: "02", title: "Digital Solution" },
                  { number: "03", title: "Structured Process" },
                  { number: "04", title: "Long Term" },
                ].map((item, index) => (
                  <div
                    key={item.number}
                    className={`px-3 py-4 sm:px-5 sm:py-6 ${
                      index % 2 === 0 ? "border-r border-neutral-200" : ""
                    } ${
                      index > 1
                        ? "border-t border-neutral-200 md:border-t-0"
                        : ""
                    } ${
                      index === 1 || index === 2
                        ? "md:border-r md:border-neutral-200"
                        : ""
                    }`}
                  >
                    <p className="font-[var(--font-plus-jakarta)] text-2xl font-bold tracking-tight sm:text-[27px]">
                      {item.number}
                    </p>

                    <p className="mt-2 text-[9px] font-semibold uppercase leading-5 tracking-[0.06em] text-neutral-500 sm:text-[11px] sm:tracking-[0.08em]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR VALUES — DARK
      ===================================================== */}
      <section className="bg-neutral-900 py-12 text-white sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>
                {isID ? "Nilai Kami" : "Our Values"}
              </SectionLabel>

              <h2 className="mt-4 font-[var(--font-plus-jakarta)] text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-[48px]">
                {isID
                  ? "Cara kami berpikir dan bekerja."
                  : "How we think and work."}
              </h2>

              <p className="mt-4 max-w-[440px] text-sm leading-7 text-white/65 sm:mt-5 sm:text-[15px] sm:leading-8">
                {isID
                  ? "Teknologi yang baik lahir dari proses yang baik. Prinsip ini menjadi dasar dalam setiap proyek yang kami kerjakan."
                  : "Great technology comes from a great process. These principles guide every project we work on."}
              </p>

              <div className="mt-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.12em] text-white/45 sm:mt-8 sm:text-[11px]">
                <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                IFTECH SOLUSINDO
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {values.map((item) => (
                  <div
                    key={item.number}
                    className="group flex gap-4 py-5 sm:gap-7 sm:py-7"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-white/65 transition-colors duration-300 group-hover:bg-orange-50 group-hover:text-[#F59E0B] sm:h-11 sm:w-11">
                      <Icon name={item.icon} size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <h3 className="font-[var(--font-plus-jakarta)] text-base font-semibold leading-6 sm:text-lg md:text-xl">
                          {item.title}
                        </h3>

                        <NumberBadge number={item.number} />
                      </div>

                      <p className="mt-2 text-sm leading-7 text-white/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6 md:px-10">
          <div className="flex flex-col justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
            <div className="max-w-[700px]">
              <SectionLabel>
                {isID ? "Apa yang Kami Lakukan" : "What We Do"}
              </SectionLabel>

              <h2 className="mt-4 font-[var(--font-plus-jakarta)] text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-[48px]">
                {isID
                  ? "Mengubah kebutuhan menjadi solusi digital."
                  : "Turning business needs into digital solutions."}
              </h2>
            </div>

            <p className="max-w-[350px] text-sm leading-7 text-neutral-600 sm:text-[15px]">
              {isID
                ? "Dari ide hingga implementasi, kami membantu membangun solusi yang relevan dengan bisnis Anda."
                : "From idea to implementation, we help build solutions that are relevant to your business."}
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.number}
                className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] sm:min-h-[340px] sm:p-8 md:min-h-[390px] md:p-9"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F59E0B] transition-colors duration-300 group-hover:bg-[#F59E0B] group-hover:text-white sm:h-12 sm:w-12">
                    <Icon name={item.icon} size={22} />
                  </div>

                  <NumberBadge number={item.number} />
                </div>

                <div className="relative z-10 mt-10 sm:mt-14 md:absolute md:bottom-8 md:left-9 md:right-9 md:mt-0">
                  <h3 className="font-[var(--font-plus-jakarta)] text-xl font-bold tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#F59E0B] sm:mt-6 sm:text-[11px]">
                    {isID ? "Pelajari lebih lanjut" : "Learn more"}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <Icon name="arrow" size={15} />
                    </span>
                  </div>
                </div>

                <span className="pointer-events-none absolute -bottom-7 -right-2 font-[var(--font-plus-jakarta)] text-[100px] font-bold leading-none tracking-tight text-neutral-100 transition-transform duration-500 group-hover:translate-x-2 sm:-bottom-10 sm:-right-3 sm:text-[120px]">
                  {item.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}
