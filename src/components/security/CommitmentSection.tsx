import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CommitmentSection = () => {
  return (
    <section className="py-32 bg-[#F9B824] text-[#163656] mb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Compromisso com quem move a cidade
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
            A ZenBee investe continuamente em tecnologia, atendimento e suporte para proteger você em cada etapa da sua jornada. Segurança não é um recurso, é a base do nosso serviço.
          </p>
          <Button size="lg" className="bg-[#163656] hover:bg-[#163656]/90 text-white font-semibold text-lg px-8 py-4">
            <MessageCircle className="mr-2" size={20} />
            Falar com a Central de Segurança
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;