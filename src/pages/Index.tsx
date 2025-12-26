import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategorySection from "@/components/sections/CategorySection";
import BestSellerSection from "@/components/sections/BestSellerSection";
import PromoBannerSection from "@/components/sections/PromoBannerSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import RecentProductsSection from "@/components/sections/RecentProductsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <BestSellerSection />
        <PromoBannerSection />
        <FeaturedSection />
        <RecentProductsSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
