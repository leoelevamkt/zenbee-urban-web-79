import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogEnergyBill from "../../assets/blog-energy-bill.jpg";

const NeoenergiaSegumdaVia = () => {
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
                    <span className="text-sm">5 min de leitura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Equipe ZenBee</span>
                  </div>
                  <span className="text-sm">21/07/2025</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Neoenergia segunda via: como emitir?
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Aprenda de forma simples e rápida como emitir a segunda via da sua conta de energia da Neoenergia e mantenha suas contas sempre em dia.
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
                src={blogEnergyBill}
                alt="Neoenergia segunda via"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Esqueceu de pagar a conta de luz da Neoenergia ou perdeu a fatura? Não se preocupe! Emitir a segunda via é mais simples do que você imagina. Neste guia completo, vamos te ensinar todas as formas de obter sua conta de energia de forma rápida e prática.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">O que é a Neoenergia?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Neoenergia é uma das maiores distribuidoras de energia elétrica do Brasil, atendendo milhões de clientes nos estados da Bahia, Pernambuco, Rio Grande do Norte e Brasília. Com foco na inovação e sustentabilidade, a empresa oferece diversos canais digitais para facilitar a vida dos consumidores.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Como emitir a segunda via pelo site</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold mb-4">Passo a passo:</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Acesse o site oficial da Neoenergia</li>
                  <li>Clique em "Serviços Online" ou "Segunda Via"</li>
                  <li>Digite o número da sua instalação (encontrado na conta)</li>
                  <li>Informe o CPF ou CNPJ do titular</li>
                  <li>Clique em "Consultar"</li>
                  <li>Visualize e baixe sua conta em PDF</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Pelo aplicativo móvel</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O aplicativo da Neoenergia oferece uma experiência ainda mais prática:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Baixe o app "Neoenergia" na Play Store ou App Store</li>
                <li>Faça seu cadastro ou login</li>
                <li>Cadastre sua unidade consumidora</li>
                <li>Acesse "Minhas Contas" para visualizar faturas</li>
                <li>Baixe ou compartilhe sua conta diretamente pelo celular</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">WhatsApp da Neoenergia</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Uma opção moderna e conveniente é usar o WhatsApp Business da Neoenergia. Basta adicionar o número oficial, enviar sua solicitação e seguir as instruções automáticas para receber sua segunda via diretamente no chat.
              </p>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Dicas importantes</h2>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#163656] mb-3">⚠️ Lembre-se:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mantenha sempre em mãos o número da instalação</li>
                    <li>• Guarde o CPF do titular da conta</li>
                    <li>• Verifique os dados antes de finalizar o pagamento</li>
                    <li>• Configure lembretes para não esquecer das próximas faturas</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-[#163656] mb-4">Conclusão</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Emitir a segunda via da conta da Neoenergia é um processo simples e pode ser feito de várias formas. Escolha a opção que mais se adequa ao seu perfil e mantenha suas contas sempre em dia. Lembre-se: pagar em dia evita juros, multas e o risco de ter o fornecimento suspenso.
              </p>

              {/* Share Section */}
              <div className="border-t pt-8 mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#163656] mb-2">
                      Gostou do conteúdo?
                    </h3>
                    <p className="text-gray-600">
                      Compartilhe com seus amigos!
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

export default NeoenergiaSegumdaVia;