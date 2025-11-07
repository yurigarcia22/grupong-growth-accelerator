import { Button } from "@/components/ui/button";
import { Workflow, Bot, BarChart3, Radio, GraduationCap, Check } from "lucide-react";

const SectionSolucoes = () => {
  const solucoes = [
    {
      icon: Workflow,
      title: "Growth System",
      desc: "Implementação completa das 4 alavancas com roadmap de 90 dias e sprints quinzenais.",
      features: ["Discovery + Plano", "Sprints de execução", "OKRs & North Star"],
      highlight: true,
    },
    {
      icon: Bot,
      title: "Agentes de IA",
      desc: "Atendimento e follow-up via WhatsApp e CRM. Qualificação, agendamento e anti-no-show.",
      features: ["Onboarding de base", "Scripts por nicho", "Monitoramento de alucinações"],
    },
    {
      icon: BarChart3,
      title: "BI Comercial",
      desc: "Painéis de previsibilidade: funil, receita, CAC, LTV, payback, cohort por canal.",
      features: ["Conectores", "Cubo por segmento", "Alertas de desvio"],
    },
    {
      icon: Radio,
      title: "Tráfego & Demanda",
      desc: "Google, Meta e influenciadores com foco em ROI e brand lift.",
      features: ["Omnichannel", "LPs e tracking", "Conteúdo de autoridade"],
    },
    {
      icon: GraduationCap,
      title: "Treinamento Comercial",
      desc: "Bootcamps para liderança, SDR/BDR e closers. Playbooks e roleplays.",
      features: ["Playbooks", "Script desk & call", "Gestão de rotina"],
    },
  ];

  return (
    <section id="solucoes" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Nossas soluções
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Produtos e <span className="text-gradient">Soluções</span>
          </h2>
          <p className="text-muted-foreground">
            Escolha o módulo ou o sistema completo
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solucoes.map((solucao, i) => {
            const Icon = solucao.icon;
            return (
              <div
                key={i}
                className={`group relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-soft animate-fade-in ${
                  solucao.highlight
                    ? "border-primary/50 md:col-span-2 lg:col-span-1 lg:row-span-2"
                    : "border-border hover:border-primary/30"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {solucao.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Destaque
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                  {solucao.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solucao.desc}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {solucao.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant={solucao.highlight ? "hero" : "outline"} 
                  className="w-full" 
                  asChild
                >
                  <a href="#contato">Quero saber mais</a>
                </Button>

                {/* Decorative Gradient */}
                {solucao.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl -z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionSolucoes;
