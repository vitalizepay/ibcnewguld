import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FlywheelSection } from "@/components/FlywheelSection";
import { MembershipCardsSection } from "@/components/MembershipCardsSection";
import { MembershipPlansSection } from "@/components/MembershipPlansSection";
import { WhoItsForSection } from "@/components/WhoItsForSection";
import { ApplicationFormSection } from "@/components/ApplicationFormSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FlywheelSection />
      <MembershipCardsSection />
      <MembershipPlansSection />
      <WhoItsForSection />
      <ApplicationFormSection />
      <Footer />
    </main>
  );
};

export default Index;
