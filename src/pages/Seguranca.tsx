import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  CheckCircle, 
  Eye, 
  Phone, 
  MapPin, 
  AlertTriangle,
  Camera,
  Mic,
  Users,
  Lock,
  Headphones,
  Zap,
  Clock,
  Award,
  Star
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import securityAbstract from "@/assets/security-abstract.jpg";
import safetyFeatures from "@/assets/safety-features.jpg";
import smartCityBanner from "@/assets/smart-city-banner.jpg";

const Seguranca = () => {
  const passengerSecurity = [
    {
      icon: CheckCircle,
      title: "Checagem de Motoristas",
      description: "Verificação rigorosa de documentos, antecedentes criminais e habilitação de todos os motoristas."
    },
    {
      icon: MapPin,
      title: "Compartilhamento de Rota",
      description: "Compartilhe sua viagem em tempo real com familiares e amigos para maior tranquilidade."
    },
    {
      icon: AlertTriangle,
      title: "Botão de Emergência",
      description: "Acesso rápido a ajuda em situações de emergência, conectando diretamente com nossa central."
    },
    {
      icon: Headphones,
      title: "Central de Segurança 24h",
      description: "Suporte especializado em segurança disponível 24 horas por dia, 7 dias por semana."
    },
    {
      icon: Shield,
      title: "Seguro da Viagem",
      description: "Cobertura de seguro durante toda a viagem para passageiros e motoristas."
    }
  ];

  const driverSecurity = [
    {
      icon: Users,
      title: "Checagem de Passageiros",
      description: "Sistema de verificação de usuários para garantir a segurança dos motoristas."
    },
    {
      icon: Camera,
      title: "Gravação de Áudio e Vídeo",
      description: "Opção de gravação durante a viagem para proteção de ambas as partes."
    },
    {
      icon: MapPin,
      title: "Regiões de Risco",
      description: "Alertas sobre áreas com histórico de incidentes para orientar os motoristas."
    },
    {
      icon: Phone,
      title: "Suporte Dedicado",
      description: "Canal exclusivo de atendimento para motoristas em situações de emergência."
    }
  ];

  const technologyFeatures = [
    {
      icon: Eye,
      title: "Monitoramento Inteligente",
      description: "Sistema de IA que monitora padrões suspeitos e comportamentos anômalos em tempo real."
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Algoritmos otimizados para detectar e responder a emergências em segundos."
    },
    {
      icon: Lock,
      title: "Criptografia Avançada",
      description: "Todos os dados são protegidos com criptografia de ponta a ponta."
    },
    {
      icon: Clock,
      title: "Prevenção Proativa",
      description: "Análise preditiva para identificar e prevenir situações de risco."
    }
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
                Viaje e dirija com a <span className="highlight">máxima tranquilidade</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Sua segurança é nossa prioridade. Desenvolvemos as mais avançadas tecnologias e protocolos para garantir viagens seguras para todos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Shield className="mr-2" size={20} />
                  Conheça nossa Segurança
                </Button>
                <Button size="lg" variant="outline">
                  Central de Emergência
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={securityAbstract}
                alt="Segurança e proteção"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Segurança para Passageiros */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Segurança para Passageiros
            </h2>
            <p className="text-xl text-muted-foreground">
              Proteção completa em cada etapa da sua viagem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {passengerSecurity.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança para Motoristas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Segurança para Motoristas
            </h2>
            <p className="text-xl text-muted-foreground">
              Proteção e suporte dedicado para nossos parceiros
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {driverSecurity.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Tecnologia */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa Tecnologia de Segurança
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Inovação e inteligência artificial a serviço da sua proteção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-secondary-foreground/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas de Segurança */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Números que Comprovam nossa Segurança
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados que demonstram nosso comprometimento
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-muted-foreground">Viagens sem incidentes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt;30s</div>
              <p className="text-muted-foreground">Tempo médio de resposta</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Central de segurança</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Motoristas verificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Tecnologia Avançada */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={safetyFeatures} 
                alt="Tecnologia de segurança" 
                className="w-full h-96 object-cover shape-star scroll-reveal"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full">
                <Shield size={24} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="highlight">IA Avançada</span> Protegendo Você
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nossa inteligência artificial monitora cada viagem em tempo real, detectando padrões suspeitos e acionando protocolos de segurança automaticamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <Eye className="text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold">Detecção Comportamental</h3>
                    <p className="text-sm text-muted-foreground">IA que identifica situações anômalas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <Zap className="text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold">Resposta Instantânea</h3>
                    <p className="text-sm text-muted-foreground">Acionamento automático em emergências</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <Lock className="text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold">Criptografia Total</h3>
                    <p className="text-sm text-muted-foreground">Dados protegidos end-to-end</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Tecnologia */}
      <section className="relative py-32 overflow-hidden banner-advanced">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${smartCityBanner})` }}
        />
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bounce-in">
            <span className="highlight">Segurança</span> do Futuro, Hoje
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto scroll-reveal">
            Tecnologia de ponta combinada com protocolos rigorosos para sua <span className="highlight">máxima proteção</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Shield className="mr-2" size={20} />
              Conheça Nossos Protocolos
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              <Eye className="mr-2" size={20} />
              Central de Monitoramento
            </Button>
          </div>
        </div>
      </section>

      {/* Seção Certificações */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="highlight">Certificações</span> e Reconhecimentos
            </h2>
            <p className="text-xl text-muted-foreground">
              Padrões internacionais de segurança e qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">ISO 27001</h3>
                <p className="text-sm text-muted-foreground">Segurança da Informação</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">LGPD</h3>
                <p className="text-sm text-muted-foreground">Proteção de Dados</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">PCI DSS</h3>
                <p className="text-sm text-muted-foreground">Segurança de Pagamentos</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">SOC 2</h3>
                <p className="text-sm text-muted-foreground">Auditoria de Segurança</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergência */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Em caso de emergência
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Nossa central de segurança está sempre pronta para ajudar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2" size={20} />
                Central: 0800-ZENBEE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <AlertTriangle className="mr-2" size={20} />
                Botão de Emergência
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Seguranca;