import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

const CTABanner = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-primary/30 p-12 md:p-16 lg:p-20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Vamos acelerar seu{" "}
              <span className="text-gradient">crescimento</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fale com um especialista e receba um diagnóstico objetivo do seu funil e operação.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/5599999999999?text=Quero%20um%20diagn%C3%B3stico%20gratuito%20do%20Grupo%20NG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Agendar no WhatsApp
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#form-contato" className="flex items-center gap-2">
                  <Send size={20} />
                  Enviar formulário
                </a>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                ✓ Diagnóstico gratuito • ✓ Sem compromisso • ✓ Resposta em 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
