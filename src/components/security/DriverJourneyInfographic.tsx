import { CheckCircle, Search, Shield, ThumbsUp, HeartHandshake } from "lucide-react";
import driverJourneyInfographic from "@/assets/driver-journey-infographic.jpg";

const DriverJourneyInfographic = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: "Aceita a corrida",
      description: "Com informações completas"
    },
    {
      icon: Search,
      title: "Avalia o passageiro",
      description: "Dados e histórico visíveis"
    },
    {
      icon: Shield,
      title: "Dirige com suporte",
      description: "Tecnologia ativa e emergência"
    },
    {
      icon: ThumbsUp,
      title: "Finaliza em segurança",
      description: "Corrida monitorada"
    },
    {
      icon: HeartHandshake,
      title: "Conta com suporte",
      description: "Atendimento pós-corrida"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#163656] mb-6">
            Jornada do Motorista Protegido
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sua segurança garantida em cada etapa da corrida
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-16 left-0 right-0 h-1 bg-[#F9B824] z-0"></div>
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#F9B824] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="text-[#163656]" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#163656] mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center bg-gray-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-[#F9B824] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <step.icon className="text-[#163656]" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#163656] mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverJourneyInfographic;