import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mic, AlertTriangle } from "lucide-react";

const DuringRideSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Rastreamento GPS",
      description: "Corridas monitoradas em tempo real."
    },
    {
      icon: Mic,
      title: "Gravação de Áudio (em breve)",
      description: "Grave o áudio da corrida pelo app, sempre que quiser."
    },
    {
      icon: AlertTriangle,
      title: "Botão de Emergência",
      description: "Acione suporte instantâneo com um clique."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#163656] mb-6">
            Durante a corrida: suporte em tempo real
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você dirige com tecnologia ativa e canais abertos.
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

export default DuringRideSection;