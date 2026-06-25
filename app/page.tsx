"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Diamond, Star, HeartHandshake, Sparkles, Instagram, Phone, MapPin, Menu, X } from "lucide-react";
import Logo from "../components/Logo";
import Reveal from "./reveal";

/* ── Animated number counter ── */
function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const animate = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.floor(eased * value));
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <p className="text-small mt-2" style={{ color: "#666666", textTransform: "uppercase", letterSpacing: "0.15em" }}>
        {label}
      </p>
    </div>
  );
}

const pilars = [
  { icon: Diamond,       title: "Excelência",       text: "Qualidade impecável em cada detalhe, do primeiro contato ao retoque final." },
  { icon: Star,          title: "Sofisticação",      text: "Beleza com elegância e atendimento premium que faz a diferença." },
  { icon: HeartHandshake,title: "Personalização",    text: "Cada cliente é única. Cada experiência é exclusiva e pensada para você." },
  { icon: Sparkles,      title: "Transformação",     text: "Mais que estética, entregamos confiança, autoestima e bem-estar." },
];

const services = [
  { name: "Noiva VIP",       price: "R$ 2.200", desc: "Prévia com 30 dias de antecedência, maquiagem blindada, mapeamento facial, aplique, making-of e suporte total no dia.", featured: true },
  { name: "Noiva Light",     price: "R$ 1.400", desc: "Maquiagem blindada, mapeamento facial, suporte para véu, fotos do making-of e auxílio no vestido.",                    featured: false },
  { name: "Noiva Civil",     price: "R$ 900",   desc: "Maquiagem completa, cílios postiços e penteado para o casamento civil.",                                                featured: false },
  { name: "Combo Make + Hair",price: "R$ 590",  desc: "Maquiagem e penteado para madrinhas e convidadas. A escolha mais pedida.",                                              featured: false },
  { name: "Maquiagem",       price: "R$ 380",   desc: "Estilo Beauty com produtos importados e acabamento de longa duração.",                                                  featured: false },
  { name: "Penteado",        price: "R$ 310",   desc: "Visagismo, textura e estrutura que seguram o evento inteiro.",                                                          featured: false },
];

const gallery = [
  { src: "/images/hero-makeup.png",     alt: "Maquiagem sendo aplicada",    span: "md:col-span-2 md:row-span-2" },
  { src: "/images/noiva-tranca.jpg",    alt: "Noiva com trança elaborada",  span: "md:col-span-1" },
  { src: "/images/retrato-glam.jpg",    alt: "Retrato glam",                span: "md:col-span-1" },
  { src: "/images/veu-noiva.jpg",       alt: "Ajuste do véu",               span: "md:col-span-1" },
  { src: "/images/detalhe-orquidea.jpg",alt: "Detalhe orquídea no penteado",span: "md:col-span-1" },
  { src: "/images/abraco-noiva.jpg",    alt: "Noiva abraçando amiga",       span: "md:col-span-2" },
];

const testimonials = [
  { name: "Noiva",             stars: 5, text: "A maquiagem durou mais de 11 horas sem nenhum retoque. Fiquei intacta do casamento até o dia seguinte." },
  { name: "Madrinha",          stars: 5, text: "Transmitiu paz e profissionalismo do início ao fim. Todos os convidados elogiaram." },
  { name: "Cliente recorrente",stars: 5, text: "A melhor maquiadora do mundo. Já indiquei para sogra, madrinhas e amigas." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#servicos",    label: "Serviços" },
    { href: "#sobre",       label: "Sobre" },
    { href: "#galeria",     label: "Galeria" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato",     label: "Contato" },
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
                style={{ letterSpacing: "0.1em", color: scrolled ? "#0D0D0D" : "#FAFAFA" }}
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
        {/* ===== 2. HERO — parallax background ===== */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          {/* Parallax image wrapper — Reveal component translates this on scroll */}
          <div
            id="hero-bg"
            style={{
              position: "absolute",
              top: "-20%",
              left: 0,
              right: 0,
              bottom: "-20%",
              willChange: "transform",
            }}
          >
            <Image
              src="/images/hero-makeup.png"
              alt="Camara Beauty"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>

          <div className="hero-overlay" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-20">
            <div className="max-w-2xl">
              <p
                className="label-brand mb-6 reveal in"
                style={{ color: "#D4AF37" }}
                data-delay="0"
              >
                Beleza · Confiança · Transformação
              </p>
              <h1
                className="serif reveal in"
                style={{
                  fontSize: "clamp(40px, 5.5vw, 58px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#FAFAFA",
                }}
                data-delay="80"
              >
                Realce sua<br />melhor versão.
              </h1>
              <p
                className="sans mt-6 max-w-xl reveal in"
                style={{ fontSize: "16px", lineHeight: 1.65, color: "#FAFAFA", opacity: 0.85 }}
                data-delay="180"
              >
                Maquiagem blindada, penteado com visagismo e produtos importados de marcas premium.
                A Camara Beauty entrega sofisticação, segurança e resultado — para noivas, madrinhas e eventos em São Paulo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 reveal in" data-delay="280">
                <a href="https://wa.me/5511948645727" className="btn-cta-hero">
                  Agendar Agora
                </a>
                <a href="#servicos" className="btn-secondary btn-secondary-dark">
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
              {pilars.map((p, i) => (
                <div
                  key={p.title}
                  className="pilar-card flex flex-col items-center text-center reveal"
                  data-dir="scale"
                  data-delay={String(i * 100)}
                >
                  <div className="pilar-icon">
                    <p.icon size={26} strokeWidth={1.5} style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="heading-3 mb-2" style={{ color: "#0D0D0D", fontSize: "16px" }}>
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
            <div className="section-header mb-12 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Serviços</p>
              <h2 className="heading-1" style={{ color: "#0D0D0D" }}>
                Beleza com sofisticação e resultado.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((s, i) => (
                <article
                  key={s.name}
                  className={s.featured ? "card-service-featured p-8 reveal" : "card-service p-8 reveal"}
                  data-delay={String((i % 3) * 100)}
                >
                  {s.featured && (
                    <div className="mb-4">
                      <span className="badge-gold">· Mais Completo</span>
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

              {/* Left: text content — slides from left */}
              <div className="reveal" data-dir="left">
                <p className="label-brand mb-4" style={{ color: "#D4AF37" }}>Essência</p>
                <h2 className="heading-1 mb-6" style={{ color: "#0D0D0D" }}>
                  A transformação que você merece.
                </h2>
                <div style={{ width: "48px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />
                <p className="body-text mb-4" style={{ color: "#4A4A4A" }}>
                  A Camara Beauty realça a beleza que existe em você com sofisticação, segurança e resultado.
                  Experiências personalizadas que elevam a autoestima e revelam sua melhor versão.
                </p>
                <p className="body-text mb-8" style={{ color: "#4A4A4A" }}>
                  10 anos de mercado, formação internacional e produtos importados de marcas premium.
                  Ateliê na Alameda Dino Bueno ou atendimento no local do seu evento.
                </p>

                {/* Animated stat counters */}
                <div className="grid grid-cols-3 gap-4">
                  <StatCounter value={10} suffix="+" label="Anos de mercado" />
                  <StatCounter value={12} suffix="x" label="Parcelamento" />
                  <StatCounter value={100} suffix="%" label="Look duradouro" />
                </div>
              </div>

              {/* Right: images — slide from right */}
              <div className="grid grid-cols-2 gap-4 reveal" data-dir="right">
                <div className="gallery-tile" style={{ minHeight: "400px" }}>
                  <Image
                    src="/images/gabi-contato.jpg"
                    alt="Camara Beauty"
                    width={600} height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="gallery-overlay">
                    <span className="text-small" style={{ color: "#FAFAFA", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      Expertise
                    </span>
                  </div>
                </div>
                <div className="gallery-tile" style={{ minHeight: "400px" }}>
                  <Image
                    src="/images/gabi-produto.jpg"
                    alt="Camara Beauty trabalho"
                    width={600} height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="gallery-overlay">
                    <span className="text-small" style={{ color: "#FAFAFA", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      Produtos Premium
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 6. GALERIA ===== */}
        <section id="galeria" style={{ background: "#FFFFFF" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-24">
            <div className="section-header mb-12 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Galeria</p>
              <h2 className="heading-1" style={{ color: "#0D0D0D" }}>
                Cada detalhe pensado para você.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {gallery.map((item, i) => (
                <div
                  key={item.src}
                  className={`gallery-tile ${item.span} reveal`}
                  style={{ minHeight: "300px" }}
                  data-dir="scale"
                  data-delay={String(i * 80)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800} height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="gallery-overlay">
                    <span className="text-small" style={{ color: "#FAFAFA", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      {item.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. DEPOIMENTOS ===== */}
        <section id="depoimentos" style={{ background: "#1A1A1A" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-24">
            <div className="section-header mb-12 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Depoimentos</p>
              <h2 className="heading-1" style={{ color: "#FAFAFA" }}>
                Sua beleza, nossa arte.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="card-testimonial reveal"
                  data-delay={String(i * 120)}
                >
                  <div className="stars-gold mb-4">{"★".repeat(t.stars)}</div>
                  <p className="body-text mb-6" style={{ color: "#FAFAFA", opacity: 0.85, fontStyle: "italic" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-small" style={{ color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. CTA FINAL ===== */}
        <section
          id="contato"
          style={{
            background: "#0D0D0D",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative gold circle blur — CSS-only ambient glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          <div className="relative mx-auto max-w-[1200px] px-5 py-24 md:px-20 md:py-32">
            <div className="text-center">
              <p className="label-brand mb-6 reveal" style={{ color: "#D4AF37" }}>
                Agende sua transformação
              </p>
              <h2
                className="serif mb-6 reveal"
                style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, color: "#FAFAFA", lineHeight: 1.15 }}
                data-delay="100"
              >
                O dia mais especial da<br />sua vida merece o melhor.
              </h2>
              <p
                className="body-text mb-10 mx-auto reveal"
                style={{ color: "#FAFAFA", opacity: 0.65, maxWidth: "480px" }}
                data-delay="200"
              >
                Ateliê em São Paulo ou atendimento no local do seu evento.
                Parcelamento em até 12x no cartão.
              </p>
              <div className="reveal" data-delay="300">
                <a href="https://wa.me/5511948645727" className="btn-cta-hero" style={{ fontSize: "14px", padding: "16px 36px" }}>
                  Agendar Agora — WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 9. FOOTER ===== */}
        <footer style={{ background: "#0D0D0D", borderTop: "1px solid rgba(212,175,55,0.12)" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <Logo variant="full" color="light" />
                <p className="text-small mt-4" style={{ color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
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

            <hr style={{ border: "none", borderTop: "1px solid rgba(212,175,55,0.08)", margin: "32px 0" }} />

            <p className="text-small text-center" style={{ color: "#444" }}>
              © 2026 CAMARABEAUTY · BEAUTY SALON · Todos os direitos reservados
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
