"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Diamond, Star, HeartHandshake, Sparkles, Instagram, Phone, MapPin, Menu, X } from "lucide-react";
import Logo from "../components/Logo";
import Reveal from "./reveal";

const pilars = [
  { icon: Diamond, title: "Excelência", text: "Qualidade impecável em cada detalhe, do primeiro contato ao retoque final." },
  { icon: Star, title: "Sofisticação", text: "Beleza com elegância e atendimento premium que faz a diferença." },
  { icon: HeartHandshake, title: "Personalização", text: "Cada cliente é única. Cada experiência é exclusiva e pensada para você." },
  { icon: Sparkles, title: "Transformação", text: "Mais que estética, entregamos confiança, autoestima e bem-estar." },
];

const services = [
  { name: "Noiva VIP", price: "R$ 2.200", desc: "Prévia com 30 dias de antecedência, maquiagem blindada, mapeamento facial, aplique, making-of e suporte total no dia.", featured: true },
  { name: "Noiva Light", price: "R$ 1.400", desc: "Maquiagem blindada, mapeamento facial, suporte para véu, fotos do making-of e auxílio no vestido." },
  { name: "Noiva Civil", price: "R$ 900", desc: "Maquiagem completa, cílios postiços e penteado para o casamento civil." },
  { name: "Combo Make + Hair", price: "R$ 590", desc: "Maquiagem e penteado para madrinhas e convidadas. A escolha mais pedida." },
  { name: "Maquiagem", price: "R$ 380", desc: "Estilo Beauty com produtos importados e acabamento de longa duração." },
  { name: "Penteado", price: "R$ 310", desc: "Visagismo, textura e estrutura que seguram o evento inteiro." },
];

const gallery = [
  { src: "/images/hero-makeup.png", alt: "Maquiagem sendo aplicada", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/noiva-tranca.jpg", alt: "Noiva com trança elaborada", span: "md:col-span-1" },
  { src: "/images/retrato-glam.jpg", alt: "Retrato glam", span: "md:col-span-1" },
  { src: "/images/veu-noiva.jpg", alt: "Ajuste do véu", span: "md:col-span-1" },
  { src: "/images/detalhe-orquidea.jpg", alt: "Detalhe orquídea no penteado", span: "md:col-span-1" },
  { src: "/images/abraco-noiva.jpg", alt: "Noiva abraçando amiga", span: "md:col-span-2" },
];

const testimonials = [
  { name: "Noiva", stars: 5, text: "A maquiagem durou mais de 11 horas sem nenhum retoque. Fiquei intacta do casamento até o dia seguinte." },
  { name: "Madrinha", stars: 5, text: "Transmitiu paz e profissionalismo do início ao fim. Todos os convidados elogiaram." },
  { name: "Cliente recorrente", stars: 5, text: "A melhor maquiadora do mundo. Já indiquei para sogra, madrinhas e amigas." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#galeria", label: "Galeria" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <Reveal />

      {/* ===== 1. HEADER / NAV ===== */}
      <header className={`fixed top-0 z-50 w-full ${scrolled ? "nav-solid" : "nav-transparent"}`}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-20" style={{ height: "72px" }}>
          <a href="#" className="flex items-center">
            <Logo variant="wordmark" color={scrolled ? "dark" : "light"} />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="sans text-[13px] font-medium uppercase transition-colors"
                style={{
                  letterSpacing: "0.1em",
                  color: scrolled ? "#0D0D0D" : "#FAFAFA",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#0D0D0D" : "#FAFAFA")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/5511948645727" className="btn-primary hidden md:inline-flex">
              Agendar Agora
            </a>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: scrolled ? "#0D0D0D" : "#FAFAFA" }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden" style={{ background: "#FFFFFF", borderTop: "1px solid #E5E5E5" }}>
            <nav className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="sans py-3 text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.1em", color: "#0D0D0D", borderBottom: "1px solid #E5E5E5" }}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://wa.me/5511948645727" className="btn-primary mt-4 justify-center">
                Agendar Agora
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ===== 2. HERO ===== */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <Image src="/images/hero-makeup.png" alt="Camara Beauty" fill priority className="object-cover" />
          <div className="hero-overlay" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-20">
            <div className="max-w-2xl reveal in">
              <p
                className="label-brand mb-6"
                style={{ color: "#D4AF37" }}
              >
                Beleza · Confiança · Transformação
              </p>
              <h1
                className="serif"
                style={{
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.167,
                  letterSpacing: "-0.02em",
                  color: "#FAFAFA",
                }}
              >
                Realce sua melhor versão.
              </h1>
              <p
                className="sans mt-6 max-w-xl"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.5,
                  color: "#FAFAFA",
                  opacity: 0.85,
                }}
              >
                Maquiagem blindada, penteado com visagismo e produtos importados de marcas premium. A Camara Beauty entrega sofisticação, segurança e resultado — para noivas, madrinhas e eventos em São Paulo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511948645727" className="btn-primary">
                  Agendar Agora
                </a>
                <a
                  href="#servicos"
                  className="btn-secondary btn-secondary-dark"
                >
                  Ver serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. PILARES ===== */}
        <section style={{ background: "#FAFAFA" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-20 md:py-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              {pilars.map((p) => (
                <div key={p.title} className="flex flex-col items-center text-center reveal">
                  <div
                    className="mb-4 flex items-center justify-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <p.icon size={40} strokeWidth={2} style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="heading-3 mb-2" style={{ color: "#0D0D0D" }}>
                    {p.title}
                  </h3>
                  <p className="text-small" style={{ color: "#666666" }}>
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. SERVIÇOS ===== */}
        <section id="servicos" style={{ background: "#FFFFFF" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-24">
            <div className="mb-12 text-center">
              <p className="label-brand mb-4" style={{ color: "#D4AF37" }}>Serviços</p>
              <h2 className="heading-1" style={{ color: "#0D0D0D" }}>
                Beleza com sofisticação e resultado.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className="card-brand p-8">
                  {s.featured && (
                    <div className="mb-4">
                      <span className="badge-gold">· Destaque</span>
                    </div>
                  )}
                  <h3 className="serif mb-3" style={{ fontSize: "24px", fontWeight: 600, color: "#0D0D0D" }}>
                    {s.name}
                  </h3>
                  <p className="body-text mb-6" style={{ color: "#666666" }}>
                    {s.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-small" style={{ color: "#BABABA", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                        Investimento
                      </span>
                      <p className="serif" style={{ fontSize: "22px", fontWeight: 600, color: "#D4AF37" }}>
                        {s.price}
                      </p>
                    </div>
                    <a href="https://wa.me/5511948645727" className="btn-text">
                      Agendar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. SOBRE / ESSÊNCIA ===== */}
        <section id="sobre" style={{ background: "#FAFAFA" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="reveal">
                <p className="label-brand mb-4" style={{ color: "#D4AF37" }}>Essência</p>
                <h2 className="heading-1 mb-6" style={{ color: "#0D0D0D" }}>
                  A transformação que você merece.
                </h2>
                <div style={{ width: "48px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />
                <p className="body-text mb-4" style={{ color: "#4A4A4A" }}>
                  A Camara Beauty realça a beleza que existe em você com sofisticação, segurança e resultado. Experiências personalizadas que elevam a autoestima e revelam sua melhor versão.
                </p>
                <p className="body-text mb-8" style={{ color: "#4A4A4A" }}>
                  10 anos de mercado, formação internacional e produtos importados de marcas premium. Ateliê na Alameda Dino Bueno ou atendimento no local do seu evento.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "10 anos de experiência",
                    "Formação internacional",
                    "Produtos importados",
                  ].map((item) => (
                    <div
                      key={item}
                      className="text-small p-4"
                      style={{
                        color: "#666666",
                        background: "#FFFFFF",
                        borderRadius: "8px",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="gallery-tile" style={{ minHeight: "400px" }}>
                  <Image src="/images/gabi-contato.jpg" alt="Camara Beauty" width={600} height={800} className="h-full w-full object-cover" />
                </div>
                <div className="gallery-tile" style={{ minHeight: "400px" }}>
                  <Image src="/images/gabi-produto.jpg" alt="Camara Beauty trabalho" width={600} height={800} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 6. GALERIA ===== */}
        <section id="galeria" style={{ background: "#FFFFFF" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-24">
            <div className="mb-12 text-center">
              <p className="label-brand mb-4" style={{ color: "#D4AF37" }}>Galeria</p>
              <h2 className="heading-1" style={{ color: "#0D0D0D" }}>
                Cada detalhe pensado para você.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {gallery.map((item) => (
                <div key={item.src} className={`gallery-tile ${item.span}`} style={{ minHeight: "300px" }}>
                  <Image src={item.src} alt={item.alt} width={800} height={800} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. DEPOIMENTOS ===== */}
        <section id="depoimentos" style={{ background: "#1A1A1A" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-24">
            <div className="mb-12 text-center">
              <p className="label-brand mb-4" style={{ color: "#D4AF37" }}>Depoimentos</p>
              <h2 className="heading-1" style={{ color: "#FAFAFA" }}>
                Sua beleza, nossa arte.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="p-8"
                  style={{
                    background: "#0D0D0D",
                    borderRadius: "8px",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <div className="stars-gold mb-4">
                    {"★".repeat(t.stars)}
                  </div>
                  <p className="body-text mb-6" style={{ color: "#FAFAFA", opacity: 0.85, fontStyle: "italic" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-small" style={{ color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. CTA FINAL ===== */}
        <section id="contato" style={{ background: "#0D0D0D" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-24">
            <div className="text-center">
              <p className="label-brand mb-6" style={{ color: "#D4AF37" }}>Agende sua transformação</p>
              <h2 className="serif mb-6" style={{ fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 700, color: "#FAFAFA", lineHeight: 1.25 }}>
                Realce sua melhor versão.
              </h2>
              <p className="body-text mb-10 mx-auto" style={{ color: "#FAFAFA", opacity: 0.7, maxWidth: "500px" }}>
                Ateliê em São Paulo ou atendimento no local do seu evento. Parcelamento em até 12x no cartão.
              </p>
              <a href="https://wa.me/5511948645727" className="btn-primary">
                Agendar Agora
              </a>
            </div>
          </div>
        </section>

        {/* ===== 9. FOOTER ===== */}
        <footer style={{ background: "#0D0D0D", borderTop: "1px solid rgba(212,175,55,0.15)" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <Logo variant="full" color="light" />
                <p className="text-small mt-4" style={{ color: "#666666", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Beleza · Confiança · Transformação
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-4" style={{ color: "#FAFAFA", fontSize: "14px" }}>Contato</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/5511948645727" className="flex items-center gap-2 text-small" style={{ color: "#BABABA" }}>
                    <Phone size={16} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    (11) 9 4864-5727
                  </a>
                  <a href="https://www.instagram.com/camarabeauty/" className="flex items-center gap-2 text-small" style={{ color: "#BABABA" }}>
                    <Instagram size={16} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    @camarabeauty
                  </a>
                  <p className="flex items-center gap-2 text-small" style={{ color: "#BABABA" }}>
                    <MapPin size={16} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    Alameda Dino Bueno, 663 — São Paulo/SP
                  </p>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-4" style={{ color: "#FAFAFA", fontSize: "14px" }}>Navegação</h3>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-small"
                      style={{ color: "#BABABA", transition: "color 0.15s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#BABABA")}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <hr className="divider-line" style={{ borderColor: "rgba(212,175,55,0.1)", margin: "32px 0" }} />

            <p className="text-small text-center" style={{ color: "#666666" }}>
              © 2026 CAMARABEAUTY · BEAUTY SALON · Todos os direitos reservados
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
