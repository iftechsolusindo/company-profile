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
      className="w-full bg-[#f7fafc] py-16 font-sans"
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          {/* Left */}
          <div className="max-w-md">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              {language === "ID"
                ? "KEUNGGULAN KAMI"
                : "OUR STRENGTH"}
            </h4>

            <h2 className="text-3xl font-extrabold leading-tight text-[#113a5d] md:text-4xl">
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
            <p className="text-sm leading-relaxed text-[#476274] md:text-base">
              {language === "ID"
                ? "5 alasan mengapa IFTECH SOLUSINDO adalah software house yang tepat untuk memenuhi kebutuhan digitalisasi bisnis Anda."
                : "5 reasons why IFTECH SOLUSINDO is the right software house for your business digitalization needs."}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {currentStrengths.map((item) => (
            <div
              key={item.number}
              className={`group relative h-72 overflow-hidden rounded-2xl bg-white shadow-sm md:h-80 ${item.colSpanClass}`}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 h-[65%] w-full bg-gradient-to-t from-white via-white/80 to-transparent" />

              <div className="absolute bottom-0 left-0 z-10 w-full p-6">
                <span className="mb-1 block text-xl font-extrabold text-[#F59E0B]">
                  {item.number}
                </span>

                <h3 className="pr-4 text-lg font-bold text-[#113a5d]">
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