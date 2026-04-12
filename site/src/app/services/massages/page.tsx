import { CategoryPage } from "@/components/CategoryPage";
import {
  getServicesByCategory,
  categoryLabels,
  categoryDescriptions,
} from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${categoryLabels.massages} | GIRL & BOY POWER`,
  description: categoryDescriptions.massages,
};

export default function MassagesPage() {
  return (
    <CategoryPage
      title={categoryLabels.massages}
      description={categoryDescriptions.massages}
      services={getServicesByCategory("massages")}
      heroImage="https://picsum.photos/seed/gbp-hero-massages/1920/900"
    />
  );
}
