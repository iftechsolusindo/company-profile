"use client";

import { useState, type ReactNode } from "react";

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

  const [activePortfolio, setActivePortfolio] = useState(0);



  const solutions = [
    {
      number: "01",
      icon: "code" as IconName,
      title: "Web Development",
      shortTitle: isID ? "Pengembangan Web" : "Web Development",
      description: isID
        ? "Website dan web application yang cepat, responsif, dan dirancang untuk kebutuhan bisnis."
        : "Fast, responsive websites and web applications built around your business needs.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "02",
      icon: "mobile" as IconName,
      title: "Mobile Application",
      shortTitle: isID ? "Aplikasi Mobile" : "Mobile Application",
      description: isID
        ? "Aplikasi mobile yang intuitif, modern, dan memberikan pengalaman pengguna yang nyaman."
        : "Intuitive and modern mobile applications designed for a seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "03",
      icon: "layers" as IconName,
      title: "UI/UX Design",
      shortTitle: "UI/UX Design",
      description: isID
        ? "Merancang interface dan pengalaman pengguna yang sederhana, jelas, dan berorientasi pada kebutuhan pengguna."
        : "Designing clear, intuitive interfaces and experiences focused on real user needs.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "04",
      icon: "cloud" as IconName,
      title: "Custom Software",
      shortTitle: isID ? "Software Khusus" : "Custom Software",
      description: isID
        ? "Software khusus yang dibangun mengikuti proses, workflow, dan kebutuhan operasional bisnis."
        : "Custom software built around your business processes, workflows, and operational requirements.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85",
    },
  ];


  const portfolios = [
    {
      number: "01",
      category: "Digital Platform",
      title: isID
        ? "Platform Digital untuk Operasional Bisnis"
        : "Digital Platform for Business Operations",
      description: isID
        ? "Solusi digital yang membantu perusahaan mengelola proses operasional secara lebih terstruktur, terintegrasi, dan mudah dipantau."
        : "A digital solution that helps businesses manage operational processes in a more structured, integrated, and measurable way.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85",
      tags: ["Web Application", "Dashboard", "Business System"],
    },
    {
      number: "02",
      category: "Enterprise System",
      title: isID
        ? "Sistem Terintegrasi untuk Perusahaan"
        : "Integrated System for Enterprise",
      description: isID
        ? "Membangun sistem yang menghubungkan berbagai kebutuhan dan proses bisnis dalam satu platform yang lebih efisien."
        : "An integrated system connecting multiple business requirements and processes through a more efficient platform.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
      tags: ["Enterprise", "Integration", "Custom Software"],
    },
    {
      number: "03",
      category: "Mobile Application",
      title: isID
        ? "Aplikasi Mobile yang Berfokus pada Pengguna"
        : "User-Focused Mobile Application",
      description: isID
        ? "Pengembangan aplikasi mobile dengan pengalaman yang sederhana, cepat, dan relevan dengan kebutuhan pengguna."
        : "A mobile application designed around a simple, fast, and relevant user experience.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85",
      tags: ["Mobile", "UX", "Digital Product"],
    },
  ];

  const currentPortfolio = portfolios[activePortfolio];


  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <NavbarMain />


      <section className="relative overflow-hidden bg-[#171717] text-white">
        {/* Background decoration */}
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border-[90px] border-[#F59E0B]/10" />

        <div className="pointer-events-none absolute bottom-[-300px] left-[-180px] h-[560px] w-[560px] rounded-full border-[100px] border-white/[0.025]" />

        <div className="pointer-events-none absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-[#F59E0B]" />

        <div className="pointer-events-none absolute right-[22%] top-[32%] h-1 w-1 rounded-full bg-white/30" />

        <div className="relative mx-auto max-w-[1180px] px-6 py-24 md:px-10 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end">
            {/* LEFT */}
            <div className="lg:col-span-8">
              <div className="mb-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                <span>IFTECH SOLUSINDO</span>
                <span className="h-px w-7 bg-white/20" />
                <span className="text-[#F59E0B]">
                  {isID ? "Solusi" : "Solutions"}
                </span>
              </div>

              <h1 className="max-w-[900px] text-[48px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[62px] md:text-[76px] lg:text-[84px]">
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

              <p className="mt-8 max-w-[650px] text-[14px] leading-7 text-white/45 md:text-[15px]">
                {isID
                  ? "Kami membantu perusahaan merancang, membangun, dan mengembangkan solusi teknologi yang relevan, scalable, dan siap digunakan."
                  : "We help businesses design, build, and evolve technology solutions that are relevant, scalable, and ready for real-world use."}
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-4">
              <div className="border-l border-white/10 pl-6 lg:pl-8">
                <div className="text-[42px] font-semibold tracking-[-0.05em] text-white">
                  04<span className="text-[#F59E0B]">+</span>
                </div>

                <p className="mt-2 max-w-[180px] text-[11px] uppercase leading-5 tracking-[0.12em] text-white/35">
                  {isID
                    ? "Area layanan teknologi"
                    : "Technology service areas"}
                </p>
              </div>
            </div>
          </div>

          {/* HERO TAGS */}
          <div className="mt-16 flex flex-wrap gap-3">
            {[
              "Business Focused",
              "Technology Driven",
              "Built to Grow",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/55"
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


      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionLabel>
                {isID ? "Apa yang Kami Bangun" : "What We Build"}
              </SectionLabel>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-[850px] text-[28px] font-medium leading-[1.25] tracking-[-0.035em] md:text-[40px]">
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

  

      <section className="relative overflow-hidden bg-[#F7F7F6] text-[#171717]">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          {/* HEADER */}

          <div className="grid grid-cols-1 gap-10 py-20 md:py-24 lg:grid-cols-12 lg:gap-20 lg:py-28">
            <div className="lg:col-span-7">
              <SectionLabel>
                {isID ? "Layanan Kami" : "Our Services"}
              </SectionLabel>

              <h2 className="mt-6 max-w-[760px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] md:text-[58px] lg:text-[64px]">
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
              <div className="max-w-[430px] border-l border-black/10 pl-6">
                <p className="text-[13px] leading-7 text-black/45 md:text-[14px]">
                  {isID
                    ? "Mulai dari website hingga software khusus, setiap solusi dibuat berdasarkan kebutuhan nyata."
                    : "From websites to custom software, every solution is built around real business needs."}
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES */}

          <div className="border-t border-black/10">
            {solutions.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-black/10
                "
              >

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="
                      h-full
                      w-full
                      scale-[1.08]
                      object-cover
                      opacity-0
                      saturate-50
                      blur-[1px]
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-100
                      group-hover:opacity-[0.08]
                    "
                  />

                  {/* White fade layer */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-white/70
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Soft orange tint */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#F59E0B]/[0.035]
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </div>


                <div
                  className="
                    relative
                    z-10
                    flex
                    min-h-[150px]
                    items-center
                    py-8
                    transition-all
                    duration-500
                    group-hover:min-h-[205px]
                    md:py-10
                  "
                >
                  {/* NUMBER */}

                  <div className="w-[65px] shrink-0 md:w-[110px]">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.18em]
                        text-[#F59E0B]
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* MAIN */}

                  <div className="flex flex-1 flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
                    <div>
                      {/* SMALL LABEL */}

                      <div className="mb-2 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />

                        <span
                          className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-black/25
                            transition-colors
                            duration-300
                            group-hover:text-black/45
                          "
                        >
                          {isID ? "Layanan" : "Service"}
                        </span>
                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          text-[30px]
                          font-semibold
                          tracking-[-0.04em]
                          text-[#171717]
                          transition-all
                          duration-500
                          group-hover:translate-x-2
                          md:text-[44px]
                        "
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-3
                          max-w-[580px]
                          text-[12px]
                          leading-6
                          text-black/35
                          transition-colors
                          duration-500
                          group-hover:text-black/60
                          md:text-[13px]
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* ICON */}

                    <div className="flex shrink-0 items-center">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-black/10
                          bg-white/30
                          text-black/25
                          transition-all
                          duration-500
                          group-hover:border-[#F59E0B]
                          group-hover:bg-[#F59E0B]
                          group-hover:text-white
                          md:h-14
                          md:w-14
                        "
                      >
                        <Icon
                          name="arrow"
                          size={19}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* LARGE BACKGROUND NUMBER */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-25px]
                    right-4
                    text-[120px]
                    font-bold
                    leading-none
                    tracking-[-0.08em]
                    text-black/[0.025]
                    transition-all
                    duration-500
                    group-hover:text-black/[0.05]
                  "
                >
                  {item.number}
                </div>

                {/* ORANGE LINE */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-20
                    h-[2px]
                    w-0
                    bg-[#F59E0B]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </div>
            ))}
          </div>

          {/* FOOTER STATEMENT */}

          <div className="flex flex-col justify-between gap-6 py-10 md:flex-row md:items-center md:py-12">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                IFTECH SOLUSINDO
              </span>
            </div>

            <p className="max-w-[420px] text-[11px] leading-6 text-black/30 md:text-right">
              {isID
                ? "Dari konsep hingga implementasi, kami membangun solusi yang dibuat untuk kebutuhan nyata."
                : "From concept to implementation, we build solutions designed for real-world needs."}
            </p>
          </div>
        </div>
      </section>


      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}

            <div className="lg:col-span-5">
              <SectionLabel>
                Technology Stack
              </SectionLabel>

              <h2 className="mt-6 max-w-[520px] text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[56px]">
                {isID
                  ? "Teknologi yang mendukung setiap solusi."
                  : "Technology behind every solution."}
              </h2>

              <p className="mt-7 max-w-[450px] text-[14px] leading-7 text-gray-500">
                {isID
                  ? "Kami memilih teknologi berdasarkan kebutuhan, skalabilitas, performa, dan keberlanjutan produk."
                  : "We select technologies based on requirements, scalability, performance, and long-term sustainability."}
              </p>

              <div className="mt-10 border-l-2 border-[#F59E0B] pl-5 md:mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-gray-900">
                  Technology agnostic
                </p>

                <p className="mt-2 max-w-[350px] text-[12px] leading-6 text-gray-400">
                  {isID
                    ? "Teknologi dipilih berdasarkan kebutuhan proyek, bukan sekadar mengikuti tren."
                    : "Technology is selected based on project needs, not simply because it is trending."}
                </p>
              </div>
            </div>

            {/* RIGHT */}


<div className="lg:col-span-7">
  <div className="grid grid-cols-2 border-l border-t border-gray-200 sm:grid-cols-3">
    {technologies.map((technology, index) => (
      <div
        key={technology.name}
        className="
          group relative flex min-h-[170px] flex-col justify-between
          border-b border-r border-gray-200
          bg-white p-6
          transition-all duration-500 ease-out
          hover:bg-gray-50/80
          hover:shadow-[inset_0_0_0_1px_rgba(245,158,11,0.08)]
          md:p-7
        "
      >
        {/* Soft orange hover glow */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-br from-[#F59E0B]/[0.035] via-transparent to-transparent
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* Number */}
        <span
          className="
            relative z-10
            text-[9px] font-bold tracking-[0.16em]
            text-gray-300
            transition-colors duration-300
            group-hover:text-[#F59E0B]/60
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Technology */}
        <div className="relative z-10 flex items-center gap-4">
          {/* Logo container */}
          <div
            className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-xl
              border border-gray-100
              bg-gray-50
              p-2.5
              transition-all duration-500 ease-out
              group-hover:-translate-y-0.5
              group-hover:border-[#F59E0B]/20
              group-hover:bg-white
              group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
            "
          >
            <img
              src={technology.logo}
              alt={`${technology.name} logo`}
              className="
                h-full w-full object-contain
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
            />
          </div>

          {/* Text */}
          <div>
            <p
              className="
                text-[14px] font-semibold tracking-[-0.02em]
                text-gray-900
                transition-colors duration-300
                group-hover:text-[#171717]
              "
            >
              {technology.name}
            </p>

            <p
              className="
                mt-1
                text-[9px] uppercase tracking-[0.12em]
                text-gray-400
                transition-colors duration-300
                group-hover:text-[#F59E0B]/70
              "
            >
              Technology
            </p>
          </div>
        </div>

        {/* Bottom orange indicator */}
        <div
          className="
            absolute bottom-0 left-0
            h-[2px] w-0
            bg-[#F59E0B]
            transition-all duration-500 ease-out
            group-hover:w-full
          "
        />
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>



      <section className="bg-[#F7F7F6] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          {/* HEADER */}

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-[700px]">
              <SectionLabel>
                Selected Work
              </SectionLabel>

              <h2 className="mt-6 text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[58px]">
                {isID
                  ? "Solusi yang kami bangun."
                  : "Solutions we have built."}
              </h2>
            </div>

            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">
              {String(activePortfolio + 1).padStart(2, "0")} /{" "}
              {String(portfolios.length).padStart(2, "0")}
            </div>
          </div>

          {/* PORTFOLIO */}

          <div className="mt-14 overflow-hidden rounded-[28px] bg-[#171717] text-white shadow-[0_30px_100px_rgba(0,0,0,0.12)] md:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* IMAGE */}

              <div className="relative min-h-[400px] overflow-hidden lg:col-span-7 lg:min-h-[620px]">
                <img
                  key={currentPortfolio.image}
                  src={currentPortfolio.image}
                  alt={currentPortfolio.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                  IFTECH SOLUSINDO
                </div>

                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                    {currentPortfolio.category}
                  </span>

                  <div className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-white/50">
                    Case Study / {currentPortfolio.number}
                  </div>
                </div>
              </div>

              {/* CONTENT */}

              <div className="flex min-h-[500px] flex-col justify-between p-8 md:p-12 lg:col-span-5 lg:p-14">
                <div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                      {currentPortfolio.category}
                    </span>

                    <span className="text-[10px] font-bold tracking-[0.16em] text-white/20">
                      {currentPortfolio.number}
                    </span>
                  </div>

                  <h3 className="mt-12 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[40px]">
                    {currentPortfolio.title}
                  </h3>

                  <p className="mt-7 text-[14px] leading-7 text-white/40">
                    {currentPortfolio.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {currentPortfolio.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.1em] text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CONTROLS */}

                <div className="mt-12 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous portfolio"
                    onClick={() =>
                      setActivePortfolio(
                        (activePortfolio - 1 + portfolios.length) %
                          portfolios.length
                      )
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
                  >
                    <span className="rotate-180">
                      <Icon name="arrow" size={17} />
                    </span>
                  </button>

                  <button
                    type="button"
                    aria-label="Next portfolio"
                    onClick={() =>
                      setActivePortfolio(
                        (activePortfolio + 1) % portfolios.length
                      )
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
                  >
                    <Icon name="arrow" size={17} />
                  </button>

                  <div className="ml-3 flex items-center gap-1.5">
                    {portfolios.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Go to portfolio ${index + 1}`}
                        onClick={() => setActivePortfolio(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === activePortfolio
                            ? "w-7 bg-[#F59E0B]"
                            : "w-1.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <SectionLabel>
                {isID ? "Prinsip Solusi" : "Solution Principles"}
              </SectionLabel>

              <h2 className="mt-6 text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[56px]">
                {isID
                  ? "Bukan sekadar teknologi."
                  : "More than just technology."}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 border-t border-gray-200 sm:grid-cols-3">
                {[
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
                ].map((item) => (
                  <div
                    key={item.number}
                    className="border-b border-gray-200 py-8 sm:border-r sm:px-7 sm:last:border-r-0"
                  >
                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#F59E0B]">
                      {item.number}
                    </span>

                    <h3 className="mt-12 text-[24px] font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                ))}
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



export default function SolutionsPage() {
  return (
    <LanguageProvider>
      <SolutionsContent />
    </LanguageProvider>
  );
}