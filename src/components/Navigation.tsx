import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoGrupoNG from "@/assets/logo-grupong.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Alavancas", href: "#alavancas" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src={logoGrupoNG}
              alt="Grupo NG"
              className="h-20 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              size="default"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm transition-all"
              asChild
            >
              <a
                href="https://wa.me/5537999577862?text=Quero%20um%20diagn%C3%B3stico%20gratuito%20do%20Grupo%20NG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar diagnóstico
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-lg border-t border-white/10 p-6 animate-fade-in flex flex-col h-[calc(100vh-80px)]">
            <div className="flex flex-col gap-6 items-center justify-center flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="lg"
                className="mt-4 w-full max-w-xs bg-white/10 hover:bg-white/20 text-white border border-white/10"
                asChild
              >
                <a
                  href="https://wa.me/5537999577862?text=Quero%20um%20diagn%C3%B3stico%20gratuito%20do%20Grupo%20NG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar diagnóstico
                </a>
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground pb-8">
              <p>Grupo NG Growth Accelerator</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
