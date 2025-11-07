const LogoWall = () => {
  const logos = [
    { name: "Sicoob", width: "120px" },
    { name: "BMG", width: "100px" },
    { name: "Colucci", width: "130px" },
    { name: "ERF", width: "90px" },
    { name: "IDF7", width: "110px" },
    { name: "Universo", width: "140px" },
  ];

  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-muted-foreground">
            Clientes & Parcerias
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms`, width: logo.width }}
            >
              {/* Logo Placeholder */}
              <div className="w-full h-12 rounded-lg bg-muted/20 flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
