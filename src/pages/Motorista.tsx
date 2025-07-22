import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  DollarSign, 
  Clock, 
  Shield, 
  Award, 
  Car, 
  CreditCard,
  Headphones,
  Users,
  Check,
  Star,
  FileText,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ZenbeeAdvantagesSection from "@/components/ZenbeeAdvantagesSection";
import driverPartner from "@/assets/driver-partner.jpg";
import mobilityApp from "@/assets/mobile-app-interface.jpg";
import appRegistration from "@/assets/app-registration-new.jpg";

const Motorista = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Ganhos Maiores",
      description: "Taxas competitivas e repasse rápido dos seus rendimentos",
      features: ["Taxas a partir de 15%", "Repasse em até 24h", "Bônus por performance"]
    },
    {
      icon: Clock,
      title: "Flexibilidade Total", 
      description: "Seu horário, suas regras",
      features: ["Trabalhe quando quiser", "Defina suas áreas", "Pausa a qualquer momento"]
    },
    {
      icon: Shield,
      title: "Segurança para Dirigir",
      description: "Proteção completa durante as corridas",
      features: ["Checagem de passageiros", "Suporte 24h", "Seguro durante viagens"]
    },
    {
      icon: Award,
      title: "Incentivos e Bônus",
      description: "Ganhe mais por sua dedicação",
      features: ["Bônus por avaliação", "Programa de fidelidade", "Metas semanais"]
    }
  ];

  const requirements = [
    "CNH categoria B válida com EAR",
    "Veículo modelo 2012 ou superior",
    "Documentação do veículo em dia",
    "Certidão criminal negativa",
    "Smartphone Android 6.0+ ou iOS 12+",
    "Idade entre 21 e 65 anos"
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      rating: 5,
      text: "Trabalho com a Zenbee há 6 meses e já consegui aumentar minha renda em 40%. O suporte é excelente!"
    },
    {
      name: "Maria Santos", 
      rating: 5,
      text: "A flexibilidade de horários me permite conciliar com meus outros compromissos. Recomendo!"
    },
    {
      name: "João Oliveira",
      rating: 5,
      text: "As taxas são justas e o repasse é rápido. Melhor plataforma que já usei."
    }
  ];

  const faqs = [
    {
      question: "Como funciona o repasse?",
      answer: "O repasse é feito automaticamente em até 24 horas após o término da corrida, direto na sua conta bancária."
    },
    {
      question: "Quais são as taxas?",
      answer: "Nossas taxas começam em 15% e podem ser menores conforme sua performance e avaliação dos passageiros."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Temos uma central de atendimento 24/7 dedicada exclusivamente aos motoristas parceiros, com chat e telefone."
    },
    {
      question: "Posso trabalhar em outras plataformas?",
      answer: "Sim! Você tem total liberdade para trabalhar em quantas plataformas desejar."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Seja um <span className="highlight">motorista parceiro</span> Zenbee e conquiste seus <span className="highlight">objetivos</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ganhe mais, tenha flexibilidade total e conte com nosso suporte dedicado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Car className="mr-2" size={20} />
                  Cadastre-se Agora
                </Button>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={driverPartner}
                alt="Motorista parceiro Zenbee"
                className="rounded-lg shadow-lg w-full scroll-reveal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção de Vantagens Zenbee - já atualizada com grid 2x2 */}
      <ZenbeeAdvantagesSection />

      {/* Vantagens */}
      <section className="py-20" style={{ backgroundColor: '#FAC31E' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vantagens de Dirigir com a Zenbee
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para maximizar seus ganhos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <advantage.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{advantage.description}</p>
                  <ul className="space-y-1">
                    {advantage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs">
                        <Check className="text-primary mr-2" size={12} />
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

      {/* Requisitos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Requisitos para se cadastrar
              </h2>
              <p className="text-xl text-muted-foreground">
                Veja o que você precisa para começar a dirigir conosco
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center p-4 bg-muted rounded-lg">
                  <Check className="text-primary mr-3" size={20} />
                  <span>{requirement}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Verificar Documentos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20" style={{ backgroundColor: '#FAC31E' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que dizem nossos parceiros
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de quem já faz parte da família Zenbee
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Tire suas dúvidas sobre como ser um motorista Zenbee
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/lovable-uploads/bf8ff34a-9281-4c33-a387-f437c0b1199a.png" 
                        alt="Zenbee" 
                        className="w-6 h-6"
                      />
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-6">
                    <p className="text-muted-foreground ml-9">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


      {/* Banner Promocional - Fundo alterado para cadastro de app */}
      <section className="relative py-32 overflow-hidden banner-advanced">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${appRegistration})` }}
        />
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="highlight">Cadastro Rápido</span> em 5 Minutos
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto scroll-reveal">
            Documentação online, aprovação em até 24h e <span className="highlight">suporte completo</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Car className="mr-2" size={20} />
              Começar Cadastro
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              <FileText className="mr-2" size={20} />
              Documentos Necessários
            </Button>
          </div>
        </div>
      </section>

      {/* Seção Ganhos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Potencial de <span className="highlight">Ganhos</span> Reais
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja quanto nossos motoristas ganham por semana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">R$ 800-1.200</h3>
                <p className="text-lg font-semibold mb-3">Meio Período</p>
                <p className="text-muted-foreground text-sm">25-35 horas/semana</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" size={14} />
                    Flexibilidade total
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" size={14} />
                    Renda extra
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center border-2 border-primary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">R$ 1.500-2.200</h3>
                <p className="text-lg font-semibold mb-3">Tempo Integral</p>
                <p className="text-muted-foreground text-sm">40-50 horas/semana</p>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mt-2 mb-4">
                  MAIS POPULAR
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" size={14} />
                    Renda principal
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" size={14} />
                    Bônus semanais
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">R$ 2.500+</h3>
                <p className="text-lg font-semibold mb-3">Dedicação Máxima</p>
                <p className="text-muted-foreground text-sm">60+ horas/semana</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" size={14} />
                    Top performers
                  </li>
                  <li className="flex items-center">
                    <Check className="text-primary mr-2" size={14} />
                    Bônus especiais
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              * Valores baseados na média de ganhos dos nossos motoristas em São Paulo
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <DollarSign className="mr-2" size={20} />
              Calcular Meus Ganhos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final - Botão alterado para texto amarelo */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para <span className="highlight">acelerar</span> seus ganhos?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Cadastre-se agora e comece a dirigir com a Zenbee ainda hoje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Car className="mr-2" size={20} />
              Quero ser Motorista
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white hover:bg-white/90" style={{ color: '#FAC31E' }}>
              <Phone className="mr-2" size={20} />
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Motorista;
