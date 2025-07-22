import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Imports das imagens
import blogEnergyBill from "../assets/blog-energy-bill.jpg";
import blogSchoolBudget from "../assets/blog-school-budget.jpg";
import blogCarCoolant from "../assets/blog-car-coolant.jpg";
import blogTriangleWarning from "../assets/blog-triangle-warning.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const blogPosts = [
    {
      id: "neoenergia-segunda-via",
      title: "Neoenergia segunda via: como emitir?",
      excerpt: "Aprenda de forma simples como emitir a segunda via da sua conta de energia da Neoenergia e mantenha suas contas em dia.",
      category: "ZenPay",
      date: "21/07/2025",
      image: blogEnergyBill,
      readTime: "5 min"
    },
    {
      id: "orcamento-familiar-volta-aulas",
      title: "Volta às aulas: como planejar um bom orçamento familiar?",
      excerpt: "Dicas práticas para organizar as finanças familiares e enfrentar os gastos do período escolar sem comprometer o orçamento.",
      category: "ZenPay", 
      date: "18/07/2025",
      image: blogSchoolBudget,
      readTime: "7 min"
    },
    {
      id: "liquido-de-arrefecimento",
      title: "Líquido de arrefecimento do motor: o que é e quando trocar",
      excerpt: "Entenda a importância do líquido de arrefecimento para seu veículo e saiba quando fazer a troca para evitar problemas maiores.",
      category: "Motorista",
      date: "16/07/2025", 
      image: blogCarCoolant,
      readTime: "6 min"
    },
    {
      id: "triangulo-de-sinalizacao",
      title: "Triângulo de sinalização: como e quando deve ser usado?",
      excerpt: "Conheça as regras de trânsito sobre o uso correto do triângulo de sinalização e mantenha-se seguro na estrada.",
      category: "Motorista",
      date: "16/07/2025",
      image: blogTriangleWarning,
      readTime: "4 min"
    }
  ];

  const categories = ["Todos", "Motorista", "ZenPay"];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Motorista":
        return "bg-[#F76C1B] text-white";
      case "ZenPay":
        return "bg-[#F9B824] text-[#163656]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#163656] to-[#1e4a6b]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog <span className="text-[#F9B824]">ZenBee</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conteúdos exclusivos para motoristas, dicas financeiras e tudo sobre mobilidade urbana
            </p>
          </div>

          {/* Busca e Filtros */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Campo de Busca */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  />
                </div>

                {/* Filtros de Categoria */}
                <div className="flex gap-2">
                  <Filter className="w-5 h-5 text-white/60 mt-2 flex-shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={
                          selectedCategory === category
                            ? "bg-[#F9B824] text-[#163656] hover:bg-[#E5B01A]"
                            : "border-white/30 text-white hover:bg-white/20"
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-500 mb-6">
                Tente ajustar os filtros ou termo de busca
              </p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
              }}>
                Limpar filtros
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#163656] mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Button asChild size="sm" className="bg-[#F9B824] hover:bg-[#E5B01A] text-[#163656]">
                        <Link to={`/blog/${post.id}`}>
                          Ler mais
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;