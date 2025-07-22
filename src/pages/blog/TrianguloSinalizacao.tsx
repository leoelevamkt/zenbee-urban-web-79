import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Share2, AlertTriangle, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogTriangleWarning from "../../assets/blog-triangle-warning.jpg";

const TrianguloSinalizacao = () => {
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
                    <span className="text-sm">4 min de leitura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Equipe ZenBee</span>
                  </div>
                  <span className="text-sm">16/07/2025</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Triângulo de sinalização: como e quando deve ser usado?
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Conheça as regras corretas para o uso do triângulo de sinalização e mantenha-se seguro na estrada. Um equipamento obrigatório que pode salvar vidas.
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
                src={blogTriangleWarning}
                alt="Triângulo de sinalização"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O triângulo de sinalização é um equipamento obrigatório que todo motorista deve carregar no veículo. Regulamentado pelo Código de Trânsito Brasileiro (CTB), ele é essencial para a segurança nas estradas e seu uso correto pode evitar acidentes graves. Para motoristas de aplicativo, conhecer as regras é ainda mais importante, pois passam mais tempo na estrada.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">O que é o triângulo de sinalização?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                O triângulo de sinalização é um dispositivo refletivo usado para alertar outros motoristas sobre a presença de um veículo parado ou com problemas na via. Composto por material refletivo vermelho e estrutura dobrável, ele deve ser visível tanto durante o dia quanto à noite.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <AlertTriangle className="w-8 h-8 text-[#F76C1B] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Segurança</h3>
                      <p className="text-sm text-gray-600">Alerta outros motoristas</p>
                    </div>
                    <div>
                      <Shield className="w-8 h-8 text-[#F76C1B] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Obrigatório</h3>
                      <p className="text-sm text-gray-600">Exigido por lei</p>
                    </div>
                    <div>
                      <MapPin className="w-8 h-8 text-[#F76C1B] mx-auto mb-2" />
                      <h3 className="font-semibold text-[#163656]">Posicionamento</h3>
                      <p className="text-sm text-gray-600">Distância adequada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Quando usar o triângulo de sinalização?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O triângulo deve ser usado sempre que o veículo parar na via por qualquer motivo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Pane mecânica (motor, pneu furado, superaquecimento)</li>
                <li>Acidente de trânsito</li>
                <li>Falta de combustível</li>
                <li>Problema elétrico (bateria descarregada)</li>
                <li>Emergência médica</li>
                <li>Qualquer situação que obrigue parada na pista</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Como posicionar corretamente</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">ATENÇÃO - Distâncias obrigatórias</h3>
                    <div className="text-red-700 space-y-2">
                      <p><strong>Via urbana:</strong> 30 metros atrás do veículo</p>
                      <p><strong>Rodovias e estradas:</strong> 60 metros atrás do veículo</p>
                      <p><strong>Curvas e lombadas:</strong> Antes da curva, para máxima visibilidade</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Passo a passo para uso seguro</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#163656] mb-3">🚗 Ao parar o veículo:</h3>
                    <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                      <li>Encoste o mais à direita possível</li>
                      <li>Ligue o pisca-alerta imediatamente</li>
                      <li>Desligue o motor e puxe o freio de mão</li>
                      <li>Vista o colete refletivo (se tiver)</li>
                      <li>Retire o triângulo do porta-malas</li>
                    </ol>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#163656] mb-3">⚠️ Posicionando o triângulo:</h3>
                    <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                      <li>Caminhe pela beira da pista</li>
                      <li>Mantenha-se sempre fora da faixa de rolamento</li>
                      <li>Monte o triângulo na distância correta</li>
                      <li>Certifique-se de que está bem visível</li>
                      <li>Retorne ao veículo pelo mesmo caminho</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Multas e penalidades</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold mb-4">💰 Infrações relacionadas ao triângulo:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="text-gray-700">Não portar o triângulo no veículo</span>
                    <span className="font-semibold text-[#163656]">Infração LEVE - R$ 88,38</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="text-gray-700">Não usar quando obrigatório</span>
                    <span className="font-semibold text-[#163656]">Infração MÉDIA - R$ 130,16</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="text-gray-700">Usar de forma incorreta</span>
                    <span className="font-semibold text-[#163656]">Infração MÉDIA - R$ 130,16</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Dicas especiais para motoristas de aplicativo</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li><strong>Sempre verificar:</strong> Confira se o triângulo está no carro antes de começar o trabalho</li>
                <li><strong>Manutenção:</strong> Verifique periodicamente se está em bom estado e funcionando</li>
                <li><strong>Localização:</strong> Mantenha em local de fácil acesso no porta-malas</li>
                <li><strong>Passageiros:</strong> Oriente passageiros a aguardar em local seguro</li>
                <li><strong>Aplicativo:</strong> Use o recurso de emergência do app para pedir ajuda</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Outros equipamentos obrigatórios</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Além do triângulo, lembre-se de manter no veículo:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Extintor de incêndio</li>
                  <li>Chave de roda e macaco</li>
                  <li>Estepe em bom estado</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Documentos do veículo</li>
                  <li>CNH válida</li>
                  <li>Colete refletivo (recomendado)</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Conclusão</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                O triângulo de sinalização é mais que uma obrigação legal - é um equipamento de segurança fundamental. Usar corretamente pode evitar acidentes graves e salvar vidas. Para motoristas profissionais, dominar essas regras é essencial para trabalhar com segurança e responsabilidade. Lembre-se: a segurança na estrada é responsabilidade de todos.
              </p>

              {/* Share Section */}
              <div className="border-t pt-8 mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#163656] mb-2">
                      Ajude outros motoristas!
                    </h3>
                    <p className="text-gray-600">
                      Compartilhe essas informações importantes de segurança.
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

export default TrianguloSinalizacao;