
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Car, Shield, Building2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Motorista", href: "/motorista", icon: Car },
    { name: "Segurança", href: "/seguranca", icon: Shield },
    { name: "Sócios", href: "/socios", icon: Building2 },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Increased size */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/08f30122-cf83-42f5-a1d1-dc6d0f14f78e.png" 
              alt="Zenbee Logo" 
              className="h-[57px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  <Icon size={16} className="text-primary" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Baixe o app
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Seja Motorista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={16} className="text-primary" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 space-y-3">
              <Button variant="outline" size="sm" className="w-full">
                Baixe o app
              </Button>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Seja Motorista
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
