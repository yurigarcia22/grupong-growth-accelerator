import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logoGrupoNG from "@/assets/logo-grupong.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Grupo NG",
      links: [
        { label: "Sobre", href: "#sobre" },
        { label: "Cases", href: "#cases" },
        { label: "Soluções", href: "#solucoes" },
      ],
    },
    {
      title: "Contato",
      links: [
        { label: "contato@grupongbrasil.com.br", href: "mailto:contato@grupongbrasil.com.br", icon: Mail },
        { label: "+55 99 99999-9999", href: "https://wa.me/5599999999999", icon: Phone },
      ],
    },
    {
      title: "Redes",
      links: [
        { label: "Instagram", href: "https://instagram.com/grupong", icon: Instagram },
        { label: "LinkedIn", href: "https://linkedin.com/company/grupong", icon: Linkedin },
      ],
    },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <img 
                src={logoGrupoNG} 
                alt="Grupo NG" 
                className="h-32 w-auto"
              />
              <p className="text-sm text-muted-foreground max-w-xs">
                Aceleramos negócios com estratégia, tecnologia e inteligência.
              </p>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column, i) => (
              <div key={i} className="space-y-4">
                <h3 className="font-heading font-semibold text-foreground">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => {
                    const Icon = link.icon;
                    return (
                      <li key={j}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {Icon && <Icon size={16} />}
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Grupo NG — Desenvolvido com 🧠 por Grupo NG
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
