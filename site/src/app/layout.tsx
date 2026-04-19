import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

export const metadata: Metadata = {
  title: "GIRL & BOY POWER | Parfums, Soins, Bagagerie & Spa",
  description:
    "GIRL & BOY POWER — Maison de parfums, soins Homme & Mixte inspirés des Sources de la Douix, bagagerie de luxe JuliCath et spa bien-être à Châtillon-sur-Seine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
