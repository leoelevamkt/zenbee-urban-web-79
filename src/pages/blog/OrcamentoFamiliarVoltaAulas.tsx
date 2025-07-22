import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Share2, Calculator, PiggyBank, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogSchoolBudget from "../../assets/blog-school-budget.jpg";

const OrcamentoFamiliarVoltaAulas = () => {
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
                <span className="bg-[#F9B824] text-[#163656] px-3 py-1 rounded-full text-sm font-medium">
                  ZenPay
                </span>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">7 min de leitura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Equipe ZenBee</span>
                  </div>
                  <span className="text-sm">18/07/2025</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Volta às aulas: como planejar um bom orçamento familiar?
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                O período de volta às aulas pode impactar significativamente o orçamento familiar. Descubra estratégias práticas para se organizar financeiramente e enfrentar essa época sem comprometer suas finanças.
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
                src={blogSchoolBudget}
                alt="Orçamento familiar volta às aulas"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A volta às aulas é um dos períodos que mais impacta o orçamento familiar brasileiro. Entre material escolar, uniformes, livros e taxas, os gastos podem facilmente sair do controle. Mas com planejamento e organização, é possível passar por essa época sem comprometer a saúde financeira da família.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Por que planejar é essencial?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                O planejamento financeiro para a volta às aulas vai muito além de apenas juntar dinheiro. Ele envolve pesquisa de preços, organização de prioridades e, principalmente, evitar o endividamento desnecessário que pode afetar todo o ano letivo.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <Calculator className="w-8 h-8 text-[#F9B824] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Planejamento</h3>
                      <p className="text-sm text-gray-600">Organize todos os gastos antecipadamente</p>
                    </div>
                    <div>
                      <PiggyBank className="w-8 h-8 text-[#F9B824] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Economia</h3>
                      <p className="text-sm text-gray-600">Reserve dinheiro durante o ano</p>
                    </div>
                    <div>
                      <BookOpen className="w-8 h-8 text-[#F9B824] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Pesquisa</h3>
                      <p className="text-sm text-gray-600">Compare preços e busque promoções</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">1. Faça uma lista completa dos gastos</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Antes de sair às compras, liste todos os itens necessários por categoria:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#163656] mb-3">📚 Material Escolar</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cadernos e blocos</li>
                      <li>• Canetas, lápis e borrachas</li>
                      <li>• Estojo e mochila</li>
                      <li>• Material específico por matéria</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#163656] mb-3">👕 Uniformes e Vestuário</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Uniformes escolares</li>
                      <li>• Calçados adequados</li>
                      <li>• Roupas para educação física</li>
                      <li>• Acessórios obrigatórios</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">2. Pesquise e compare preços</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A pesquisa de preços pode gerar economia significativa:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Visite pelo menos 3 lojas diferentes antes de decidir</li>
                <li>Use aplicativos de comparação de preços</li>
                <li>Procure por feiras de material escolar</li>
                <li>Considere compras online com frete grátis</li>
                <li>Aproveite promoções de final de janeiro e início de fevereiro</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">3. Estratégias de economia inteligente</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold mb-4">💡 Dicas práticas:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Reutilize o que ainda serve:</strong> Verifique materiais do ano anterior em bom estado</li>
                  <li><strong>Compre em atacado:</strong> Una-se a outros pais para comprar itens em maior quantidade</li>
                  <li><strong>Aproveite liquidações:</strong> Compre no final do ano anterior quando há descontos</li>
                  <li><strong>Use o dinheiro:</strong> Negocie descontos à vista em vez de parcelar</li>
                  <li><strong>Considere produtos genéricos:</strong> Nem sempre a marca mais cara é a melhor opção</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">4. Organize o calendário financeiro</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Distribua os gastos ao longo do ano para evitar o impacto concentrado:
              </p>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="bg-[#F9B824] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-semibold">1</div>
                      <strong>Dezembro</strong>
                      <p className="text-gray-600">Aproveite liquidações</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-[#F9B824] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-semibold">2</div>
                      <strong>Janeiro</strong>
                      <p className="text-gray-600">Compre materiais básicos</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-[#F9B824] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-semibold">3</div>
                      <strong>Fevereiro</strong>
                      <p className="text-gray-600">Complete a lista</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-[#F9B824] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-semibold">4</div>
                      <strong>Março</strong>
                      <p className="text-gray-600">Ajustes necessários</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">5. Envolva as crianças no processo</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ensinar educação financeira desde cedo é um investimento no futuro. Explique sobre orçamento, mostre a importância de cuidar dos materiais e envolva os filhos na pesquisa de preços. Isso desenvolve consciência financeira e responsabilidade.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Conclusão</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Planejar o orçamento para a volta às aulas é fundamental para manter a saúde financeira familiar. Com antecedência, pesquisa e estratégias inteligentes, é possível proporcionar uma excelente educação aos filhos sem comprometer o orçamento familiar. Lembre-se: o planejamento de hoje evita os apertos de amanhã.
              </p>

              {/* Share Section */}
              <div className="border-t pt-8 mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#163656] mb-2">
                      Gostou das dicas?
                    </h3>
                    <p className="text-gray-600">
                      Compartilhe com outros pais!
                    </p>
                  </div>
                  <Button className="bg-[#F9B824] hover:bg-[#E5B01A] text-[#163656]">
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

export default OrcamentoFamiliarVoltaAulas;