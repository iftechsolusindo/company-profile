"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useLanguage } from "./LanguageProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function NavbarSecondary() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const isID = language === "ID";

  return (
    <header className="w-full px-6 pt-5">
      <div
        className={`
          ${jakarta.className}
          mx-auto
          flex
          h-[64px]
          w-full
          max-w-[1080px]
          items-center
          justify-between
          rounded-full
          border
          border-gray-200
          bg-white
          px-5
          shadow-sm
          md:px-7
        `}
      >
        {/* =====================================================
            LOGO
        ====================================================== */}
        <a
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/logo/iftech-logo.png"
            alt="IFTech Solusindo"
            width={34}
            height={34}
            priority
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="flex flex-col leading-none">
            {/* IFTECH */}
            <span className="text-[18px] font-semibold tracking-[-0.045em] text-[#F59E0B]">
              IFTECH
            </span>

            {/* SOLUSINDO */}
            <span className="mt-[3px] text-[7px] font-medium tracking-[0.16em] text-[#171717]">
              SOLUSINDO
            </span>
          </div>
        </a>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <nav className="hidden items-center gap-7 lg:flex">
          {/* Home */}
          <a
            href="/#home"
            className="text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F59E0B]"
          >
            {isID ? "Beranda" : "Home"}
          </a>

          {/* About Us */}
          <a
            href="/about"
            className="relative text-[13px] font-semibold text-[#F59E0B]"
          >
            {isID ? "Tentang Kami" : "About Us"}

            {/* Active Indicator */}
            <span className="absolute -bottom-[7px] left-0 h-[2px] w-5 rounded-full bg-[#F59E0B]" />
          </a>

          {/* Solutions */}
          <a
            href="/#solutions"
            className="text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F59E0B]"
          >
            {isID ? "Solusi" : "Solutions"}
          </a>

          {/* Projects */}
          <a
            href="/#projects"
            className="text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F59E0B]"
          >
            {isID ? "Proyek" : "Projects"}
          </a>

          {/* Blog */}
          <a
            href="/#blog"
            className="text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F59E0B]"
          >
            Blog
          </a>

          {/* Contact */}
          <a
            href="/#contact"
            className="text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#F59E0B]"
          >
            {isID ? "Kontak" : "Contact Us"}
          </a>
        </nav>

        {/* =====================================================
            LANGUAGE SELECTOR
        ====================================================== */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            className="
              flex
              h-[38px]
              w-[105px]
              items-center
              justify-between
              rounded-full
              border
              border-gray-200
              bg-white
              px-3
              text-[11px]
              font-medium
              shadow-sm
              transition-all
              duration-200
              hover:border-[#F59E0B]/40
              hover:shadow-md
            "
          >
            <span className="flex items-center gap-2">
              {/* Indonesia */}
              {language === "ID" ? (
                <span className="flex h-[13px] w-[21px] flex-col overflow-hidden rounded-[2px]">
                  <span className="h-1/2 w-full bg-red-600" />
                  <span className="h-1/2 w-full bg-white" />
                </span>
              ) : (
                /* English */
                <span className="flex h-[13px] w-[21px] items-center justify-center overflow-hidden rounded-[2px] bg-[#1D4ED8] text-[7px] font-bold text-white">
                  EN
                </span>
              )}

              <span className="text-gray-700">{language}</span>
            </span>

            <ChevronDown
              size={13}
              strokeWidth={1.8}
              className={`text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* =====================================================
              DROPDOWN
          ====================================================== */}
          {isOpen && (
            <div
              className="
                absolute
                right-0
                top-[46px]
                z-50
                w-[145px]
                overflow-hidden
                rounded-xl
                border
                border-gray-200
                bg-white
                p-1.5
                shadow-lg
              "
              role="listbox"
            >
              {/* Indonesia */}
              <button
                type="button"
                role="option"
                aria-selected={language === "ID"}
                onClick={() => {
                  setLanguage("ID");
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[12px] transition-colors ${
                  language === "ID"
                    ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex h-[13px] w-[21px] flex-col overflow-hidden rounded-[2px]">
                  <span className="h-1/2 w-full bg-red-600" />
                  <span className="h-1/2 w-full bg-white" />
                </span>

                <span>Indonesia</span>
              </button>

              {/* English */}
              <button
                type="button"
                role="option"
                aria-selected={language === "EN"}
                onClick={() => {
                  setLanguage("EN");
                  setIsOpen(false);
                }}
                className={`mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[12px] transition-colors ${
                  language === "EN"
                    ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex h-[13px] w-[21px] items-center justify-center overflow-hidden rounded-[2px] bg-[#1D4ED8] text-[7px] font-bold text-white">
                  EN
                </span>

                <span>English</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}