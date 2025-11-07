import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Obrigado! Retornaremos em breve.", {
        description: "Recebemos seus dados com sucesso.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="form-contato" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Entre em <span className="text-gradient">contato</span>
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome">Nome *</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nome da empresa"
                  className="bg-background border-border"
                />
              </div>
            </div>

            {/* Interesse */}
            <div className="space-y-2">
              <Label htmlFor="interesse">Interesse *</Label>
              <Select name="interesse" required>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="growth-system">Growth System</SelectItem>
                  <SelectItem value="agentes-ia">Agentes de IA</SelectItem>
                  <SelectItem value="bi-comercial">BI Comercial</SelectItem>
                  <SelectItem value="trafego-demanda">Tráfego & Demanda</SelectItem>
                  <SelectItem value="treinamento">Treinamento Comercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mensagem */}
            <div className="space-y-2">
              <Label htmlFor="mensagem">Descreva seu desafio</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Conte-nos um pouco sobre o que você precisa..."
                rows={4}
                className="bg-background border-border resize-none"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Ao enviar este formulário, você concorda com nossa política de privacidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
