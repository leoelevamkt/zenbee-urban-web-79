import { useState } from "react";
import { MessageCircle, X, User, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      title: "Ajuda para Passageiro",
      description: "Suporte para usuários do app",
      icon: User,
      link: "https://wa.me/5511999999999?text=Olá! Preciso de ajuda como passageiro.",
    },
    {
      title: "Suporte para Motorista",
      description: "Ajuda para motoristas parceiros",
      icon: Car,
      link: "https://wa.me/5511999999999?text=Olá! Preciso de suporte como motorista.",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Options Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Como podemos ajudar?</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-3">
                {options.map((option, index) => (
                  <a
                    key={index}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <option.icon className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{option.title}</h4>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <MessageCircle className="text-white" size={24} />
      </Button>
    </>
  );
};

export default WhatsAppButton;