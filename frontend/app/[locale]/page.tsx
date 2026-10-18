import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import CoachesSection from "@/components/sections/CoachesSection";
import SubscriptionsSection from "@/components/sections/SubscriptionsSection";
import GallerySection from "@/components/sections/GallerySection";
import PromotionsSection from "@/components/sections/PromotionsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ActivitiesSection />
      <CoachesSection />
      <SubscriptionsSection />
      <GallerySection />
      <PromotionsSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
