
"use client";

import { useState } from "react";

import Footer from "../components/global/Footer";
import NavbarMain from "../components/global/NavbarMain";

import {
  LanguageProvider,
  useLanguage,
} from "../components/global/LanguageProvider";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

function ContactContent() {
  const { language } = useLanguage();
  const isID = language === "ID";

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitMessage("");
    setSubmitError("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data: ContactResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            data.message ||
            (isID
              ? "Gagal mengirim pesan."
              : "Failed to send message."),
        );
      }

      setSubmitMessage(
        data.message ||
          (isID
            ? "Pesan berhasil dikirim. Terima kasih telah menghubungi kami."
            : "Your message has been sent successfully. Thank you for contacting us."),
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : isID
            ? "Gagal mengirim pesan. Silakan coba kembali."
            : "Failed to send your message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#171717]">
      <NavbarMain />

      {/* ======================================================
          SECTION 1 — DARK CONTACT INFORMATION
      ====================================================== */}
      <section className="bg-[#171717] text-white">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-28 sm:px-10 sm:pb-14 sm:pt-32 md:px-14 md:pb-16 md:pt-36 lg:px-20 lg:pb-20 xl:px-24">
          <div className="grid grid-cols-1 items-stretch gap-9 lg:grid-cols-12 lg:gap-12">
            {/* LEFT — OFFICE IMAGE */}
            <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-neutral-800 sm:min-h-[400px] lg:col-span-5 lg:min-h-[530px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                alt={
                  isID
                    ? "Interior kantor modern dengan area kerja profesional"
                    : "Modern office interior with a professional workspace"
                }
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              {/* IMAGE CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-9">
                <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                  <span className="h-px w-7 bg-current" />
                  IFTECH SOLUSINDO
                </div>

                <h2 className="max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {isID
                    ? "Tempat ide bertemu dengan teknologi."
                    : "Where ideas meet technology."}
                </h2>

                <p className="mt-3 max-w-sm text-xs leading-6 text-white/70 sm:text-sm">
                  {isID
                    ? "Mari berkolaborasi untuk membangun solusi digital yang memberikan dampak nyata."
                    : "Let's collaborate to build digital solutions that make a meaningful impact."}
                </p>
              </div>

             
            </div>

            {/* RIGHT — CONTACT INFORMATION */}
            <div className="flex flex-col justify-center lg:col-span-7 lg:py-5">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                <span className="h-px w-7 bg-current" />
                {isID ? "HUBUNGI KAMI" : "GET IN TOUCH"}
              </div>

              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                {isID ? (
                  <>
                    Mari mulai
                    <br />
                    <span className="text-[#F59E0B]">
                      sesuatu yang hebat.
                    </span>
                  </>
                ) : (
                  <>
                    Let's build
                    <br />
                    <span className="text-[#F59E0B]">
                      something great.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                {isID
                  ? "Apakah Anda membutuhkan partner pengembangan software untuk bisnis? Ceritakan kebutuhan Anda kepada kami. Tim IFTECH siap membantu merancang dan mengembangkan solusi digital yang sesuai dengan tujuan Anda."
                  : "Looking for a software development partner for your business? Tell us about your needs. The IFTECH team is ready to help design and develop digital solutions aligned with your goals."}
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {/* EMAIL */}
                <a
                  href="mailto:info@iftechsolusindo.com"
                  className="group flex min-w-0 items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-[#F59E0B]/50 hover:bg-white/[0.07] sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Email
                    </p>

                    <p className="mt-2 break-words text-xs font-medium text-white transition-colors group-hover:text-[#F59E0B] sm:text-sm">
                      info@iftechsolusindo.com
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <div className="flex min-w-0 items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.5 3.5h3l1.5 4-2.2 1.8a14.5 14.5 0 006 6l1.8-2.2 4 1.5v3a2 2 0 01-2 2C11.5 19.6 4.4 12.5 4.4 5.5a2 2 0 012.1-2z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {isID ? "Telepon" : "Phone"}
                    </p>

                    <p className="mt-2 text-xs font-medium text-white sm:text-sm">
                      +62 xxx xxxx xxxx
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex min-w-0 items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {isID ? "Lokasi" : "Location"}
                    </p>

                    <p className="mt-2 text-xs font-medium leading-5 text-white sm:text-sm">
                      Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>

                {/* BUSINESS HOURS */}
                <div className="flex min-w-0 items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7v5l3 2"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {isID ? "Jam Operasional" : "Business Hours"}
                    </p>

                    <p className="mt-2 text-xs font-medium leading-5 text-white sm:text-sm">
                      {isID ? "Senin – Jumat" : "Monday – Friday"}
                      <br />
                      08:00 – 17:00
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTACT FOOTNOTE */}
              <p className="mt-5 text-[10px] leading-5 text-white/35">
                {isID
                  ? "Punya pertanyaan? Kirimkan pesan melalui formulir di bawah ini."
                  : "Have a question? Send us a message using the form below."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 2 — WHITE CONTACT FORM
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-20 lg:py-20 xl:px-24">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-16">
            {/* LEFT — FORM INTRO */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B77900]">
                <span className="h-px w-7 bg-current" />
                {isID ? "KONTAK" : "CONTACT"}
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                {isID ? (
                  <>
                    Punya proyek
                    <br />
                    <span className="text-[#B77900]">
                      dalam pikiran?
                    </span>
                  </>
                ) : (
                  <>
                    Have a project
                    <br />
                    <span className="text-[#B77900]">
                      in mind?
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
                {isID
                  ? "Ceritakan ide, kebutuhan, atau tantangan bisnis Anda. Kami akan membantu mengeksplorasi solusi yang paling sesuai."
                  : "Tell us about your ideas, requirements, or business challenges. We will help you explore the solution that best fits your needs."}
              </p>

              <div className="mt-7 border-l-2 border-[#F59E0B] pl-4">
                <p className="text-xs font-semibold text-neutral-800">
                  {isID
                    ? "Mari mulai percakapan."
                    : "Let's start a conversation."}
                </p>

                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  {isID
                    ? "Lengkapi formulir dan tim kami akan menindaklanjuti pesan Anda."
                    : "Complete the form and our team will follow up on your message."}
                </p>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-black/[0.08] bg-[#FAFAF8] p-5 sm:p-7 md:p-9"
              >
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600"
                    >
                      {isID ? "Nama Lengkap" : "Full Name"}
                      <span className="ml-1 text-[#B77900]">*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength={120}
                      autoComplete="name"
                      disabled={submitting}
                      placeholder={
                        isID ? "Masukkan nama Anda" : "Enter your name"
                      }
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600"
                    >
                      Email
                      <span className="ml-1 text-[#B77900]">*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      autoComplete="email"
                      disabled={submitting}
                      placeholder="nama@email.com"
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* SUBJECT + PHONE */}
                <div className="mt-5 grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600"
                    >
                      {isID ? "Subjek" : "Subject"}
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      maxLength={200}
                      disabled={submitting}
                      placeholder={
                        isID
                          ? "Topik yang ingin dibahas"
                          : "What would you like to discuss?"
                      }
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600"
                    >
                      {isID ? "Nomor Telepon" : "Phone Number"}
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      maxLength={30}
                      autoComplete="tel"
                      disabled={submitting}
                      placeholder="+62"
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-5">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600"
                  >
                    {isID ? "Pesan Anda" : "Your Message"}
                    <span className="ml-1 text-[#B77900]">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    minLength={5}
                    maxLength={5000}
                    rows={5}
                    disabled={submitting}
                    placeholder={
                      isID
                        ? "Ceritakan proyek atau kebutuhan yang ingin Anda diskusikan..."
                        : "Tell us about the project or requirements you would like to discuss..."
                    }
                    className="w-full resize-y rounded-lg border border-black/10 bg-white px-4 py-3 text-sm leading-6 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* SUCCESS MESSAGE */}
                {submitMessage && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-700"
                  >
                    {submitMessage}
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {submitError && (
                  <div
                    role="alert"
                    className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                  >
                    {submitError}
                  </div>
                )}

                {/* SUBMIT FOOTER */}
                <div className="mt-7 flex flex-col gap-4 border-t border-black/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[10px] leading-5 text-neutral-400">
                    {isID
                      ? "Kolom bertanda * wajib diisi. Informasi Anda digunakan untuk menindaklanjuti permintaan ini."
                      : "Fields marked * are required. Your information will be used to follow up on your inquiry."}
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-lg bg-[#F59E0B] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#171717] transition-all duration-300 hover:bg-[#D97706] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? isID
                        ? "Mengirim Pesan..."
                        : "Sending Message..."
                      : isID
                        ? "Kirim Pesan"
                        : "Send Message"}

                    {!submitting && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M3 10H17M10 3L17 10L10 17"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
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
