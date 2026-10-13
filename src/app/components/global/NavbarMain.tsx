
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function NavbarMain() {
  const { language, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const pathname = usePathname();
  const isID = language === "ID";

  const navItems = [
    {
      name: isID ? "Beranda" : "Home",
      href: "/",
    },
    {
      name: isID ? "Tentang Kami" : "About Us",
      href: "/about-us",
    },
    {
      name: isID ? "Solusi" : "Solutions",
      href: "/solutions",
    },
    {
      name: isID ? "Proyek" : "Projects",
      href: "/projects",
    },
    {
      name: "Blog",
      href: "/blogs",
    },
    {
      name: isID ? "Kontak" : "Contact Us",
      href: "/contactus",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenus = () => {
    setIsMobileOpen(false);
    setIsOpen(false);
  };

  return (
    <header
      className={`${jakarta.className} relative z-50 mx-auto w-full max-w-[1180px] px-4 sm:px-6`}
    >
      {/* Main Navbar */}
      <div className="flex h-[76px] items-center justify-between sm:h-[85px] md:h-[95px]">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logo/iftech-logo.png"
            alt="IFTech Solusindo"
            width={42}
            height={42}
            priority
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[42px] sm:w-[42px]"
          />

          <div className="flex flex-col leading-none">
            <span className="text-[22px] font-semibold tracking-[-0.045em] text-[#F59E0B] sm:text-[25px]">
              IFTECH
            </span>

            <span className="mt-[4px] text-[9px] font-medium tracking-[0.15em] text-[#171717] sm:text-[11px]">
              SOLUSINDO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-9">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap text-[13px] transition-colors duration-200 lg:text-[14px] ${
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

        {/* Right Controls */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Desktop Language Switcher */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => {
                setIsOpen((prev) => !prev);
                setIsMobileOpen(false);
              }}
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-label={isID ? "Pilih bahasa" : "Select language"}
              className="flex h-[38px] w-[94px] items-center justify-between rounded-full border border-gray-200 bg-white px-2.5 text-[12px] font-medium shadow-sm transition-all duration-200 hover:border-[#F59E0B]/40 hover:shadow-md sm:h-[42px] sm:w-[120px] sm:px-4 sm:text-[13px]"
            >
              <span className="flex items-center gap-2 sm:gap-2.5">
                {isID ? (
                  <span className="flex h-[13px] w-[21px] flex-col overflow-hidden rounded-[2px] sm:h-[15px] sm:w-[25px]">
                    <span className="h-1/2 w-full bg-red-600" />
                    <span className="h-1/2 w-full bg-white" />
                  </span>
                ) : (
                  <span className="flex h-[13px] w-[21px] items-center justify-center overflow-hidden rounded-[2px] bg-[#1D4ED8] text-[7px] font-bold text-white sm:h-[15px] sm:w-[25px] sm:text-[8px]">
                    EN
                  </span>
                )}

                <span className="text-gray-700">{language}</span>
              </span>

              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Desktop Language Dropdown */}
            {isOpen && (
              <div
                className="absolute right-0 top-[46px] z-[70] w-[150px] overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
                role="listbox"
                aria-label={isID ? "Pilihan bahasa" : "Language options"}
              >
                {/* Indonesian */}
                <button
                  type="button"
                  role="option"
                  aria-selected={isID}
                  onClick={() => {
                    setLanguage("ID");
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                    isID
                      ? "bg-[#F59E0B]/10 text-[#B45309]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex h-[15px] w-[25px] flex-col overflow-hidden rounded-[2px]">
                    <span className="h-1/2 w-full bg-red-600" />
                    <span className="h-1/2 w-full bg-white" />
                  </span>

                  Indonesia
                </button>

                {/* English */}
                <button
                  type="button"
                  role="option"
                  aria-selected={!isID}
                  onClick={() => {
                    setLanguage("EN");
                    setIsOpen(false);
                  }}
                  className={`mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                    !isID
                      ? "bg-[#F59E0B]/10 text-[#B45309]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex h-[15px] w-[25px] items-center justify-center overflow-hidden rounded-[2px] bg-[#1D4ED8] text-[8px] font-bold text-white">
                    EN
                  </span>

                  English
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => {
              setIsMobileOpen((prev) => !prev);
              setIsOpen(false);
            }}
            aria-expanded={isMobileOpen}
            aria-controls="main-mobile-menu"
            aria-label={
              isMobileOpen
                ? isID
                  ? "Tutup menu"
                  : "Close menu"
                : isID
                  ? "Buka menu"
                  : "Open menu"
            }
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-[#F59E0B]/50 hover:text-[#F59E0B] md:hidden"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <nav
          id="main-mobile-menu"
          aria-label={isID ? "Navigasi utama" : "Main navigation"}
          className="absolute left-4 right-4 top-[68px] z-[60] rounded-2xl border border-gray-200 bg-white p-3 shadow-xl sm:left-6 sm:right-6 sm:top-[76px] md:hidden"
        >
          {/* Navigation Links */}
          <div className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                    active
                      ? "bg-[#F59E0B]/10 font-semibold text-[#B45309]"
                      : "font-medium text-gray-700 hover:bg-gray-50 hover:text-[#B45309]"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Language Options */}
          <div className="mt-3 border-t border-gray-100 px-3 pt-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              {isID ? "Pilih Bahasa" : "Select Language"}
            </p>

            <div className="flex gap-2">
              {/* Indonesian */}
              <button
                type="button"
                onClick={() => {
                  setLanguage("ID");
                  closeMenus();
                }}
                aria-pressed={isID}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-2 py-2.5 text-xs font-medium transition-colors ${
                  isID
                    ? "border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#B45309]"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="flex h-[12px] w-[19px] flex-col overflow-hidden rounded-[2px]">
                  <span className="h-1/2 w-full bg-red-600" />
                  <span className="h-1/2 w-full bg-white" />
                </span>

                Indonesia
              </button>

              {/* English */}
              <button
                type="button"
                onClick={() => {
                  setLanguage("EN");
                  closeMenus();
                }}
                aria-pressed={!isID}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-2 py-2.5 text-xs font-medium transition-colors ${
                  !isID
                    ? "border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#B45309]"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="flex h-[12px] w-[19px] items-center justify-center overflow-hidden rounded-[2px] bg-[#1D4ED8] text-[7px] font-bold text-white">
                  EN
                </span>

                English
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
