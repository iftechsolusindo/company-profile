
"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();

  const isID = language === "ID";

  return (
    <footer className="bg-[#F7F7F5] text-[#171717]">
      <div className="container-main">
        {/* ================================
            MAIN FOOTER
        ================================= */}
        <div className="border-b border-[#E5E5E5] pb-16 pt-[155px] md:pb-20 md:pt-[175px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">

            {/* ================================
                BRAND + BUSINESS HOURS
            ================================= */}
            <div className="lg:col-span-5">
              {/* Logo */}
              <a
                href="#home"
                className="group inline-flex items-center gap-3"
              >
                <Image
                  src="/logo/iftech-logo.png"
                  alt="IFTech Solusindo"
                  width={46}
                  height={46}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <div className="flex flex-col leading-none">
                  <span className="text-[22px] font-semibold tracking-[-0.04em] text-[#F59E0B]">
                    IFTECH
                  </span>

                  <span className="mt-[5px] text-[10px] font-medium tracking-[0.18em] text-[#333333]">
                    SOLUSINDO
                  </span>
                </div>
              </a>

              {/* Description */}
              <p className="mt-7 max-w-sm text-[13px] leading-6 text-[#666666]">
                {isID
                  ? "Mitra teknologi untuk membantu bisnis membangun solusi digital yang inovatif, scalable, dan reliable."
                  : "Your technology partner for building innovative, scalable, and reliable digital solutions."}
              </p>

           {/* Business Hours */}
            <div className="mt-7">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                {isID ? "Jam Operasional" : "Business Hours"}
              </h3>

              <div className="mt-3">
                <p className="text-[13px] font-medium text-[#555555]">
                  {isID ? "Senin - Jumat" : "Monday - Friday"}
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#777777]">
                  8 AM - 5 PM {isID ? "(WIB)" : "(Western Indonesia Time)"}
                </p>
              </div>
            </div>

              {/* Orange Accent */}
              <div className="mt-7 h-[2px] w-8 rounded-full bg-[#F59E0B]" />

              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#999999]">
                Technology • Innovation • Growth
              </p>
            </div>

            {/* ================================
                NAVIGATION
            ================================= */}
            <div className="lg:col-span-2">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                {isID ? "Navigasi" : "Navigation"}
              </h3>

              <ul className="mt-7 space-y-4 text-[13px] text-[#666666]">
                <li>
                  <a
                    href="#home"
                    className="transition-colors duration-200 hover:text-[#F59E0B]"
                  >
                    {isID ? "Beranda" : "Home"}
                  </a>
                </li>

                <li>
                  <a
                    href="#solutions"
                    className="transition-colors duration-200 hover:text-[#F59E0B]"
                  >
                    {isID ? "Solusi" : "Solutions"}
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className="transition-colors duration-200 hover:text-[#F59E0B]"
                  >
                    {isID ? "Proyek" : "Projects"}
                  </a>
                </li>

                <li>
                  <a
                    href="#career"
                    className="transition-colors duration-200 hover:text-[#F59E0B]"
                  >
                    Career
                  </a>
                </li>

                <li>
                  <a
                    href="#blog"
                    className="transition-colors duration-200 hover:text-[#F59E0B]"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="transition-colors duration-200 hover:text-[#F59E0B]"
                  >
                    {isID ? "Kontak" : "Contact"}
                  </a>
                </li>
              </ul>
            </div>

            {/* ================================
                CONTACT - RIGHT
            ================================= */}
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="lg:max-w-[330px]">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  {isID ? "Hubungi Kami" : "Get in Touch"}
                </h3>

                <div className="mt-7 space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:info@iftechsolusindo.com"
                    className="group block"
                  >
                    <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[#999999]">
                      Email
                    </span>

                    <span className="mt-1.5 block text-[13px] text-[#555555] transition-colors group-hover:text-[#F59E0B]">
                      iftechsolusindo@gmail.com
                    </span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+62274539660"
                    className="group block"
                  >
                    <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[#999999]">
                      {isID ? "Telepon" : "Phone"}
                    </span>

                    <span className="mt-1.5 block text-[13px] text-[#555555] transition-colors group-hover:text-[#F59E0B]">
                      0851-7432-0326
                    </span>
                  </a>

                  {/* Location */}
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[#999999]">
                      {isID ? "Kantor" : "Office"}
                    </span>

                    <p className="mt-1.5 text-[13px] leading-6 text-[#555555]">
                      Perumahan Arga Jaya Jalan Wilis CXVIII,
                      <br />
                      RT.06/RW.3, Maliyan, Kalinegoro,
                      <br />
                      Kec. Mertoyudan, Kabupaten Magelang,
                      <br />
                      Jawa Tengah 56172
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================
            BOTTOM FOOTER
        ================================= */}
        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <div className="text-[11px] text-[#999999]">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-[#555555]">
              CV IFTECH Solusindo
            </span>
            .{" "}
            {isID
              ? "Seluruh hak cipta dilindungi."
              : "All rights reserved."}
          </div>

         {/* Social Media */}
<div className="flex items-center gap-2">
  {/* LinkedIn */}
  <a
    href="https://id.linkedin.com/company/iftech-solusindo"
    aria-label="LinkedIn"
    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDDDDD] text-[#777777] transition-all duration-200 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10.12H5.67V18h2.67v-7.88ZM7 6a1.55 1.55 0 1 0 0 3.1A1.55 1.55 0 0 0 7 6Zm11.33 7.48c0-2.37-1.27-3.48-2.96-3.48a2.57 2.57 0 0 0-2.32 1.28v-1.16h-2.67V18h2.67v-4.14c0-1.09.2-2.14 1.56-2.14 1.34 0 1.36 1.24 1.36 2.21V18h2.36v-4.52Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/iftechsolusindo?obrf=MWFmZGI2cXhmZ25yYg%3D%3D"
    aria-label="Instagram"
    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDDDDD] text-[#777777] transition-all duration-200 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}
