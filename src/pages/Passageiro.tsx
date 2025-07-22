import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  CreditCard, 
  Star, 
  Shield, 
  MapPin, 
  Clock,
  DollarSign,
  Users,
  Check
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import passengerApp from "@/assets/passenger-app.jpg";
import mobileMockup from "@/assets/mobile-mockup.jpg";
import diverseUsers from "@/assets/diverse-users.jpg";
import ecoTransport from "@/assets/eco-transport.jpg";

const Passageiro = () => {
  const categories = [
    {
      title: "Zenbee Pop",
      description: "A opção mais econômica para o dia a dia",
      icon: DollarSign,
      features: ["Preço acessível", "Carros compactos", "Ideal para trajetos curtos"]
    },
    {
      title: "Zenbee Comfort",
      description: "Mais conforto para viagens especiais",
      icon: Star,
      features: ["Carros sedãs", "Ar condicionado", "Mais espaço"]
    },
    {
      title: "Zenbee Corp",
      description: "Solução completa para empresas",
      icon: Users,
      features: ["Gestão centralizada", "Relatórios detalhados", "Suporte dedicado"]
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Peça sua viagem",
      description: "Abra o app, defina destino e escolha a categoria"
    },
    {
      number: "2", 
      title: "Viaje com segurança",
      description: "Acompanhe o motorista em tempo real e viaje tranquilo"
    },
    {
      number: "3",
      title: "Pague como preferir",
      description: "Cartão, PIX, dinheiro ou carteira digital"
    }
  ];

  const appFeatures = [
    "Localização em tempo real",
    "Histórico de viagens",
    "Avaliação de motoristas",
    "Suporte 24/7",
    "Múltiplas formas de pagamento",
    "Compartilhamento de viagem"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Seu destino a <span className="highlight">um toque de distância</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Peça um Zenbee e chegue onde quiser com <span className="highlight">segurança, conforto</span> e preço justo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Smartphone className="mr-2" size={20} />
                  Baixar App
                </Button>
                <Button size="lg" variant="outline">
                  Ver Preços
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={passengerApp}
                alt="Pessoa usando o app Zenbee"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Categorias */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossas <span className="highlight">Categorias</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha a opção <span className="highlight">ideal</span> para cada momento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <category.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{category.title}</h3>
                  <p className="text-muted-foreground text-center mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="text-primary mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Simples, rápido e seguro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tudo que você precisa no seu celular
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                O app Zenbee foi desenvolvido pensando na sua comodidade e segurança.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-primary mr-2" size={16} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <Smartphone className="mx-auto mb-4 text-primary" size={80} />
                <h3 className="text-xl font-semibold mb-2">Mockup do App</h3>
                <p className="text-muted-foreground">
                  Interface intuitiva com todas as funcionalidades principais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Mockup Mobile */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="highlight">Interface</span> Pensada para Você
            </h2>
            <p className="text-xl text-muted-foreground">
              Design intuitivo e funcionalidades inteligentes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center p-6 bg-muted rounded-lg">
                <MapPin className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="text-lg font-semibold mb-2">GPS Inteligente</h3>
                <p className="text-sm text-muted-foreground">Localização precisa e rotas otimizadas</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <CreditCard className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="text-lg font-semibold mb-2">Pagamento Fácil</h3>
                <p className="text-sm text-muted-foreground">PIX, cartão ou dinheiro</p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img 
                src={mobileMockup} 
                alt="Mockup do app Zenbee" 
                className="w-64 h-80 object-cover shape-diamond scroll-reveal"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-4">
                  <Smartphone className="text-primary" size={32} />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center p-6 bg-muted rounded-lg">
                <Star className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="text-lg font-semibold mb-2">Avaliações</h3>
                <p className="text-sm text-muted-foreground">Sistema de feedback transparente</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <Clock className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="text-lg font-semibold mb-2">Tempo Real</h3>
                <p className="text-sm text-muted-foreground">Acompanhe sua viagem ao vivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="relative py-32 overflow-hidden banner-advanced">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ecoTransport})` }}
        />
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bounce-in">
            <span className="highlight">Primeira Viagem</span> com 50% OFF
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto scroll-reveal">
            Use o código <span className="highlight">BEMVINDO50</span> e economize na sua primeira corrida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Smartphone className="mr-2" size={20} />
              Baixar e Usar Código
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              <DollarSign className="mr-2" size={20} />
              Ver Preços
            </Button>
          </div>
        </div>
      </section>

      {/* Seção Testemunhos */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos <span className="highlight">passageiros</span> dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Experiências reais de quem usa a Zenbee diariamente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"Uso o Zenbee há 2 anos e nunca tive problemas. Motoristas educados e app muito fácil de usar."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"Preços justos e sempre encontro carro rapidinho. Recomendo para todo mundo!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">João Santos</p>
                    <p className="text-sm text-muted-foreground">Rio de Janeiro - RJ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"Me sinto muito segura usando o app. O compartilhamento de viagem dá muita tranquilidade."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Ana Costa</p>
                    <p className="text-sm text-muted-foreground">Belo Horizonte - MG</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative max-w-lg mx-auto">
            <img 
              src={diverseUsers} 
              alt="Passageiros satisfeitos" 
              className="w-full h-64 object-cover shape-octagon"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center">
              <p className="text-sm font-semibold">+95% Satisfação</p>
              <p className="text-xs text-muted-foreground">Baseado em 500k+ avaliações</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para sua próxima viagem?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Baixe o app Zenbee e comece a viajar com <span className="highlight">tranquilidade</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Smartphone className="mr-2" size={20} />
              Download iOS
            </Button>
            <Button size="lg" variant="secondary">
              <Smartphone className="mr-2" size={20} />
              Download Android
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Passageiro;