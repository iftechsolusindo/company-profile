
"use client";

import { useLanguage } from "../global/LanguageProvider";

export default function CTA() {
  const { language } = useLanguage();

  return (
    <section className="relative z-10 mx-auto -mb-[70px] max-w-[1000px] px-6">
      <div className="relative overflow-hidden rounded-[18px] bg-[#F59E0B] px-8 py-10 shadow-xl md:px-12 md:py-11">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0">
          {/* Soft Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

          {/* Large Circle */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[45px] border-white/10" />

          {/* Small Circle */}
          <div className="absolute -bottom-20 left-[38%] h-40 w-40 rounded-full border-[25px] border-white/5" />

          {/* Dots Pattern */}
          <div className="absolute right-28 top-8 grid grid-cols-4 gap-2 opacity-20">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
            ))}
          </div>

          {/* Diagonal Highlight */}
          <div className="absolute -left-20 bottom-[-80px] h-40 w-[500px] rotate-[-8deg] rounded-full bg-white/5 blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Text */}
          <div className="text-white">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-white/60" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                {language === "ID"
                  ? "Mari Berkolaborasi"
                  : "Let's Work Together"}
              </span>
            </div>

            <h2 className="text-[32px] font-extrabold leading-tight tracking-tight md:text-[36px]">
              <span className="mr-1 text-white/60">‘</span>

              {language === "ID" ? "Mari Bicara!" : "Let's Talk!"}

              <span className="ml-1 text-white/60">’</span>
            </h2>

            <p className="mt-4 max-w-[450px] text-[12px] font-medium leading-5 text-white/90">
              {language === "ID" ? (
                <>
                  Punya project atau ingin bekerja sama?
                  <br />
                  Hubungi kami dan temukan solusi teknologi yang tepat
                  untuk kebutuhan Anda.
                </>
              ) : (
                <>
                  Have a project or want to work together?
                  <br />
                  Contact us and find the right technology solution
                  for your needs.
                </>
              )}
            </p>
          </div>

          {/* Button */}
          <a
            href="/contactus"
            className="group flex shrink-0 items-center gap-4 rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-wide text-[#B45309] shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)]"
          >
            {language === "ID" ? "Hubungi Kami" : "Get In Touch"}

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] font-bold text-white transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

