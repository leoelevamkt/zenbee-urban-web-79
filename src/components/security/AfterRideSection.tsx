import { Card, CardContent } from "@/components/ui/card";
import { Phone, FileText, HeartHandshake } from "lucide-react";

const AfterRideSection = () => {
  const features = [
    {
      icon: Phone,
      title: "Central de Segurança 24h",
      description: "Equipe dedicada para situações urgentes."
    },
    {
      icon: FileText,
      title: "Registro de Ocorrência",
      description: "Abra chamados direto pelo app com acompanhamento."
    },
    {
      icon: HeartHandshake,
      title: "Análise de Incidentes",
      description: "Equipe real que avalia cada caso e toma providências."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#163656] mb-6">
            Depois da corrida: apoio humano, solução real
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você nunca fica sem resposta ou suporte.
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

export default AfterRideSection;