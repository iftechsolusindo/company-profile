"use client";

import type { ReactNode } from "react";

import Footer from "../components/global/Footer";
import CTA from "../components/main/CTA";
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
          <rect
            x="3.5"
            y="4"
            width="17"
            height="16"
            rx="3"
            {...props}
          />
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
          <path
            d="M3.5 20c.5-3.2 2.3-5 5.5-5s5 1.8 5.5 5"
            {...props}
          />
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
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#F59E0B]" : "text-[#F59E0B]"
      }`}
    >
      <span className="h-[1px] w-7 bg-current" />
      {children}
    </div>
  );
}



function NumberBadge({ number }: { number: string }) {
  return (
    <span className="text-[10px] font-bold tracking-[0.16em] text-[#F59E0B]">
      {number}
    </span>
  );
}


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
        ? "Sistem khusus yang menyesuaikan workflow, proses, dan kebutuhan operasional perusahaan."
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
        ? "Kami ingin menjadi partner jangka panjang, bukan hanya vendor dalam satu project."
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
    <main className="min-h-screen bg-white text-[#171717]">
      <NavbarMain />
<section className="relative overflow-hidden bg-[#B9470B] text-white">
  {/* Decorative circles */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[80px] border-white/[0.045]" />

  <div className="pointer-events-none absolute -bottom-48 left-[38%] h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.035]" />

  {/* Hero grid */}
  <div className="relative mx-auto grid min-h-[650px] max-w-[1280px] grid-cols-1 lg:grid-cols-[1fr_1fr]">


    <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-16">

      {/* Breadcrumb / Page label */}
      <div className="mb-9 flex items-center gap-3">
        <span className="h-[2px] w-8 bg-[#F59E0B]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
          IFTECH SOLUSINDO
        </span>

        <span className="text-white/25">/</span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
          {isID ? "Tentang Kami" : "About Us"}
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-[680px]">

        {/* <p className="mb-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-[#FBBF24] md:text-[17px]">
          {isID ? "Tentang Kami" : "About Us"}
        </p> */}

        <h1 className="text-[48px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[58px] md:text-[68px] xl:text-[74px]">
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

      {/* Description */}
      <p className="mt-8 max-w-[570px] text-[14px] font-normal leading-7 text-white/65 md:text-[15px]">
        {isID
          ? "Kami adalah perusahaan teknologi yang membantu bisnis membangun solusi digital yang relevan, terukur, dan dapat berkembang bersama kebutuhan mereka."
          : "We are a technology company helping businesses build relevant, measurable, and scalable digital solutions that grow with their needs."}
      </p>

    
      <div className="mt-11 flex flex-wrap items-center">

        {/* 01 */}
        <div className="pr-7">
          <p className="text-[22px] font-bold leading-none tracking-[-0.03em] text-white">
            01
          </p>

          <p className="mt-2 text-[8px] font-semibold uppercase leading-none tracking-[0.16em] text-white/45">
            Business First
          </p>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-white/20" />

        {/* 02 */}
        <div className="px-7">
          <p className="text-[22px] font-bold leading-none tracking-[-0.03em] text-white">
            02
          </p>

          <p className="mt-2 text-[8px] font-semibold uppercase leading-none tracking-[0.16em] text-white/45">
            Digital Solution
          </p>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-white/20" />

        {/* 03 */}
        <div className="pl-7">
          <p className="text-[22px] font-bold leading-none tracking-[-0.03em] text-white">
            03
          </p>

          <p className="mt-2 text-[8px] font-semibold uppercase leading-none tracking-[0.16em] text-white/45">
            Long Term
          </p>
        </div>
      </div>
    </div>

  
    <div
      className="
        relative
        min-h-[380px]
        overflow-hidden
        lg:min-h-[650px]
        lg:mr-[calc((100vw-1280px)/-2)]
      "
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Orange transition */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-[65%]
          bg-gradient-to-r
          from-[#B9470B]
          via-[#B9470B]/80
          to-transparent
        "
      />

      {/* Soft transition */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-[38%]
          bg-gradient-to-r
          from-[#B9470B]
          to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[28%]
          bg-gradient-to-t
          from-[#B9470B]/35
          to-transparent
        "
      />

      {/* Image label */}
      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3">
        <span className="h-px w-8 bg-white/40" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
          About IFTECH
        </span>
      </div>
    </div>
  </div>
</section>



      <section className="relative z-20 mx-auto -mt-10 max-w-[1120px] px-5">
        <div className="overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: "search" as IconName,
                title: isID
                  ? "Memahami Kebutuhan"
                  : "Understanding Needs",
                text: isID
                  ? "Memahami masalah dan tujuan bisnis."
                  : "Understanding the business problem and goals.",
              },
              {
                number: "02",
                icon: "design" as IconName,
                title: isID
                  ? "Merancang Solusi"
                  : "Designing Solutions",
                text: isID
                  ? "Menyusun solusi yang tepat dan terukur."
                  : "Creating the right and measurable solution.",
              },
              {
                number: "03",
                icon: "rocket" as IconName,
                title: isID
                  ? "Membangun & Berkembang"
                  : "Build & Grow",
                text: isID
                  ? "Membangun dan mengembangkan solusi."
                  : "Building and continuously improving the solution.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`group relative p-7 md:p-9 ${
                  index !== 2
                    ? "border-b border-gray-100 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4E1] text-[#F59E0B] transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:text-white">
                    <Icon name={item.icon} size={21} />
                  </div>

                  <NumberBadge number={item.number} />
                </div>

                <h3 className="mt-8 text-[17px] font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-[12px] leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="company" className="py-28 md:py-36">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            {/* LEFT */}

            <div className="lg:col-span-4">
              <SectionLabel>
                {isID ? "Perusahaan Kami" : "Our Company"}
              </SectionLabel>

              <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.04em] md:text-[50px]">
                {isID
                  ? "Lebih dari sekadar software house."
                  : "More than just a software house."}
              </h2>

              <div className="mt-8 hidden h-px w-20 bg-[#D90812] lg:block" />
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">
              <p className="max-w-[760px] text-[20px] font-medium leading-8 text-[#303030] md:text-[24px] md:leading-9">
                {isID
                  ? "Kami membantu perusahaan menerjemahkan kebutuhan bisnis menjadi solusi teknologi yang dapat digunakan, diukur, dan dikembangkan."
                  : "We help businesses translate their needs into technology solutions that can be used, measured, and scaled."}
              </p>

              <p className="mt-7 max-w-[700px] text-[14px] leading-7 text-gray-500">
                {isID
                  ? "Mulai dari website, aplikasi, hingga custom software, kami menggabungkan pemahaman terhadap bisnis dengan proses pengembangan yang terstruktur. Setiap solusi dirancang untuk menjawab kebutuhan nyata, bukan sekadar mengikuti tren teknologi."
                  : "From websites and applications to custom software, we combine business understanding with a structured development process. Every solution is designed to solve real needs rather than simply follow technology trends."}
              </p>

              <div className="mt-12 grid grid-cols-2 border-y border-gray-200 md:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Business Focused",
                  },
                  {
                    number: "02",
                    title: "Digital Solution",
                  },
                  {
                    number: "03",
                    title: "Structured Process",
                  },
                  {
                    number: "04",
                    title: "Long Term",
                  },
                ].map((item, index) => (
                  <div
                    key={item.number}
                    className={`px-5 py-7 ${
                      index !== 3 ? "border-r border-gray-200" : ""
                    } ${
                      index > 1
                        ? "border-t md:border-t-0"
                        : ""
                    }`}
                  >
                    <p className="text-[27px] font-bold tracking-[-0.04em]">
                      {item.number}
                    </p>

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#F7F7F6] py-28 md:py-36">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          {/* STATEMENT */}

          <div className="mx-auto max-w-[850px] text-center">
            <SectionLabel>
              {isID ? "Tentang IFTECH" : "About IFTECH"}
            </SectionLabel>

            <div className="mt-8">
              <p className="text-[18px] font-medium leading-8 tracking-[-0.015em] text-[#171717] md:text-[21px] md:leading-9">
                {isID ? (
                  <>
                    Kami menghadirkan solusi inovatif melalui{" "}
                    <span className="font-semibold text-[#D90812]">
                      Application, Digital Service, Mobile, AI, dan Security
                    </span>{" "}
                    untuk membantu bisnis berkembang di dunia yang terus
                    berubah.
                  </>
                ) : (
                  <>
                    We deliver innovative solutions around{" "}
                    <span className="font-semibold text-[#D90812]">
                      Application, Digital Service, Mobile, AI, and Security
                    </span>{" "}
                    to help businesses thrive in a dynamic world.
                  </>
                )}
              </p>

              <p className="mt-7 text-[18px] font-medium leading-8 tracking-[-0.015em] text-[#171717] md:text-[21px] md:leading-9">
                {isID ? (
                  <>
                    Kami menyediakan layanan teknologi untuk berbagai industri
                    di Indonesia, termasuk{" "}
                    <span className="font-semibold text-[#D90812]">
                      Perbankan & Institusi Keuangan, Telekomunikasi &
                      Service Provider, Perusahaan Besar, dan BUMN.
                    </span>
                  </>
                ) : (
                  <>
                    We deliver IT technology services for customers across
                    industries in Indonesia, including{" "}
                    <span className="font-semibold text-[#D90812]">
                      Banking & Financial Institutions, Telecommunication &
                      Service Providers, Big Enterprises, and State-Owned
                      Companies.
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* CORE VALUE */}

          <div className="mt-20 overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
            <div className="grid min-h-[350px] grid-cols-1 md:grid-cols-[280px_1fr]">
              {/* LEFT DARK PANEL */}

              <div className="relative overflow-hidden bg-[#171717] p-8 text-white md:p-10">
                <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full border-[45px] border-white/[0.035]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                      {isID ? "Nilai Inti" : "Core Value"}
                    </span>

                    <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D90812]">
                      <Icon name="spark" size={22} />
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      IFTECH SOLUSINDO
                    </p>

                    <p className="mt-2 max-w-[190px] text-[11px] leading-5 text-white/50">
                      {isID
                        ? "Prinsip yang menjadi dasar setiap solusi yang kami bangun."
                        : "The principles behind every solution we build."}
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}

              <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-14">
                <div className="pointer-events-none absolute right-8 top-6 text-[90px] font-bold leading-none text-gray-100 md:right-12 md:top-8 md:text-[120px]">
                  01
                </div>

                <div className="relative max-w-[700px]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Core Value
                  </span>

                  <h3 className="mt-3 text-[30px] font-bold tracking-[-0.035em] md:text-[38px]">
                    Service Excellence
                  </h3>

                  <p className="mt-5 max-w-[650px] text-[13px] leading-7 text-gray-500 md:text-[14px]">
                    {isID
                      ? "Kami memberikan kualitas layanan terbaik melalui solusi yang disesuaikan dengan kebutuhan, profesionalisme, dan keandalan, dengan komitmen untuk selalu melampaui ekspektasi pelanggan."
                      : "We deliver exceptional quality through tailored solutions, professionalism, and reliability — consistently exceeding client expectations."}
                  </p>

                  <div className="mt-10 flex items-center gap-2">
                    <span className="h-[3px] w-3 rounded-full bg-gray-200" />
                    <span className="h-[3px] w-7 rounded-full bg-[#D90812]" />
                    <span className="h-[3px] w-3 rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MISSION & VISION */}

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* MISSION */}

            <div className="group rounded-[22px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] md:p-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  {isID ? "Misi" : "Mission"}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF4E1] text-[#F59E0B] transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:text-white">
                  <Icon name="target" size={19} />
                </div>
              </div>

              <h3 className="mt-8 text-[25px] font-bold tracking-[-0.03em]">
                {isID ? "Misi" : "Mission"}
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-gray-500">
                {isID
                  ? "Menjadi partner pilihan dengan memberikan layanan berkualitas tinggi yang selaras dengan kebutuhan bisnis dan perkembangan industri, menggunakan teknologi yang tepat untuk menghasilkan solusi terbaik."
                  : "Become the preferred partner by delivering high-quality services that align with business needs and industry trends, using the right technology to provide the best solutions."}
              </p>
            </div>

            {/* VISION */}

            <div className="group rounded-[22px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] md:p-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  {isID ? "Visi" : "Vision"}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF4E1] text-[#F59E0B] transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:text-white">
                  <Icon name="chart" size={19} />
                </div>
              </div>

              <h3 className="mt-8 text-[25px] font-bold tracking-[-0.03em]">
                {isID ? "Visi" : "Vision"}
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-gray-500">
                {isID
                  ? "Memberikan integrasi solusi yang berfokus pada kemajuan, keberlanjutan, dan inovasi untuk menciptakan keunggulan kompetitif serta menjadi partner teknologi terpercaya bagi pelanggan secara lokal maupun regional."
                  : "Deliver solution integration focused on advancement, sustainability, and innovation to create competitive advantage and become a trusted technology partner for customers locally and regionally."}
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-[700px]">
              <SectionLabel>
                {isID ? "Apa yang Kami Lakukan" : "What We Do"}
              </SectionLabel>

              <h2 className="mt-6 text-[40px] font-bold leading-[1.04] tracking-[-0.04em] md:text-[52px]">
                {isID
                  ? "Mengubah kebutuhan menjadi solusi digital."
                  : "Turning business needs into digital solutions."}
              </h2>
            </div>

            <p className="max-w-[330px] text-[13px] leading-6 text-gray-500">
              {isID
                ? "Dari ide hingga implementasi, kami membantu membangun solusi yang relevan dengan bisnis Anda."
                : "From idea to implementation, we help build solutions that are relevant to your business."}
            </p>
          </div>

          {/* Service cards */}

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.number}
                className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-gray-200 bg-[#FAFAFA] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gray-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:p-10"
              >
                {/* Top */}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4E1] text-[#F59E0B] transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:text-white">
                    <Icon name={item.icon} size={22} />
                  </div>

                  <NumberBadge number={item.number} />
                </div>

                {/* Content */}

                <div className="absolute bottom-9 left-8 right-8 z-10 md:left-10 md:right-10">
                  <h3 className="text-[23px] font-bold tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D90812]">
                    {isID ? "Pelajari lebih lanjut" : "Learn more"}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <Icon name="arrow" size={15} />
                    </span>
                  </div>
                </div>

                {/* Background number */}

                <span className="pointer-events-none absolute -bottom-12 -right-5 text-[130px] font-bold leading-none text-gray-100 transition-transform duration-500 group-hover:translate-x-2">
                  {item.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-[#F7F7F6] py-28 md:py-36">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            {/* LEFT */}

            <div className="lg:col-span-5">
              <SectionLabel>
                {isID ? "Nilai Kami" : "Our Values"}
              </SectionLabel>

              <h2 className="mt-6 text-[40px] font-bold leading-[1.04] tracking-[-0.04em] md:text-[54px]">
                {isID
                  ? "Cara kami berpikir dan bekerja."
                  : "How we think and work."}
              </h2>

              <p className="mt-7 max-w-[440px] text-[14px] leading-7 text-gray-500">
                {isID
                  ? "Teknologi yang baik lahir dari proses yang baik. Prinsip ini menjadi dasar dalam setiap project yang kami kerjakan."
                  : "Great technology comes from a great process. These principles guide every project we work on."}
              </p>

              <div className="mt-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                <span className="h-2 w-2 rounded-full bg-[#D90812]" />
                IFTECH SOLUSINDO
              </div>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-7">
              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {values.map((item) => (
                  <div
                    key={item.number}
                    className="group flex gap-5 py-7 md:gap-8 md:py-8"
                  >
                    {/* Icon */}

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-gray-400 transition-all duration-300 group-hover:bg-[#FFF4E1] group-hover:text-[#F59E0B]">
                      <Icon name={item.icon} size={19} />
                    </div>

                    {/* Content */}

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <h3 className="text-[18px] font-bold md:text-[20px]">
                          {item.title}
                        </h3>

                        <NumberBadge number={item.number} />
                      </div>

                      <p className="mt-2 max-w-[500px] text-[13px] leading-6 text-gray-500">
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


      <section
        id="approach"
        className="relative overflow-hidden bg-[#171717] py-28 text-white md:py-36"
      >
        {/* Background decoration */}

        <div className="pointer-events-none absolute right-[-150px] top-[-180px] h-[450px] w-[450px] rounded-full border-[80px] border-white/[0.035]" />

        <div className="pointer-events-none absolute bottom-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full border-[70px] border-[#D90812]/10" />

        <div className="relative mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            {/* LEFT */}

            <div className="lg:col-span-5">
              <SectionLabel light>
                {isID ? "Pendekatan Kami" : "Our Approach"}
              </SectionLabel>

              <h2 className="mt-6 text-[40px] font-bold leading-[1.04] tracking-[-0.04em] md:text-[54px]">
                {isID
                  ? "Terstruktur. Kolaboratif. Terukur."
                  : "Structured. Collaborative. Measurable."}
              </h2>

              <p className="mt-7 max-w-[420px] text-[14px] leading-7 text-white/50">
                {isID
                  ? "Setiap project dimulai dari pemahaman masalah yang jelas, kemudian diterjemahkan menjadi solusi yang dapat dikembangkan."
                  : "Every project starts with a clear understanding of the problem and turns it into a solution designed to evolve."}
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-7">
              <div className="relative">
                {/* Connecting line */}

                <div className="absolute bottom-8 left-[20px] top-8 hidden w-px bg-white/10 md:block" />

                <div>
                  {approach.map((item) => (
                    <div
                      key={item.number}
                      className="group relative flex gap-6 border-t border-white/10 py-7 md:gap-8 md:py-8"
                    >
                      {/* Icon */}

                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#171717] text-[#F59E0B] transition-all duration-300 group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white">
                        <Icon name={item.icon} size={18} />
                      </div>

                      {/* Content */}

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-5">
                          <h3 className="text-[19px] font-bold">
                            {item.title}
                          </h3>

                          <span className="text-[10px] font-bold tracking-[0.15em] text-[#F59E0B]">
                            {item.number}
                          </span>
                        </div>

                        <p className="mt-2 max-w-[500px] text-[13px] leading-6 text-white/45">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <CTA />

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