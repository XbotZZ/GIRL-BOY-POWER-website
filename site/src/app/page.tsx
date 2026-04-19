import { HomeContent } from "@/components/HomeContent";
import { getProductsByUniverse } from "@/lib/products";

export default function HomePage() {
  const parfums = getProductsByUniverse("parfums").filter((p) => !p.isCoffret);
  const featuredParfums = [
    parfums.find((p) => p.season === "printemps" && p.gender === "feminin"),
    parfums.find((p) => p.season === "ete" && p.gender === "masculin"),
    parfums.find((p) => p.season === "automne" && p.gender === "feminin"),
    parfums.find((p) => p.season === "hiver" && p.gender === "masculin"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  const soins = getProductsByUniverse("soins");
  const featuredSoins = [
    soins.find((p) => p.id === "huile-a-barbe"),
    soins.find((p) => p.id === "creme-hydratante"),
    soins.find((p) => p.id === "rasoir-precision"),
    soins.find((p) => p.id === "baume-apres-rasage"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <HomeContent
      featuredParfums={featuredParfums}
      featuredSoins={featuredSoins}
    />
  );
}
