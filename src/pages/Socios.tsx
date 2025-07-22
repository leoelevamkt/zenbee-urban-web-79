import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Award, 
  BarChart3,
  Handshake,
  Target,
  Globe,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  ArrowRight,
  Building,
  TrendingDown,
  Briefcase,
  Star,
  Shield,
  Zap,
  ChevronDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "@/hooks/use-toast";
import urbanHeroBackground from "@/assets/urban-hero-background.jpg";

const Socios = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    tipoSocio: "",
    motivacao: ""
  });

  const globalBenefits = [
    {
      icon: TrendingUp,
      title: "Modelo escalável e de retorno rápido",
      description: "Plataforma tecnológica robusta que permite crescimento exponencial com retorno comprovado"
    },
    {
      icon: Globe,
      title: "Crescimento nacional com foco em cidades médias",
      description: "Estratégia de expansão focada em mercados com menor concorrência e alto potencial"
    },
    {
      icon: Award,
      title: "Equipe experiente em operação, tecnologia e marketing",
      description: "Time com mais de 10 anos de experiência no setor de mobilidade urbana"
    }
  ];

  const liderBenefits = [
    {
      icon: DollarSign,
      title: "Renda recorrente e crescente mensalmente"
    },
    {
      icon: Target,
      title: "Autonomia para desenvolver sua cidade"
    },
    {
      icon: Shield,
      title: "Suporte completo em marketing, tecnologia e atendimento"
    },
    {
      icon: Briefcase,
      title: "Kit de Implantação incluso no investimento inicial"
    }
  ];

  const conselheiroBenefits = [
    {
      icon: TrendingUp,
      title: "ROI projetado em 4 a 6 meses"
    },
    {
      icon: Users,
      title: "Gestão centralizada pela ZenBee"
    },
    {
      icon: Building,
      title: "Participação em decisões estratégicas"
    },
    {
      icon: Star,
      title: "Setor em crescimento acelerado no Brasil interiorano"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em até 24 horas.",
    });
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      estado: "",
      cidade: "",
      tipoSocio: "",
      motivacao: ""
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-32 overflow-hidden"
        style={{
          backgroundImage: `url(${urbanHeroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Invista na mobilidade do futuro com a ZenBee
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Torne-se sócio de um modelo de negócio validado, escalável e em plena expansão por todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('lider-unidade')}
                className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-semibold rounded-full px-8 py-4 text-lg"
              >
                Quero ser Líder de Unidade
              </Button>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('socio-conselheiro')}
                className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-semibold rounded-full px-8 py-4 text-lg"
              >
                Quero ser Sócio Conselheiro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#163656] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Por que ser sócio da ZenBee?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              A ZenBee é uma plataforma de mobilidade urbana com crescimento validado e projeções concretas de retorno sobre investimento. Nosso modelo de expansão contempla dois tipos de participação: sócios operadores locais (Líderes de Unidade) e investidores estratégicos (Sócios Conselheiros).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {globalBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#F9B824]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-[#F9B824]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#163656] mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Líder de Unidade */}
      <section id="lider-unidade" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden border-t-4 border-t-[#F9B824]">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#163656] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Líder de Unidade ZenBee
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    Seja o responsável exclusivo pela operação da ZenBee na sua cidade. Com total suporte da matriz, você cadastra motoristas, define tarifas e impulsiona a base de usuários locais — lucrando sobre todas as corridas realizadas na sua região.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {liderBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#F9B824]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="text-[#F9B824]" size={24} />
                      </div>
                      <p className="text-lg text-gray-700 font-medium">{benefit.title}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-bold rounded-full px-12 py-4 text-lg"
                  >
                    Quero ser um Líder de Unidade
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sócio Conselheiro */}
      <section id="socio-conselheiro" className="py-20 bg-[#163656]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Sócio Conselheiro ZenBee
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Invista de forma estratégica na ZenBee, com retorno mensal proporcional ao seu aporte e participação direta nas decisões do Conselho de Expansão. A matriz cuida da operação — você acompanha os resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {conselheiroBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F9B824]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-[#F9B824]" size={24} />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit.title}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-bold rounded-full px-12 py-4 text-lg"
              >
                Quero ser um Sócio Conselheiro
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Comparativa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#163656] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Compare as Modalidades
              </h2>
              <p className="text-xl text-gray-600">
                Encontre a parceria ideal para seu perfil e objetivos
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#163656] text-white">
                    <th className="p-6 text-left font-bold text-lg">Aspecto</th>
                    <th className="p-6 text-center font-bold text-lg">Líder de Unidade</th>
                    <th className="p-6 text-center font-bold text-lg">Sócio Conselheiro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-6 font-semibold text-gray-700">Perfil</td>
                    <td className="p-6 text-center">Operacional local</td>
                    <td className="p-6 text-center">Investidor estratégico</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">Ganhos</td>
                    <td className="p-6 text-center">% por corrida</td>
                    <td className="p-6 text-center">Lucros proporcionais</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-6 font-semibold text-gray-700">Gestão</td>
                    <td className="p-6 text-center">Local, com suporte</td>
                    <td className="p-6 text-center">Centralizada pela matriz</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">Participação</td>
                    <td className="p-6 text-center">Operação da cidade</td>
                    <td className="p-6 text-center">Conselho de expansão</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-700">Requisitos</td>
                    <td className="p-6 text-center">Envolvimento ativo</td>
                    <td className="p-6 text-center">Aporte financeiro</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#163656] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Interessado? Envie sua solicitação
              </h2>
              <p className="text-xl text-gray-600">
                Preencha os dados abaixo e nossa equipe entrará em contato em até 24 horas
              </p>
            </div>

            <Card className="border-0 shadow-xl rounded-2xl">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="nome" className="text-gray-700 font-semibold">Nome Completo</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#F9B824] focus:ring-[#F9B824]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-gray-700 font-semibold">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#F9B824] focus:ring-[#F9B824]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="telefone" className="text-gray-700 font-semibold">Telefone (WhatsApp)</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#F9B824] focus:ring-[#F9B824]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="estado" className="text-gray-700 font-semibold">Estado</Label>
                      <Input
                        id="estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleInputChange}
                        required
                        placeholder="SP"
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#F9B824] focus:ring-[#F9B824]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="cidade" className="text-gray-700 font-semibold">Cidade</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        required
                        placeholder="São Paulo"
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#F9B824] focus:ring-[#F9B824]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gray-700 font-semibold">Modalidade de Interesse</Label>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id="lider" 
                          checked={formData.tipoSocio === "lider"}
                          onCheckedChange={(checked) => 
                            handleSelectChange("tipoSocio", checked ? "lider" : "")
                          }
                          className="w-5 h-5 border-2 border-gray-300 data-[state=checked]:bg-[#F9B824] data-[state=checked]:border-[#F9B824]"
                        />
                        <Label htmlFor="lider" className="text-gray-700">Líder de Unidade</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox 
                          id="conselheiro" 
                          checked={formData.tipoSocio === "conselheiro"}
                          onCheckedChange={(checked) => 
                            handleSelectChange("tipoSocio", checked ? "conselheiro" : "")
                          }
                          className="w-5 h-5 border-2 border-gray-300 data-[state=checked]:bg-[#F9B824] data-[state=checked]:border-[#F9B824]"
                        />
                        <Label htmlFor="conselheiro" className="text-gray-700">Sócio Conselheiro</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="motivacao" className="text-gray-700 font-semibold">Sua motivação para fazer parte da ZenBee</Label>
                    <Textarea
                      id="motivacao"
                      name="motivacao"
                      value={formData.motivacao}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre sua experiência, objetivos e por que deseja se tornar sócio da ZenBee..."
                      rows={5}
                      className="rounded-xl border-2 border-gray-200 focus:border-[#F9B824] focus:ring-[#F9B824] resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-[#F9B824] hover:bg-[#F9B824]/90 text-[#163656] font-bold rounded-full px-12 py-4 text-lg"
                    >
                      <Send className="mr-2" size={20} />
                      Enviar Solicitação
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Socios;