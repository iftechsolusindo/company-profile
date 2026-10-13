
"use client";

import Image from "next/image";
import { useLanguage } from "../global/LanguageProvider";

export default function HeroSection() {
  const { language } = useLanguage();
  const isID = language === "ID";

  return (
    <section id="home" className="w-full">
      <div className="container-main">
        <div className="relative flex min-h-[500px] overflow-hidden rounded-2xl bg-neutral-950 sm:min-h-[540px] sm:rounded-3xl lg:min-h-[600px] lg:rounded-[32px]">
          {/* Hero Image */}
          <Image
            src="/main/hero.jpg"
            alt="IFTECH SOLUSINDO"
            fill
            priority
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) calc(100vw - 3rem), 1180px"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Fade Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/70" />

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 py-12 text-center text-white sm:px-8 sm:py-14 md:px-10 lg:py-16">
            {/* Company */}
            <div className="mb-6 max-w-full rounded-full border border-white/30 bg-black/20 px-4 py-2 font-[var(--font-inter)] text-[9px] font-medium leading-relaxed tracking-wide text-white/90 backdrop-blur-sm sm:mb-8 sm:px-6 sm:py-2.5 sm:text-xs md:text-sm">
              CV. Information Technology Solusi Indonesia
            </div>

            {/* Heading */}
            <h1 className="max-w-[850px] font-[var(--font-plus-jakarta)] text-[27px] font-bold leading-[1.2] tracking-[-0.035em] sm:text-[36px] sm:leading-[1.18] md:text-[46px] lg:text-[52px]">
              {isID
                ? "Solusi Teknologi untuk Menjawab Tantangan dan Kebutuhan Bisnis Anda di Era Digital"
                : "Technology Solutions for Your Business Challenges and Needs in the Digital Era"}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[680px] font-[var(--font-inter)] text-[12px] leading-[1.8] text-white/85 sm:mt-6 sm:text-sm sm:leading-7 md:text-base md:leading-8">
              {isID
                ? "IFTECH SOLUSINDO hadir sebagai mitra teknologi yang membantu bisnis menemukan solusi yang tepat untuk berbagai kebutuhan, mulai dari pengembangan perangkat lunak dan sistem, pengadaan barang dan perangkat teknologi, hingga solusi IT yang terintegrasi dan disesuaikan dengan kebutuhan Anda."
                : "IFTECH SOLUSINDO is your technology partner, helping businesses find the right solutions for various needs, from software and system development to technology procurement and integrated IT solutions tailored to your requirements."}
            </p>

            {/* Buttons */}
            <div className="mt-7 flex w-full max-w-[360px] flex-col justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="flex min-h-[46px] w-full items-center justify-center rounded-full bg-white px-6 py-3 font-[var(--font-inter)] text-xs font-semibold text-gray-900 transition-colors duration-300 hover:bg-gray-100 sm:min-h-[48px] sm:w-auto sm:min-w-[190px] sm:px-7 sm:text-sm md:min-h-[50px] md:text-[15px]"
              >
                {isID ? "Konsultasikan Kebutuhan" : "Discuss Your Needs"}
              </a>

              <a
                href="#solutions"
                className="flex min-h-[46px] w-full items-center justify-center rounded-full border border-white/80 bg-white/[0.05] px-6 py-3 font-[var(--font-inter)] text-xs font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-gray-900 sm:min-h-[48px] sm:w-auto sm:min-w-[165px] sm:px-7 sm:text-sm md:min-h-[50px] md:text-[15px]"
              >
                {isID ? "Lihat Solusi" : "Explore Solutions"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
