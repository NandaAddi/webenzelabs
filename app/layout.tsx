import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Webenze - Build Your Digital Presence",
    template: "%s | Webenze"
  },
  description: "Webenze membantu bisnis, UMKM, startup membangun website modern, cepat, dan scalable untuk meningkatkan kredibilitas dan penjualan secara digital.",
  metadataBase: new URL("https://webenze.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webenze - Build Your Digital Presence",
    description: "Webenze membantu bisnis, UMKM, startup membangun website modern, cepat, dan scalable.",
    url: "https://webenze.com",
    siteName: "Webenze",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webenze - Build Your Digital Presence",
    description: "Webenze membantu bisnis, UMKM, startup membangun website modern, cepat, dan scalable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}


