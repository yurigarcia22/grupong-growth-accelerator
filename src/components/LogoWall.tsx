import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import logoFrancisco from "@/assets/logos/francisco-imoveis.png";
import logoCruzeiro from "@/assets/logos/cruzeiro-do-sul.png";
import logoSicoob from "@/assets/logos/sicoob.png";
import logoConquer from "@/assets/logos/conquer.png";
import logoMaisVida from "@/assets/logos/mais-vida.png";
import logoQbrasa from "@/assets/logos/qbrasa.png";
import logoCSIntegra from "@/assets/logos/cs-integra.png";
import logoLina from "@/assets/logos/lina-imoveis.png";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

const LogoWall = () => {
  const logos: Logo[] = [
    {
      id: "logo-1",
      description: "Francisco Imóveis",
      image: logoFrancisco,
      className: "h-20 w-auto object-contain",
    },
    {
      id: "logo-2",
      description: "Cruzeiro do Sul Virtual",
      image: logoCruzeiro,
      className: "h-12 w-auto object-contain",
    },
    {
      id: "logo-3",
      description: "SICOOB",
      image: logoSicoob,
      className: "h-10 w-auto object-contain",
    },
    {
      id: "logo-4",
      description: "Conquer",
      image: logoConquer,
      className: "h-10 w-auto object-contain invert brightness-0",
    },
    {
      id: "logo-5",
      description: "Mais Vida",
      image: logoMaisVida,
      className: "h-14 w-auto object-contain",
    },
    {
      id: "logo-6",
      description: "Qbrasa",
      image: logoQbrasa,
      className: "h-20 w-auto object-contain",
    },
    {
      id: "logo-7",
      description: "CS Integra",
      image: logoCSIntegra,
      className: "h-24 w-auto object-contain scale-110",
    },
    {
      id: "logo-8",
      description: "Lina Imóveis",
      image: logoLina,
      className: "h-16 w-auto object-contain",
    },
  ];

  return (
    <section className="py-4 bg-[#0A0A0A] overflow-hidden border-y border-white/5">
      <div className="relative w-full">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1.0 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0 -mr-2">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <CarouselItem
                key={`${logo.id}-${index}`}
                // Mobile: basis-1/3 (3 logos visible) for better visibility than 1/4
                // Tablet: basis-1/5
                // Desktop: basis-1/8
                className="flex basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8 items-center justify-center pl-2"
              >
                <div className="relative flex items-center justify-center h-24 w-full opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 filter">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={`${logo.className} max-h-full max-w-full`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default LogoWall;
