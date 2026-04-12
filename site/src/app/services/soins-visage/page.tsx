import { CategoryPage } from "@/components/CategoryPage";
import {
  getServicesByCategory,
  categoryLabels,
  categoryDescriptions,
} from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${categoryLabels["soins-visage"]} | GIRL & BOY POWER`,
  description: categoryDescriptions["soins-visage"],
};

export default function SoinsVisagePage() {
  return (
    <CategoryPage
      title={categoryLabels["soins-visage"]}
      description={categoryDescriptions["soins-visage"]}
      services={getServicesByCategory("soins-visage")}
      heroImage="https://picsum.photos/seed/gbp-hero-visage/1920/900"
    />
  );
}
