
"use client";

import { useLanguage } from "../global/LanguageProvider";

interface StrengthCardProps {
  number: string;
  title: string;
  imageSrc: string;
  colSpanClass: string;
}

const strengths: Record<"ID" | "EN", StrengthCardProps[]> = {
  ID: [
    {
      number: "#1",
      title: "Standar Internasional",
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      colSpanClass: "md:col-span-2",
    },
    {
      number: "#2",
      title: "Tim Profesional",
      imageSrc:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
      colSpanClass: "md:col-span-1",
    },
    {
      number: "#3",
      title: "Layanan yang Beragam",
      imageSrc:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=400",
      colSpanClass: "md:col-span-1",
    },
    {
      number: "#4",
      title: "Model Kerja Sama Variatif",
      imageSrc:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
      colSpanClass: "md:col-span-2",
    },
    {
      number: "#5",
      title: "Dipercaya Banyak Perusahaan",
      imageSrc:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      colSpanClass: "md:col-span-2",
    },
  ],

  EN: [
    {
      number: "#1",
      title: "International Standards",
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      colSpanClass: "md:col-span-2",
    },
    {
      number: "#2",
      title: "Professional Team",
      imageSrc:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
      colSpanClass: "md:col-span-1",
    },
    {
      number: "#3",
      title: "Diverse Services",
      imageSrc:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=400",
      colSpanClass: "md:col-span-1",
    },
    {
      number: "#4",
      title: "Flexible Cooperation Models",
      imageSrc:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
      colSpanClass: "md:col-span-2",
    },
    {
      number: "#5",
      title: "Trusted by Many Companies",
      imageSrc:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      colSpanClass: "md:col-span-2",
    },
  ],
};

export default function OurStrengthSection() {
  const { language } = useLanguage();
  const currentStrengths = strengths[language];

  return (
    <section
      id="strength"
      className="w-full bg-[#f7fafc] py-10 font-[var(--font-inter)] sm:py-16"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-3 sm:mb-10 sm:gap-6 md:flex-row md:items-start">
          {/* Left */}
          <div className="max-w-md">
            <h4 className="mb-2 font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.16em] text-[#F59E0B] sm:text-xs">
              {language === "ID"
                ? "KEUNGGULAN KAMI"
                : "OUR STRENGTH"}
            </h4>

            <h2 className="font-[var(--font-plus-jakarta)] text-2xl font-bold leading-[1.2] tracking-[-0.04em] text-[#113a5d] sm:text-3xl md:text-4xl">
              {language === "ID" ? (
                <>
                  Mengapa Memilih
                  <br />
                  IFTECH SOLUSINDO?
                </>
              ) : (
                <>
                  Why Choose
                  <br />
                  IFTECH SOLUSINDO?
                </>
              )}
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-md md:pt-8">
            <p className="font-[var(--font-inter)] text-[13px] font-normal leading-6 text-[#476274] sm:text-sm sm:leading-7 md:text-base md:leading-8">
              {language === "ID"
                ? "5 alasan mengapa IFTECH SOLUSINDO adalah solusi yang tepat untuk memenuhi berbagai kebutuhan teknologi bisnis Anda."
                : "5 reasons why IFTECH SOLUSINDO is the right solution for your business technology needs."}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-4 md:gap-6">
          {currentStrengths.map((item) => (
            <div
              key={item.number}
              className={`group relative h-56 overflow-hidden rounded-xl bg-[#113a5d] shadow-sm sm:h-72 sm:rounded-2xl md:h-80 ${item.colSpanClass}`}
            >
              {/* Image */}
              <img
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35 transition-all duration-300 group-hover:bg-black/50" />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 z-10 w-full p-4 sm:p-6">
                <span className="mb-1.5 block font-[var(--font-inter)] text-lg font-bold text-[#F59E0B] sm:mb-2 sm:text-xl">
                  {item.number}
                </span>

                <h3 className="pr-2 font-[var(--font-plus-jakarta)] text-base font-semibold leading-snug tracking-[-0.02em] text-white sm:pr-4 sm:text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
