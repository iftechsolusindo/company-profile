"use client";

import Image from "next/image";
import { useLanguage } from "../global/LanguageProvider";

interface ServiceItem {
  title: string;
  description: string;
}

const services: Record<"ID" | "EN", ServiceItem[]> = {
  ID: [
    {
      title: "Website",
      description:
        "Pengembangan website andal untuk solusi digital Anda",
    },
   
    {
      title: "Aplikasi Mobile",
      description:
        "Kembangkan aplikasi mobile yang efisien dan scalable",
    },
    {
      title: "Custom Software",
      description:
        "Custom software yang scalable dan reliable untuk bisnis",
    },
    {
      title: "UI/UX Design",
      description:
        "Solusi desain UI/UX yang mendukung performa bisnis",
    },
  ],

  EN: [
    {
      title: "Website",
      description:
        "Reliable website development for your digital solutions",
    },
    {
      title: "MVP Development",
      description:
        "Reliable MVP solutions to efficiently validate your market",
    },
    {
      title: "Mobile App",
      description:
        "Build efficient and scalable mobile applications",
    },
    {
      title: "Documentation",
      description:
        "Precise documentation for scalable and solid software",
    },
    {
      title: "Custom Software",
      description:
        "Scalable and reliable custom software for your business",
    },
    {
      title: "UI/UX Design",
      description:
        "UI/UX design solutions that support business performance",
    },
  ],
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const currentServices = services[language];

  return (
    <section
      id="solutions"
      className="w-full bg-white py-16 font-sans"
    >
      <div className="container-main">
        <div className="flex flex-col items-stretch gap-12 lg:flex-row">
          {/* LEFT - IMAGE */}
          <div className="relative min-h-[400px] w-full overflow-hidden rounded-3xl lg:min-h-0 lg:w-5/12 lg:self-stretch">
            <Image
              src="/main/programming.jpg"
              alt={
                language === "ID"
                  ? "Tim profesional sedang bekerja"
                  : "Professional team working"
              }
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="flex w-full flex-col lg:w-7/12">
            {/* Header */}
            <div className="mb-8">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
                {language === "ID" ? "LAYANAN" : "SERVICES"}
              </h4>

              <h2 className="mb-4 text-3xl font-extrabold text-[#113a5d] md:text-4xl">
                {language === "ID" ? "Layanan Kami" : "Our Services"}
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                {language === "ID" ? (
                  <>
                    IFTECH SOLUSINDO menyediakan solusi digital yang{" "}
                    <strong className="font-semibold text-gray-800">
                      scalable
                    </strong>{" "}
                    dan berfokus pada{" "}
                    <strong className="font-semibold text-gray-800">
                      reliability
                    </strong>
                    , dirancang untuk mendukung pertumbuhan bisnis Anda
                    secara berkelanjutan.
                  </>
                ) : (
                  <>
                    IFTECH SOLUSINDO provides{" "}
                    <strong className="font-semibold text-gray-800">
                      scalable
                    </strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-gray-800">
                      reliable
                    </strong>{" "}
                    digital solutions designed to support your business
                    growth sustainably.
                  </>
                )}
              </p>
            </div>

            {/* SERVICES GRID */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {currentServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-100/80 bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-bold text-[#113a5d]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              className="flex w-max items-center justify-center rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#D97706] hover:shadow-lg"
            >
              {language === "ID"
                ? "LIHAT LAYANAN KAMI"
                : "DISCOVER OUR SERVICES"}

              <svg
                className="ml-2 h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}