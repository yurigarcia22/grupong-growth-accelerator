import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(60% 60% at 50% 0%, hsl(254 100% 70% / 0.25), transparent)"
        }}
      />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(254 100% 70% / 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(254 100% 70% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Consultoria + Tech
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight animate-fade-in-up">
            Aceleramos negócios com{" "}
            <span className="text-gradient">estratégia</span>,{" "}
            <span className="text-gradient">tecnologia</span> e{" "}
            <span className="text-gradient">inteligência</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Conectamos as quatro alavancas de crescimento — Pessoas, Financeiro, Mídia e Tecnologia — 
            para transformar operações em máquinas de receita previsível.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up">
            <Button variant="hero" size="lg" asChild>
              <a href="#contato" className="flex items-center gap-2">
                Agendar diagnóstico
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#cases" className="flex items-center gap-2">
                <Play size={20} />
                Ver cases
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto animate-fade-in">
            {[
              { value: "+80", label: "Negócios atendidos" },
              { value: "+R$ 20M", label: "Pipeline criado" },
              { value: "+30", label: "Agentes de IA" },
              { value: "+1,5M", label: "Em tráfego gerido" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
