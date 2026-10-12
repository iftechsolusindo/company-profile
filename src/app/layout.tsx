
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iftech Solusindo",
  description:
    "IFTECH SOLUSINDO - Solusi teknologi dan pengembangan perangkat lunak untuk kebutuhan bisnis Anda.",
  icons: {
    icon: "/logo/iftech-logo.png",
    shortcut: "/logo/iftech-logo.png",
    apple: "/logo/iftech-logo.png",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
