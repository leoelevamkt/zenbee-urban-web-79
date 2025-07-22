
import { Button } from "@/components/ui/button";
import driverPartner from "@/assets/driver-partner.jpg";

const ZenbeeAdvantagesSection = () => {
  const advantages = [
    {
      title: "Mais certeza nos ganhos",
      description: "O valor que você vê na tela ao receber uma corrida agora é exatamente* o que você vai receber ao final, sem variações."
    },
    {
      title: "Proteção anticalote",
      description: "Para evitar prejuízos na sua rotina, a Zenbee paga a você o valor da corrida caso o passageiro não faça o pagamento. Reembolso sujeito a análise. Limitado a R$50,00."
    },
    {
      title: "Taxa de cancelamento",
      description: "Receba 100% da taxa* com o valor integral no saldo da sua carteira. A taxa de cancelamento é proporcional ao tempo e distância que você percorre."
    },
    {
      title: "Tarifa base dinâmica",
      description: "O valor da tarifa base pode variar conforme a distância entre o motorista e o ponto de embarque. Esse valor está disponível no cartão de aceitação, ao receber o chamado, e também no recibo, ao final das corridas."
    }
  ];

  return (
    <section className="w-full zenbee-advantages-bg py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Orange semicircle background */}
              <div className="absolute -inset-8 zenbee-orange-bg rounded-full opacity-20"></div>
              <div className="absolute -inset-4 zenbee-orange-bg rounded-full opacity-40"></div>
              
              {/* Circular image */}
              <img
                src={driverPartner}
                alt="Motorista parceiro Zenbee"
                className="w-[108%] h-[108%] object-cover shape-circle relative z-10 scroll-reveal"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold zenbee-advantages-text leading-tight">
              Vantagens para motoristas de app parceiros Zenbee
            </h2>

            {/* Grid 2x2 para os advantages */}
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* Orange bullet */}
                  <div className="w-3 h-3 zenbee-bullet rounded-full mt-2 flex-shrink-0"></div>
                  
                  <div>
                    <h3 className="text-lg font-bold zenbee-advantages-text mb-2">
                      {advantage.title}
                    </h3>
                    <p className="zenbee-advantages-text text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZenbeeAdvantagesSection;
