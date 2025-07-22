import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/security/HeroSection";
import BeforeRideSection from "@/components/security/BeforeRideSection";
import DuringRideSection from "@/components/security/DuringRideSection";
import AfterRideSection from "@/components/security/AfterRideSection";
import DriverJourneyInfographic from "@/components/security/DriverJourneyInfographic";
import CommitmentSection from "@/components/security/CommitmentSection";

const Seguranca = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BeforeRideSection />
      <DuringRideSection />
      <AfterRideSection />
      <DriverJourneyInfographic />
      <CommitmentSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Seguranca;