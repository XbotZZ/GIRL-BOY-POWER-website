import { CartContent } from "@/components/CartContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon panier | GIRL & BOY POWER",
  description:
    "Consultez votre panier et finalisez votre commande chez GIRL & BOY POWER.",
};

export default function CartPage() {
  return <CartContent />;
}
