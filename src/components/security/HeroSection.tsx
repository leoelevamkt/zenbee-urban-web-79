import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroDriverSecurity from "@/assets/hero-driver-security.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDriverSecurity})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#163656]/95 to-[#163656]/70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Você nunca dirige sozinho.
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light opacity-95 leading-relaxed">
            Com a ZenBee, sua segurança é prioridade: antes, durante e depois da corrida.
          </p>
          <Button size="lg" className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-semibold text-lg px-8 py-4">
            <Phone className="mr-2" size={20} />
            Fale com a Central de Segurança
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;