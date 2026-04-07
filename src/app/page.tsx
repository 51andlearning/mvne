import NavSection from "@/components/sections/NavSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import WhyMvnoSection from "@/components/sections/WhyMvnoSection";
import DsgDifferenceSection from "@/components/sections/DsgDifferenceSection";
import VasSection from "@/components/sections/VasSection";
import ScopeSection from "@/components/sections/ScopeSection";
import CommercialSection from "@/components/sections/CommercialSection";
import TermsSection from "@/components/sections/TermsSection";
import SignaturesSection from "@/components/sections/SignaturesSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavSection />
      <HeroSection />
      <IntroSection />
      <WhyMvnoSection />
      <DsgDifferenceSection />
      <VasSection />
      <ScopeSection />
      <CommercialSection />
      <TermsSection />
      <SignaturesSection />
      <FooterSection />
    </main>
  );
}
