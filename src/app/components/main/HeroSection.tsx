"use client";

import Image from "next/image";
import { useLanguage } from "../global/LanguageProvider";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="w-full">
      <div className="container-main">
        <div className="relative flex min-h-[560px] overflow-hidden rounded-[32px]">
          {/* Hero Image */}
          <Image
            src="/main/hero.jpg"
            alt="IFTECH SOLUSINDO"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center px-10 text-center text-white">
            {/* Company */}
            <div className="mb-10 rounded-full border border-white/30 px-10 py-3 text-[15px]">
              CV. Information Technology Solusi Indonesia
            </div>

            {/* Heading */}
            <h1 className="max-w-[850px] text-[44px] font-bold leading-[1.08] tracking-[-1.5px] md:text-[52px]">
              {language === "ID"
                ? "Saat Visi Bertemu Kode: Membangun Perangkat Lunak Terbaik dengan Pengembang Ahli"
                : "Where Vision Meets Code: Building Exceptional Software with Expert Developers"}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[720px] text-[16px] leading-7 text-white/85">
              {language === "ID"
                ? "IFTECH SOLUSINDO adalah perusahaan layanan pengembangan perangkat lunak di mana tim pengembang ahli kami dengan penuh semangat mengubah ide-ide terberani Anda menjadi produk, aplikasi, dan situs web yang inovatif dan canggih."
                : "IFTECH SOLUSINDO is a software development company where our expert developers transform your boldest ideas into innovative and sophisticated products, applications, and websites."}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="flex h-[50px] min-w-[210px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-medium text-gray-900 transition hover:bg-gray-100"
              >
                {language === "ID"
                  ? "Mulai Konsultasi"
                  : "Start Consultation"}
              </a>

              <a
                href="#solutions"
                className="flex h-[50px] min-w-[175px] items-center justify-center rounded-full border border-white px-8 text-[15px] font-medium text-white transition hover:bg-white hover:text-gray-900"
              >
                {language === "ID"
                  ? "Pelajari lebih lanjut"
                  : "Learn More"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}