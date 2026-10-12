
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
              href="#"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDDDDD] text-[10px] font-bold text-[#777777] transition-all duration-200 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
            >
              in
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDDDDD] text-sm text-[#777777] transition-all duration-200 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
            >
              ◎
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDDDDD] text-xs font-bold text-[#777777] transition-all duration-200 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
            >
              f
            </a>

            {/* X */}
            <a
              href="#"
              aria-label="X"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDDDDD] text-[10px] font-bold text-[#777777] transition-all duration-200 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-white"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
