"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function NavbarMain() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Solutions",
      href: "/solutions",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Blog",
      href: "/blogs",
    },
    {
      name: "Contact Us",
      href: "/contactus",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="mx-auto flex h-[95px] max-w-[1180px] items-center justify-between px-6">
      {/* =====================================================
          LOGO
      ====================================================== */}
      <Link
        href="/"
        className={`${jakarta.className} group flex items-center gap-3`}
      >
        <Image
          src="/logo/iftech-logo.png"
          alt="IFTech Solusindo"
          width={42}
          height={42}
          priority
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <div className="flex flex-col leading-none">
          <span className="text-[25px] font-semibold tracking-[-0.045em] text-[#F59E0B]">
            IFTECH
          </span>

          <span className="mt-[4px] text-[11px] font-medium tracking-[0.15em] text-[#171717]">
            SOLUSINDO
          </span>
        </div>
      </Link>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <nav
        className={`${jakarta.className} hidden items-center gap-9 md:flex`}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[14px] transition-colors duration-200 ${
                active
                  ? "font-semibold text-[#F59E0B]"
                  : "font-medium text-gray-600 hover:text-[#F59E0B]"
              }`}
            >
              {item.name}

              {/* Active Indicator */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#F59E0B] transition-all duration-300 ${
                  active ? "w-5 opacity-100" : "w-0 opacity-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* =====================================================
          LANGUAGE SWITCHER
      ====================================================== */}
      <div className={`${jakarta.className} relative`}>
        {/* Selected Language */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="flex h-[42px] w-[120px] items-center justify-between rounded-full border border-gray-200 bg-white px-4 text-[13px] font-medium shadow-sm transition-all duration-200 hover:border-[#F59E0B]/40 hover:shadow-md"
        >
          <span className="flex items-center gap-2.5">
            {/* Indonesia */}
            {language === "ID" ? (
              <span className="flex h-[15px] w-[25px] flex-col overflow-hidden rounded-[2px]">
                <span className="h-1/2 w-full bg-red-600" />
                <span className="h-1/2 w-full bg-white" />
              </span>
            ) : (
              /* English */
              <span className="flex h-[15px] w-[25px] items-center justify-center overflow-hidden rounded-[2px] bg-[#1D4ED8] text-[8px] font-bold text-white">
                EN
              </span>
            )}

            <span className="text-gray-700">{language}</span>
          </span>

          <ChevronDown
            size={15}
            strokeWidth={1.8}
            className={`text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* =================================================
            LANGUAGE DROPDOWN
        ================================================== */}
        {isOpen && (
          <div
            className="absolute right-0 top-[50px] z-50 w-[150px] overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
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
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                language === "ID"
                  ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="flex h-[15px] w-[25px] flex-col overflow-hidden rounded-[2px]">
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
              className={`mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                language === "EN"
                  ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="flex h-[15px] w-[25px] items-center justify-center overflow-hidden rounded-[2px] bg-[#1D4ED8] text-[8px] font-bold text-white">
                EN
              </span>

              <span>English</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}