
"use client";

import Image from "next/image";
import { useLanguage } from "../global/LanguageProvider";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="w-full">
      <div className="container-main">
        <div className="relative flex min-h-[560px] overflow-hidden rounded-[32px] bg-neutral-950 sm:min-h-[600px]">
          {/* Hero Image */}
          <Image
            src="/main/hero.jpg"
            alt="IFTECH SOLUSINDO"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1180px"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Fade Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/65" />

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center px-5 py-16 text-center text-white sm:px-10">
            {/* Company */}
            <div className="mb-8 rounded-full border border-white/30 bg-black/10 px-6 py-3 font-[var(--font-inter)] text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm sm:mb-10 sm:px-10 sm:text-[15px]">
              CV. Information Technology Solusi Indonesia
            </div>

            {/* Heading */}
            <h1 className="max-w-[850px] font-[var(--font-plus-jakarta)] text-[32px] font-bold leading-[1.15] tracking-[-0.04em] sm:text-[40px] md:text-[52px]">
              {language === "ID"
                ? "Solusi Teknologi untuk Menjawab Tantangan dan Kebutuhan Bisnis Anda di Era Digital"
                : "Technology Solutions for Your Business Challenges and Needs in the Digital Era"}
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[720px] font-[var(--font-inter)] text-sm leading-7 text-white/85 sm:mt-8 sm:text-base sm:leading-8">
              {language === "ID"
                ? "IFTECH SOLUSINDO hadir sebagai mitra teknologi yang membantu bisnis menemukan solusi yang tepat untuk berbagai kebutuhan, mulai dari pengembangan perangkat lunak dan sistem, pengadaan barang dan perangkat teknologi, hingga solusi IT yang terintegrasi dan disesuaikan dengan kebutuhan Anda."
                : "IFTECH SOLUSINDO is your technology partner, helping businesses find the right solutions for various needs, from software and system development to technology procurement and integrated IT solutions tailored to your requirements."}
            </p>

            {/* Buttons */}
            <div className="mt-9 flex w-full flex-col justify-center gap-4 sm:mt-10 sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="flex h-[50px] w-full min-w-[210px] items-center justify-center rounded-full bg-white px-8 font-[var(--font-inter)] text-sm font-semibold text-gray-900 transition duration-300 hover:bg-gray-100 sm:w-auto sm:text-[15px]"
              >
                {language === "ID"
                  ? "Konsultasikan Kebutuhan"
                  : "Discuss Your Needs"}
              </a>

              <a
                href="#solutions"
                className="flex h-[50px] w-full min-w-[175px] items-center justify-center rounded-full border border-white/80 bg-white/[0.03] px-8 font-[var(--font-inter)] text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-gray-900 sm:w-auto sm:text-[15px]"
              >
                {language === "ID"
                  ? "Lihat Solusi"
                  : "Explore Solutions"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
