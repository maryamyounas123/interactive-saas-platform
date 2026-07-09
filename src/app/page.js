import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import PageLoader from "@/components/ui/PageLoader";
import ThemeCustomizer from "@/components/ui/ThemeCustomizer";
import ChatWidget from "@/components/ui/ChatWidget";

import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Stats from "@/components/sections/Stats";
import ProductShowcase from "@/components/sections/ProductShowcase";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import Pricing from "@/components/sections/Pricing";
import FeatureComparison from "@/components/sections/FeatureComparison";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Stats />
        <ProductShowcase />
        <InteractiveDemo />
        <Pricing />
        <FeatureComparison />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ThemeCustomizer />
      <ChatWidget />
    </>
  );
}
