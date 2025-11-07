import { Users, TrendingUp, Megaphone, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SectionAlavancas = () => {
  const alavancas = [
    {
      icon: Users,
      title: "Pessoas",
      text: "Treinamentos, contratação e cultura de execução comercial. Do líder ao BDR, processos que aumentam performance.",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: TrendingUp,
      title: "Financeiro",
      text: "Métricas que geram previsibilidade: BI comercial, projeções de vendas, CAC, LTV e payback.",
      color: "from-green-500/20 to-emerald-600/20",
    },
    {
      icon: Megaphone,
      title: "Mídia",
      text: "Geração de demanda com inteligência: tráfego pago, omnichannel, posicionamento e influência digital.",
      color: "from-orange-500/20 to-red-600/20",
    },
    {
      icon: Cpu,
      title: "Tecnologia",
      text: "Ferramentas que automatizam: CRM, agentes de IA e integrações que conectam marketing, vendas e atendimento.",
      color: "from-primary/20 to-accent/20",
    },
  ];

  return (
    <section id="alavancas" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Metodologia Grupo NG
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            As 4 Alavancas de{" "}
            <span className="text-gradient">Crescimento</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {alavancas.map((alavanca, i) => {
            const Icon = alavanca.icon;
            return (
              <div
                key={i}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${alavanca.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                  {alavanca.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {alavanca.text}
                </p>

                {/* CTA */}
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto" asChild>
                  <a href="#solucoes" className="flex items-center gap-2 text-primary">
                    Ver detalhes
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/* Decorative Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${alavanca.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 blur-xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionAlavancas;
