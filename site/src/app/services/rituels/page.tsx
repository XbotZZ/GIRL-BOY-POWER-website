import { CategoryPage } from "@/components/CategoryPage";
import {
  getServicesByCategory,
  categoryLabels,
  categoryDescriptions,
} from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${categoryLabels.rituels} | GIRL & BOY POWER`,
  description: categoryDescriptions.rituels,
};

export default function RituelsPage() {
  return (
    <CategoryPage
      title={categoryLabels.rituels}
      description={categoryDescriptions.rituels}
      services={getServicesByCategory("rituels")}
      heroImage="https://picsum.photos/seed/gbp-hero-rituels/1920/900"
    />
  );
}
