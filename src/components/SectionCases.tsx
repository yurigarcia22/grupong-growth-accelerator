import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import logoFrancisco from "@/assets/logos/francisco-imoveis.png";
import logoCruzeiro from "@/assets/logos/cruzeiro-do-sul.png";
import logoCSIntegra from "@/assets/logos/cs-integra.png";

const SectionCases = () => {
  const cases = [
    {
      title: "Imobiliária Francisco Imóveis",
      summary: "-72% tempo de resposta, +210% taxa de fechamento com IA + CRM.",
      tags: ["Imobiliária", "IA", "CRM"],
      gradient: "from-blue-600/20 to-cyan-600/20",
      logo: logoFrancisco,
      logoClassName: "w-32 md:w-40"
    },
    {
      title: "Cruzeiro do Sul Virtual",
      summary: "Implementamos um ecossistema de captação que aumentou a qualificação dos leads, resultando em um crescimento de 40% na taxa de conversão de matrículas e otimização do CAC.",
      tags: ["Educação", "Growth", "Conversão"],
      gradient: "from-purple-600/20 to-pink-600/20",
      logo: logoCruzeiro,
      logoClassName: "w-40 md:w-52", // Increased size
    },
    {
      title: "CS Integra",
      summary: "Desenvolvemos um posicionamento B2B estratégico, elevando a percepção de valor da marca e abrindo portas para negociações com grandes players do mercado corporativo.",
      tags: ["B2B", "Posicionamento", "Estratégia"],
      gradient: "from-green-600/20 to-emerald-600/20",
      logo: logoCSIntegra,
      logoClassName: "w-32 md:w-40"
    },
  ];

  return (
    <section id="cases" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Resultados reais
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Casos de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-muted-foreground">
            Veja como transformamos desafios em resultados concretos
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, i) => (
            <div
              key={i}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image Area with Logo */}
              <div className={`aspect-video bg-gradient-to-br ${caseItem.gradient} relative overflow-hidden flex items-center justify-center p-8`}>
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={caseItem.logo}
                    alt={`Logo ${caseItem.title}`}
                    // Added grayscale and group-hover:grayscale-0 for the effect
                    className={`h-auto object-contain drop-shadow-lg grayscale group-hover:grayscale-0 transition-all duration-300 ${caseItem.logoClassName}`}
                  />
                </div>
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 relative z-20">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {caseItem.title}
                </h3>

                {/* Summary */}
                <p className="text-muted-foreground leading-relaxed">
                  {caseItem.summary}
                </p>

                {/* CTA */}
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto mt-2" asChild>
                  <a href={`#case-${i}`} className="flex items-center gap-2 text-primary">
                    Ver detalhes completos
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCases;
