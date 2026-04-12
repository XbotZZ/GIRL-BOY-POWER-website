import { CategoryPage } from "@/components/CategoryPage";
import {
  getServicesByCategory,
  categoryLabels,
  categoryDescriptions,
} from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${categoryLabels.hammam} | GIRL & BOY POWER`,
  description: categoryDescriptions.hammam,
};

export default function HammamPage() {
  return (
    <CategoryPage
      title={categoryLabels.hammam}
      description={categoryDescriptions.hammam}
      services={getServicesByCategory("hammam")}
      heroImage="https://picsum.photos/seed/gbp-hero-hammam/1920/900"
    />
  );
}
