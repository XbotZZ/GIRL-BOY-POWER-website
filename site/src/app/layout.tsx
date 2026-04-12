import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GIRL & BOY POWER | Spa & Bien-Etre",
  description:
    "GIRL & BOY POWER, votre spa & bien-etre inclusif. Massages, soins du visage, rituels et hammam. Une parenthese de douceur pour elles, pour eux, pour tous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
