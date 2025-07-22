import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  CheckCircle, 
  Search, 
  Phone, 
  MapPin, 
  AlertTriangle,
  Mic,
  Users,
  MessageCircle,
  FileText,
  HeartHandshake,
  Clock,
  Star,
  Ban,
  Eye
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import driverSecurityHero from "@/assets/driver-security-hero.jpg";

const Seguranca = () => {
  const beforeRide = [
    {
      icon: Search,
      title: "Checagem de Passageiros",
      description: "Utilizamos dados e comportamentos para avaliar o perfil de quem solicita a corrida."
    },
    {
      icon: Eye,
      title: "Informações Visíveis",
      description: "Você vê o nome, nota, histórico e se o pagamento será em dinheiro ou app."
    },
    {
      icon: Ban,
      title: "Cancelamento sem prejuízo",
      description: "Se algo parecer suspeito, você pode cancelar com isenção da taxa."
    }
  ];

  const duringRide = [
    {
      icon: MapPin,
      title: "Rastreamento em tempo real",
      description: "Sua rota é monitorada e pode ser acompanhada por alguém de confiança."
    },
    {
      icon: Mic,
      title: "Gravação de Áudio",
      description: "Ative a função de gravação dentro do app para registrar a corrida (armazenado com segurança)."
    },
    {
      icon: AlertTriangle,
      title: "Botão de Emergência",
      description: "Com apenas um toque, acione rapidamente nosso suporte e serviços locais de emergência."
    }
  ];

  const afterRide = [
    {
      icon: Phone,
      title: "Central de Segurança 24h",
      description: "Atendimento exclusivo para situações urgentes com motoristas."
    },
    {
      icon: FileText,
      title: "Relato de Ocorrência",
      description: "Registre um incidente direto no app e acompanhe o atendimento."
    },
    {
      icon: HeartHandshake,
      title: "Análise e Suporte da Equipe",
      description: "Nossa equipe avalia e toma providências — com prioridade para sua segurança."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${driverSecurityHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#163656]/90 to-[#163656]/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Segurança para quem dirige com a ZenBee
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-light opacity-90">
              Recursos de proteção antes, durante e depois da viagem. Com a ZenBee, você nunca está sozinho na direção.
            </h2>
            <Button size="lg" className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-semibold">
              <Phone className="mr-2" size={20} />
              Fale com o suporte de segurança
            </Button>
          </div>
        </div>
      </section>

      {/* Antes da Corrida */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163656] mb-4">
              Antes da Corrida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Antes de aceitar uma viagem, você já conta com filtros e informações que protegem sua decisão.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeRide.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#F9B824]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-[#F9B824]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#163656]">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Durante a Corrida */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163656] mb-4">
              Durante a Corrida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologia de segurança ativa em tempo real enquanto você dirige.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {duringRide.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#F9B824]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-[#F9B824]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#163656]">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depois da Corrida */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163656] mb-4">
              Depois da Corrida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Caso algo aconteça, você tem canais rápidos e uma equipe ao seu lado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {afterRide.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#F9B824]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-[#F9B824]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#163656]">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163656] mb-4">
              Mais de 90% dos motoristas se sentem mais seguros
            </h2>
            <p className="text-xl text-muted-foreground">
              com nossos recursos de proteção
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F9B824] mb-3">99.8%</div>
              <p className="text-muted-foreground text-lg">Viagens sem incidentes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F9B824] mb-3">&lt;30s</div>
              <p className="text-muted-foreground text-lg">Tempo médio de resposta</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F9B824] mb-3">24/7</div>
              <p className="text-muted-foreground text-lg">Central de segurança</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F9B824] mb-3">100%</div>
              <p className="text-muted-foreground text-lg">Motoristas verificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#F9B824] fill-current" size={24} />
                ))}
              </div>
              <blockquote className="text-2xl italic text-muted-foreground mb-6">
                "Desde que comecei a dirigir com a ZenBee, me sinto muito mais protegido. A central de segurança realmente funciona e o suporte é rápido quando preciso."
              </blockquote>
              <cite className="text-lg font-semibold text-[#163656]">
                Carlos M., motorista parceiro há 2 anos
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso Final */}
      <section className="py-24 bg-[#163656] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Compromisso com quem faz a cidade se mover
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Na ZenBee, segurança não é um recurso — é uma prioridade. Seguimos melhorando nossas ferramentas e ouvindo os motoristas para construir um ambiente cada vez mais confiável e protegido.
            </p>
            <Button size="lg" className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-semibold text-lg px-8 py-4">
              <MessageCircle className="mr-2" size={20} />
              Precisa de ajuda? Fale com a gente
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Seguranca;