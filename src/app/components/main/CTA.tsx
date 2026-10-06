"use client";

import { useLanguage } from "../global/LanguageProvider";

export default function CTA() {
  const { language } = useLanguage();

  return (
    <section className="relative z-10 mx-auto -mb-[70px] max-w-[1000px] px-6">
      <div className="relative overflow-hidden rounded-[18px] bg-[#F59E0B] px-8 py-10 shadow-xl md:px-12 md:py-11">
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Text */}
          <div className="text-white">
            <h2 className="text-[32px] font-bold leading-tight md:text-[36px]">
              <span className="mr-1 text-white/70">‘</span>
              {language === "ID" ? "Mari Bicara!" : "Let's Talk!"}
              <span className="ml-1 text-white/70">’</span>
            </h2>

            <p className="mt-4 max-w-[450px] text-[12px] font-medium leading-5 text-white/90">
              {language === "ID" ? (
                <>
                  Punya project atau ingin bekerja sama?
                  <br />
                  Hubungi kami dan kembangkan software impian Anda sekarang!
                </>
              ) : (
                <>
                  Have a project or want to work together?
                  <br />
                  Contact us and build your dream software today!
                </>
              )}
            </p>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="flex shrink-0 items-center gap-4 rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-wide text-[#B45309] shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
          >
            {language === "ID" ? "Hubungi Kami" : "Get In Touch"}

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] text-white">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}