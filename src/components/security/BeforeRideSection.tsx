import { Card, CardContent } from "@/components/ui/card";
import { Search, Eye, Ban } from "lucide-react";

const BeforeRideSection = () => {
  const features = [
    {
      icon: Search,
      title: "Checagem de Passageiros",
      description: "Análise de comportamento e histórico para proteger motoristas."
    },
    {
      icon: Eye,
      title: "Informações Visíveis",
      description: "Você vê nome, forma de pagamento, avaliação e histórico."
    },
    {
      icon: Ban,
      title: "Cancelamento Sem Prejuízo",
      description: "Pode recusar corridas inseguras, sem taxa."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#163656] mb-6">
            Antes da corrida: você tem controle e informação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo começa com a sua escolha, com base em dados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#F9B824]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-[#F9B824]" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#163656]">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeRideSection;