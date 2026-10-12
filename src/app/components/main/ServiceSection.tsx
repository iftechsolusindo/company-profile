
"use client";

import Image from "next/image";
import { useLanguage } from "../global/LanguageProvider";

interface ServiceItem {
  title: string;
  description: string;
  wide?: boolean;
}

const services: Record<"ID" | "EN", ServiceItem[]> = {
  ID: [
    {
      title: "Website",
      description:
        "Pengembangan website andal untuk mendukung kebutuhan digital Anda",
    },
    {
      title: "Aplikasi Mobile",
      description:
        "Kembangkan aplikasi mobile yang efisien dan scalable",
    },
    {
      title: "Custom Software",
      description:
        "Custom software yang scalable dan reliable untuk kebutuhan bisnis",
    },
    {
      title: "UI/UX Design",
      description:
        "Solusi desain UI/UX yang mendukung pengalaman pengguna dan bisnis",
    },
    {
      title: "Pengadaan Barang",
      description:
        "Penyediaan perangkat dan kebutuhan teknologi sesuai dengan kebutuhan bisnis Anda",
      wide: true,
    },
  ],

  EN: [
    {
      title: "Website",
      description:
        "Reliable website development to support your digital needs",
    },
    {
      title: "Mobile App",
      description:
        "Build efficient and scalable mobile applications",
    },
    {
      title: "Custom Software",
      description:
        "Scalable and reliable custom software for your business needs",
    },
    {
      title: "UI/UX Design",
      description:
        "UI/UX design solutions that enhance user experience and business performance",
    },
    {
      title: "Procurement",
      description:
        "Technology equipment and solutions tailored to your business needs",
      wide: true,
    },
  ],
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const currentServices = services[language];

  return (
    <section
      id="solutions"
      className="w-full bg-white py-16 sm:py-20"
    >
      <div className="container-main">
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-12">
          {/* LEFT - IMAGE */}
          <div className="relative min-h-[320px] w-full overflow-hidden rounded-3xl bg-gray-100 sm:min-h-[420px] lg:min-h-0 lg:w-5/12 lg:self-stretch">
            <Image
              src="/main/programming.jpg"
              alt={
                language === "ID"
                  ? "Tim profesional sedang bekerja"
                  : "Professional team working"
              }
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            {/* Light Dark Overlay */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Subtle Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="flex w-full flex-col lg:w-7/12">
            {/* Header */}
            <div className="mb-8">
              <h4 className="mb-3 font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B] sm:text-sm">
                {language === "ID" ? "LAYANAN" : "SERVICES"}
              </h4>

              <h2 className="mb-4 font-[var(--font-plus-jakarta)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#113A5D] sm:text-4xl lg:text-[42px]">
                {language === "ID" ? "Layanan Kami" : "Our Services"}
              </h2>

              <p className="max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                {language === "ID" ? (
                  <>
                    IFTECH SOLUSINDO menyediakan berbagai solusi teknologi
                    yang{" "}
                    <strong className="font-semibold text-gray-900">
                      scalable
                    </strong>{" "}
                    dan berfokus pada{" "}
                    <strong className="font-semibold text-gray-900">
                      reliability
                    </strong>
                    , mulai dari pengembangan software hingga pengadaan
                    perangkat teknologi untuk mendukung kebutuhan bisnis Anda.
                  </>
                ) : (
                  <>
                    IFTECH SOLUSINDO provides{" "}
                    <strong className="font-semibold text-gray-900">
                      scalable
                    </strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-gray-900">
                      reliable
                    </strong>{" "}
                    technology solutions, from software development to
                    technology procurement, designed to support your business
                    needs.
                  </>
                )}
              </p>
            </div>

            {/* SERVICES GRID */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {currentServices.map((service) => (
                <article
                  key={service.title}
                  className={`group rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_3px_14px_-5px_rgba(17,58,93,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/50 hover:shadow-[0_10px_28px_-8px_rgba(17,58,93,0.2)] sm:p-6 ${
                    service.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  <h3 className="mb-2 font-[var(--font-plus-jakarta)] text-base font-bold leading-snug tracking-[-0.02em] text-[#113A5D] transition-colors duration-300 group-hover:text-[#D97706] sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="font-[var(--font-inter)] text-sm leading-6 text-gray-500 sm:leading-7">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#F59E0B] px-6 py-3 font-[var(--font-inter)] text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#D97706] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B] sm:text-sm"
              >
                {language === "ID"
                  ? "KONSULTASIKAN KEBUTUHAN"
                  : "DISCUSS YOUR NEEDS"}

                <svg
                  className="ml-2 h-4 w-4 shrink-0 fill-current transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
