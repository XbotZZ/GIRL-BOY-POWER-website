import { HomeContent } from "@/components/HomeContent";
import { getFeaturedServices } from "@/lib/services";

export default function HomePage() {
  const featured = getFeaturedServices();

  return <HomeContent featured={featured} />;
}
