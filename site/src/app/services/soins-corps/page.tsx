import { CategoryPage } from "@/components/CategoryPage";
import {
  getServicesByCategory,
  categoryLabels,
  categoryDescriptions,
} from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${categoryLabels["soins-corps"]} | GIRL & BOY POWER`,
  description: categoryDescriptions["soins-corps"],
};

export default function SoinsCorpsPage() {
  return (
    <CategoryPage
      title={categoryLabels["soins-corps"]}
      description={categoryDescriptions["soins-corps"]}
      services={getServicesByCategory("soins-corps")}
      heroImage="https://picsum.photos/seed/gbp-hero-corps/1920/900"
    />
  );
}
