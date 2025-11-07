import { Check } from "lucide-react";

const SectionAbout = () => {
  const bullets = [
    "+80 negócios atendidos em múltiplos segmentos",
    "+R$ 20 milhões em pipeline criado",
    "+30 agentes de IA implementados",
    "+1,5 milhão em tráfego gerido",
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Sobre nós
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Transformamos negócios em{" "}
              <span className="text-gradient">sistemas de crescimento</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos uma assessoria comercial e de marketing com DNA tecnológico. 
              Ajudamos empresas a criarem previsibilidade de vendas, construindo 
              processos, cultura de métricas e alavancas de crescimento baseadas em performance.
            </p>
            <div className="space-y-3 pt-4">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Media */}
          <div className="relative animate-fade-in">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-card to-secondary overflow-hidden shadow-card relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary-foreground border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Conheça nossa história</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
