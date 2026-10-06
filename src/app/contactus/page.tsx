"use client";

import Image from "next/image";
import { useState } from "react";

import Footer from "../components/global/Footer";
import NavbarMain from "../components/global/NavbarMain";

import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";

function ContactContent() {
  const { language } = useLanguage();
  const isID = language === "ID";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#171717]">
      <NavbarMain />

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container-main">
          <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:gap-16">

            {/* LEFT - IMAGE */}
            <div className="relative min-h-[480px] w-full overflow-hidden rounded-3xl lg:min-h-0 lg:w-5/12 lg:self-stretch">
              <Image
                src="/main/contact.jpg"
                alt={
                  isID
                    ? "Tim IFTECH SOLUSINDO"
                    : "IFTECH SOLUSINDO team"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
                <div className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                  <span className="h-px w-7 bg-[#F59E0B]" />
                  IFTECH SOLUSINDO
                </div>

                <p className="max-w-[320px] text-xl font-semibold leading-tight">
                  {isID
                    ? "Mari wujudkan solusi digital yang tepat untuk bisnis Anda."
                    : "Let's build the right digital solution for your business."}
                </p>
              </div>
            </div>

            {/* RIGHT - CONTACT INFORMATION */}
            <div className="flex w-full flex-col justify-center lg:w-7/12">

              {/* Section Label */}
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                <span className="h-px w-7 bg-current" />

                {isID ? "HUBUNGI KAMI" : "TAKE THE LEAD"}
              </div>

              {/* Heading */}
              <h1 className="max-w-[650px] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#113a5d] md:text-5xl">
                {isID ? (
                  <>
                    Hubungi kami dan{" "}
                    <span className="text-[#F59E0B]">
                      mulai langkah berikutnya.
                    </span>
                  </>
                ) : (
                  <>
                    Reach out to{" "}
                    <span className="text-[#F59E0B]">
                      Us
                    </span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[650px] text-sm leading-7 text-gray-500 md:text-base">
                {isID
                  ? "Apakah Anda sedang mencari partner pengembangan software yang dapat membantu membawa bisnis Anda ke tahap berikutnya? Hubungi kami hari ini. Kami siap memahami kebutuhan Anda dan membantu mewujudkan project software menjadi solusi digital yang tepat."
                  : "Looking for a reliable development partner to drive your business forward? Get in touch with us today! We are ready to understand your needs, help you reach your objectives, and elevate your software development projects to new heights."}
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* EMAIL */}
                <a
                  href="mailto:info@iftechsolusindo.com"
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7l8 6 8-6"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#113a5d] transition-colors group-hover:text-[#F59E0B]">
                      info@iftechsolusindo.com
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+620000000000"
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.5 3.5h3l1.5 4-2.2 1.8a14.5 14.5 0 006 6l1.8-2.2 4 1.5v3a2 2 0 01-2 2C11.5 19.6 4.4 12.5 4.4 5.5a2 2 0 012.1-2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      {isID ? "Telepon" : "Phone"}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#113a5d] transition-colors group-hover:text-[#F59E0B]">
                      +62 xxx xxxx xxxx
                    </p>
                  </div>
                </a>

                {/* ADDRESS */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-6.2 7-12A7 7 0 105 9c0 5.8 7 12 7 12z"
                      />
                      <circle cx="12" cy="9" r="2.2" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      {isID ? "Alamat" : "Address"}
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#113a5d]">
                      Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>

                {/* BUSINESS HOURS */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="8.5" />
                      <path
                        strokeLinecap="round"
                        d="M12 7v5l3 2"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      {isID ? "Jam Operasional" : "Business Hours"}
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#113a5d]">
                      Monday – Friday
                      <br />
                      08:00 – 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#171717] text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/main/contact-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#171717]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-[#171717]/70" />
        </div>

        {/* Decoration */}
        <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full border-[80px] border-[#F59E0B]/10" />

        <div className="relative mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">

            {/* FORM INTRO */}
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                <span className="h-px w-7 bg-current" />
                {isID ? "CONTACT US" : "GET IN TOUCH"}
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
                {isID ? (
                  <>
                    Punya project{" "}
                    <span className="text-[#F59E0B]">
                      dalam pikiran?
                    </span>
                  </>
                ) : (
                  <>
                    Have a project{" "}
                    <span className="text-[#F59E0B]">
                      in mind?
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-6 max-w-[440px] text-sm leading-7 text-white/45">
                {isID
                  ? "Ceritakan kebutuhan dan tantangan yang ingin Anda selesaikan. Tim kami akan menghubungi Anda untuk membahas bagaimana kami dapat membantu."
                  : "Tell us about your requirements and challenges. Our team will get in touch with you to discuss how we can help bring your project to life."}
              </p>

              <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/30">
                <span className="h-px w-10 bg-white/20" />
                IFTECH SOLUSINDO
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7">
              <form className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                      {isID ? "Nama" : "Name"}
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={
                        isID ? "Nama lengkap" : "Your name"
                      }
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                {/* COMPANY + PHONE */}
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                      {isID ? "Perusahaan" : "Company"}
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={
                        isID
                          ? "Nama perusahaan"
                          : "Company name"
                      }
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                      {isID ? "Nomor Telepon" : "Phone"}
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+62"
                      className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-6">
                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                    {isID ? "Pesan" : "Message"}
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={
                      isID
                        ? "Ceritakan tentang project atau kebutuhan Anda..."
                        : "Tell us about your project or requirements..."
                    }
                    className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#F59E0B]"
                  />
                </div>

                {/* SUBMIT */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 bg-[#F59E0B] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#D97706]"
                  >
                    {isID ? "Kirim Pesan" : "Send Message"}

                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}