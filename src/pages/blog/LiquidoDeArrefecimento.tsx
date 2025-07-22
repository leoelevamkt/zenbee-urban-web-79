import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Share2, AlertTriangle, Wrench, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogCarCoolant from "../../assets/blog-car-coolant.jpg";

const LiquidoDeArrefecimento = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#163656] to-[#1e4a6b]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </Link>
            
            <div className="text-white">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-[#F76C1B] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Motorista
                </span>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">6 min de leitura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Equipe ZenBee</span>
                  </div>
                  <span className="text-sm">16/07/2025</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Líquido de arrefecimento do motor: o que é e quando trocar
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Entenda a importância do líquido de arrefecimento para o bom funcionamento do seu veículo e aprenda quando fazer a troca para evitar problemas custosos no motor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src={blogCarCoolant}
                alt="Líquido de arrefecimento do motor"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O líquido de arrefecimento é um dos componentes mais importantes do sistema de refrigeração do seu veículo. Responsável por manter a temperatura ideal do motor, ele previne superaquecimento e garante o funcionamento adequado do automóvel. Para motoristas parceiros da ZenBee, manter o veículo em perfeitas condições é essencial para garantir segurança e rentabilidade.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">O que é o líquido de arrefecimento?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                O líquido de arrefecimento, também conhecido como fluido refrigerante, é uma solução composta por água destilada e aditivos especiais (etilenoglicol ou propilenoglicol). Esta mistura circula pelo sistema de refrigeração do motor, absorvendo o calor gerado pela combustão e dissipando-o através do radiador.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <Thermometer className="w-8 h-8 text-[#F76C1B] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Controle Térmico</h3>
                      <p className="text-sm text-gray-600">Mantém temperatura ideal do motor</p>
                    </div>
                    <div>
                      <Wrench className="w-8 h-8 text-[#F76C1B] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Proteção</h3>
                      <p className="text-sm text-gray-600">Previne corrosão e ferrugem</p>
                    </div>
                    <div>
                      <AlertTriangle className="w-8 h-8 text-[#F76C1B] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Prevenção</h3>
                      <p className="text-sm text-gray-600">Evita danos custosos ao motor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Principais funções do líquido de arrefecimento</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li><strong>Resfriamento:</strong> Absorve e dissipa o calor excessivo do motor</li>
                <li><strong>Proteção contra corrosão:</strong> Protege componentes metálicos do sistema</li>
                <li><strong>Lubrificação:</strong> Lubrifica a bomba d'água e outras peças móveis</li>
                <li><strong>Anticongelante:</strong> Previne congelamento em temperaturas baixas</li>
                <li><strong>Anti-espuma:</strong> Evita formação de bolhas que prejudicam a circulação</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Quando trocar o líquido de arrefecimento?</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold mb-4">🕒 Intervalos recomendados:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-[#163656] mb-2">Por quilometragem:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Veículos novos: 40.000 a 50.000 km</li>
                      <li>• Uso urbano intenso: 30.000 km</li>
                      <li>• Motoristas de app: 25.000 km</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#163656] mb-2">Por tempo:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Uso normal: a cada 2 anos</li>
                      <li>• Uso intenso: a cada 12-18 meses</li>
                      <li>• Climas extremos: a cada ano</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Sinais de que é hora de trocar</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#163656] mb-3">⚠️ Fique atento a estes sinais:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Líquido com coloração escura ou turva</li>
                      <li>✓ Presença de sedimentos ou impurezas</li>
                      <li>✓ Odor ácido ou desagradável</li>
                      <li>✓ Nível constantemente baixo</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Superaquecimento frequente do motor</li>
                      <li>✓ Resíduos oleosos no reservatório</li>
                      <li>✓ Corrosão visível nas mangueiras</li>
                      <li>✓ Vazamentos no sistema</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Como verificar o líquido de arrefecimento</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">IMPORTANTE - Segurança primeiro!</h3>
                    <p className="text-yellow-700">
                      Nunca verifique o líquido de arrefecimento com o motor quente. Aguarde pelo menos 30 minutos após desligar o veículo para evitar queimaduras graves.
                    </p>
                  </div>
                </div>
              </div>

              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                <li>Estacione em superfície plana e desligue o motor</li>
                <li>Aguarde o motor esfriar completamente</li>
                <li>Localize o reservatório de expansão (recipiente translúcido)</li>
                <li>Verifique o nível entre as marcas MIN e MAX</li>
                <li>Observe a cor e consistência do líquido</li>
                <li>Procure por vazamentos ou sinais de corrosão</li>
              </ol>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Dicas especiais para motoristas de aplicativo</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Como motorista parceiro, seu veículo trabalha mais intensivamente que o normal. Por isso, é fundamental:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Verificar o nível semanalmente, especialmente no verão</li>
                <li>Fazer revisões mais frequentes em oficinas especializadas</li>
                <li>Manter registro das trocas para controle de manutenção</li>
                <li>Investir em líquidos de qualidade superior</li>
                <li>Atenção redobrada em trânsito parado ou congestionamentos</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Custos e investimento</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                O custo da troca do líquido de arrefecimento varia entre R$ 50 a R$ 150, dependendo da marca e local. Esse investimento é muito inferior ao custo de reparar um motor danificado por superaquecimento, que pode chegar a milhares de reais.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Conclusão</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                O líquido de arrefecimento é fundamental para a saúde do motor do seu veículo. Para motoristas que dependem do carro para trabalhar, manter esse sistema em dia é investimento essencial. A manutenção preventiva sempre sai mais barata que reparos emergenciais, além de garantir a segurança nas viagens e a satisfação dos passageiros.
              </p>

              {/* Share Section */}
              <div className="border-t pt-8 mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#163656] mb-2">
                      Compartilhe com outros motoristas!
                    </h3>
                    <p className="text-gray-600">
                      Ajude seus colegas a manter os veículos sempre em dia.
                    </p>
                  </div>
                  <Button className="bg-[#F76C1B] hover:bg-[#E85A0A] text-white">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default LiquidoDeArrefecimento;