import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Smartphone, Monitor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Redes Sociais */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/bf8ff34a-9281-4c33-a387-f437c0b1199a.png" 
                alt="Zenbee" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Zenbee</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Sua tranquilidade é o nosso caminho.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/passageiro" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Passageiro
                </Link>
              </li>
              <li>
                <Link to="/motorista" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Motorista
                </Link>
              </li>
              <li>
                <Link to="/seguranca" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Segurança
                </Link>
              </li>
              <li>
                <Link to="/socios" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Sócios
                </Link>
              </li>
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h3 className="font-semibold mb-4">Ajuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Downloads do App */}
          <div>
            <h3 className="font-semibold mb-4">Baixe o App</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Smartphone size={16} />
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Monitor size={16} />
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Zenbee Mobilidade Urbana. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;