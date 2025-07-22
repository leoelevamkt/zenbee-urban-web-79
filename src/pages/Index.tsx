import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  Clock, 
  MapPin,
  TrendingUp,
  Shield,
  Users,
  Star,
  Smartphone,
  CreditCard,
  BarChart3,
  Building2,
  Handshake,
  Globe
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

// Imports das imagens
import driverEarnings from "../assets/driver-earnings.jpg";
import appPresentation from "../assets/app-presentation.jpg";
import businessPartners from "../assets/business-partners.jpg";
import driverPartner from "../assets/driver-partner.jpg";
import urbanMobilityBanner from "../assets/urban-mobility-banner.jpg";
import blogEnergyBill from "../assets/blog-energy-bill.jpg";
import blogSchoolBudget from "../assets/blog-school-budget.jpg";
import blogCarCoolant from "../assets/blog-car-coolant.jpg";
import blogTriangleWarning from "../assets/blog-triangle-warning.jpg";

const Index = () => {
  // Counter animation hook
  const useCounter = (end: number, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start);
    
    useEffect(() => {
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }, [end, start, duration]);
    
    return count;
  };

  const earningsHighlights = [
    {
      icon: DollarSign,
      title: "Até R$ 3.500/mês",
      description: "Renda média dos nossos motoristas parceiros",
      highlight: "R$ 3.500"
    },
    {
      icon: TrendingUp,
      title: "Ganhos crescentes",
      description: "Suas corridas aumentam conforme sua avaliação",
      highlight: "+35%"
    },
    {
      icon: Clock,
      title: "Flexibilidade total",
      description: "Trabalhe quando quiser, onde quiser",
      highlight: "24/7"
    }
  ];

  const appFeatures = [
    {
      icon: Smartphone,
      title: "App Intuitivo",
      description: "Interface simples e fácil de usar"
    },
    {
      icon: CreditCard,
      title: "Pagamento Automático",
      description: "Receba seus ganhos na conta automaticamente"
    },
    {
      icon: BarChart3,
      title: "Dashboard Completo",
      description: "Acompanhe seus ganhos e desempenho em tempo real"
    },
    {
      icon: Shield,
      title: "Segurança 24h",
      description: "Suporte e monitoramento constante"
    }
  ];

  const partnerBenefits = [
    {
      icon: Building2,
      title: "Parceria Sólida",
      description: "Seja parte de uma rede confiável e em crescimento"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Faça parte de uma comunidade de motoristas de sucesso"
    },
    {
      icon: Handshake,
      title: "Suporte Total",
      description: "Equipe dedicada para te ajudar a maximizar seus ganhos"
    }
  ];

  const services = [
    {
      title: "Corridas Urbanas",
      description: "Transporte rápido e seguro na cidade",
      icon: MapPin
    },
    {
      title: "Viagens Longas",
      description: "Conecte cidades com conforto",
      icon: Globe
    },
    {
      title: "Delivery Express",
      description: "Entregue produtos com agilidade",
      icon: Clock
    }
  ];

  // Stats with counters
  const statsData = [
    { number: 50000, label: "motoristas ativos", suffix: "k+" },
    { number: 1000000, label: "corridas realizadas", suffix: "M+" },
    { number: 4.9, label: "avaliação média", icon: Star, isDecimal: true },
    { number: 150, label: "cidades atendidas", suffix: "+" }
  ];

  const StatsCounter = ({ stat }: { stat: any }) => {
    const count = useCounter(stat.number, 0, 2000);
    
    const formatNumber = () => {
      if (stat.isDecimal) {
        return (4.9).toFixed(1);
      }
      
      if (stat.suffix === "k+") {
        return `${Math.floor(count / 1000)}k+`;
      }
      
      if (stat.suffix === "M+") {
        return `${Math.floor(count / 1000000)}M+`;
      }
      
      return `${count}${stat.suffix || ""}`;
    };

    return (
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-black mb-2 flex items-center justify-center gap-2">
          {formatNumber()}
          {stat.icon && <stat.icon className="w-8 h-8 text-black" />}
        </div>
        <p className="text-black/80 font-medium">{stat.label}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Foco nos Ganhos */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-background text-foreground py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${driverEarnings})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Ganhe até <span className="text-[#FAC31E]">R$ 3.500/mês</span> dirigindo com a Zenbee
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Seja seu próprio chefe. Trabalhe quando quiser. Ganhe o que merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#FAC31E] hover:bg-[#E5B01A] text-black font-semibold px-8 py-4 text-lg">
                Comece a Ganhar Agora
              </Button>
              <Button variant="outline" size="lg" className="border-white text-black bg-white hover:bg-gray-100 px-8 py-4 text-lg" style={{ textTransform: 'none' }}>
                Ver quanto posso ganhar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Incentivos para Motoristas Parceiros */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-[32px] font-bold text-[#111111] mb-8 leading-tight">
            Incentivos para motoristas<br />parceiros
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Coluna 1 */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#F9B824]">
                Mais certeza nos ganhos
              </h3>
              <p className="text-[15px] text-[#111111] leading-relaxed">
                O valor que você vê na tela ao receber uma corrida agora é exatamente o que você vai receber ao final, sem variações.
              </p>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#F9B824]">
                Proteção anticalote
              </h3>
              <p className="text-[15px] text-[#111111] leading-relaxed">
                Para evitar prejuízos na sua rotina, a Zenbee paga a você o valor da corrida caso o passageiro não faça o pagamento. Reembolso sujeito a análise. Limitado a R$50,00.
              </p>
            </div>

            {/* Coluna 3 */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#F9B824]">
                Taxa de cancelamento
              </h3>
              <p className="text-[15px] text-[#111111] leading-relaxed">
                Receba 100% da taxa com o valor integral no saldo da sua carteira. A taxa de cancelamento é proporcional ao tempo e distância que você percorre.
              </p>
            </div>

            {/* Coluna 4 */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#F9B824]">
                Tarifa base dinâmica
              </h3>
              <p className="text-[15px] text-[#111111] leading-relaxed">
                O valor da tarifa base poderá mudar de acordo com a distância entre o motorista e o ponto de embarque do passageiro. Ou seja, quanto maior a distância até o embarque, maior a tarifa base. Esse valor está disponível no cartão de aceitação, ao receber o chamado, e também no recibo, ao final das corridas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ganhos Section */}
      <section className="py-20 bg-[#FAC31E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Seus Ganhos Reais com a Zenbee
            </h2>
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Veja como nossos motoristas estão transformando suas vidas financeiras
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {earningsHighlights.map((earning, index) => {
              const Icon = earning.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#FAC31E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-[#FAC31E]" />
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">{earning.highlight}</div>
                    <h3 className="text-xl font-semibold mb-3 text-black">{earning.title}</h3>
                    <p className="text-gray-600">{earning.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Presentation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  App Feito Para <span className="text-primary">Você Ganhar Mais</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Nossa tecnologia trabalha para maximizar seus ganhos e facilitar seu dia a dia
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {appFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Baixar App Grátis
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={appPresentation} 
                alt="App Zenbee para motoristas" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#FAC31E]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={businessPartners} 
                alt="Parceiros Zenbee" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Seja Nosso Parceiro
                </h2>
                <p className="text-xl text-black/80 mb-8">
                  Junte-se a milhares de motoristas que já escolheram a Zenbee para crescer
                </p>
              </div>
              
              <div className="space-y-6">
                {partnerBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-2">{benefit.title}</h3>
                        <p className="text-black/70">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button size="lg" className="bg-black hover:bg-black/90 text-white">
                Quero Ser Parceiro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serviços Que <span className="text-primary">Geram Mais Renda</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diversifique seus ganhos com nossos serviços premium
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FAC31E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Números que comprovam nosso sucesso
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <StatsCounter key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Seja um parceiro ZenBee Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Título e Descrição */}
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[36px] sm:text-[26px] font-bold text-[#163656] mb-4">
              Seja um parceiro ZenBee
            </h2>
            <p className="text-lg text-[#163656]/80 max-w-3xl mx-auto">
              Ajude a transformar a mobilidade em sua cidade ou em todo o Brasil com um modelo de negócio lucrativo e validado.
            </p>
          </div>

          {/* Grid de Parceria */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Líder de Unidade */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#F9B824] flex flex-col min-h-[400px]">
              <h3 className="text-2xl font-bold text-[#163656] mb-4">
                Líder de Unidade
              </h3>
              <p className="text-[#163656]/80 mb-6 leading-relaxed">
                Seja gestor da operação ZenBee na sua cidade. Tenha autonomia para cadastrar motoristas, promover a marca e lucrar com cada corrida realizada na sua região.
              </p>
              
              {/* Benefícios */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#F9B824] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#163656]">Renda Recorrente</span>
                    <span className="text-[#163656]/80"> – Ganhos proporcionais ao volume de corridas locais.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#F9B824] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#163656]">Autonomia Local</span>
                    <span className="text-[#163656]/80"> – Você define estratégias e expande sua base.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#F9B824] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#163656]">Suporte Completo</span>
                    <span className="text-[#163656]/80"> – Marketing, tecnologia e treinamento incluídos.</span>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-[#F9B824] hover:bg-[#E5B01A] text-[#163656] font-semibold rounded-3xl"
                asChild
              >
                <a href="/socios/lider-de-unidade">Quero ser um Líder de Unidade</a>
              </Button>
            </div>

            {/* Sócio Conselheiro */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#F9B824] flex flex-col min-h-[400px]">
              <h3 className="text-2xl font-bold text-[#163656] mb-4">
                Sócio Conselheiro
              </h3>
              <p className="text-[#163656]/80 mb-6 leading-relaxed">
                Invista estrategicamente no crescimento da ZenBee e participe das decisões de expansão com retorno financeiro mensal garantido e gestão centralizada pela matriz.
              </p>
              
              {/* Benefícios */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#F9B824] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#163656]">Decisões Estratégicas</span>
                    <span className="text-[#163656]/80"> – Participação no Conselho da ZenBee.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-[#F9B824] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#163656]">Rentabilidade com Baixo Esforço</span>
                    <span className="text-[#163656]/80"> – Gestão feita pela matriz.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#F9B824] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#163656]">Mercado em Crescimento</span>
                    <span className="text-[#163656]/80"> – Setor com alta demanda em dezenas de cidades.</span>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-[#F9B824] hover:bg-[#E5B01A] text-[#163656] font-semibold rounded-3xl"
                asChild
              >
                <a href="/socios/conselheiro">Quero ser um Sócio Conselheiro</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urbanMobilityBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto Para Transformar Sua Renda?
            </h2>
            <p className="text-xl text-white/90">
              Junte-se a milhares de motoristas que já estão ganhando mais com a Zenbee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FAC31E] hover:bg-[#E5B01A] text-black font-semibold px-8 py-4 text-lg">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Título Principal */}
          <h2 className="text-[48px] md:text-[48px] sm:text-[32px] font-bold text-[#163656] mb-12 leading-tight">
            Veja nossas últimas{" "}
            <span className="bg-[#F9B824] px-2 py-1 rounded-b-[4px]">postagens</span>
          </h2>
          
          {/* Grid de Cards - Apenas posts de Motorista */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Card 1 */}
            <a 
              href="/blog/liquido-de-arrefecimento"
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5"
            >
              <div className="mb-4">
                <img 
                  src={blogCarCoolant}
                  alt="Líquido de arrefecimento do motor"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-[#F76C1B] bg-[#F76C1B]/10 px-3 py-1 rounded-full">
                  Motorista
                </span>
                <h3 className="text-lg font-bold text-[#163656] leading-tight line-clamp-2">
                  Líquido de arrefecimento do motor: o que é e quando trocar
                </h3>
                <p className="text-sm text-[#163656]/70">
                  16/07/2025
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a 
              href="/blog/triangulo-de-sinalizacao"
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5"
            >
              <div className="mb-4">
                <img 
                  src={blogTriangleWarning}
                  alt="Triângulo de sinalização"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-[#F76C1B] bg-[#F76C1B]/10 px-3 py-1 rounded-full">
                  Motorista
                </span>
                <h3 className="text-lg font-bold text-[#163656] leading-tight line-clamp-2">
                  Triângulo de sinalização: como e quando deve ser usado?
                </h3>
                <p className="text-sm text-[#163656]/70">
                  16/07/2025
                </p>
              </div>
            </a>
          </div>

          {/* Botão Acesse o blog */}
          <div className="text-center">
            <a 
              href="/blog"
              className="inline-block bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-semibold px-8 py-[14px] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Acesse o blog
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;