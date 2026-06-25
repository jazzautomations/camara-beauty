"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Instagram, Phone, MapPin, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../components/Logo";
import Reveal from "./reveal";

/* ── Animated counter ── */
function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="stat-card">
      <div className="stat-number">{count}{suffix}</div>
      <p className="text-small mt-2" style={{ color: "#666", textTransform: "uppercase", letterSpacing: "0.15em" }}>
        {label}
      </p>
    </div>
  );
}

/* ── FAQ item ── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item reveal" data-delay={String(index * 60)}>
      <button className="faq-trigger" onClick={() => setOpen(!open)}>
        <span className="sans" style={{ fontSize: "16px", fontWeight: 500, color: "#0D0D0D", flex: 1 }}>
          {q}
        </span>
        <span className={`faq-icon ${open ? "open" : ""}`} style={{ color: open ? "#D4AF37" : "#BABABA" }}>
          +
        </span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div className="faq-answer-inner">
          <p className="body-text" style={{ color: "#666666" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Data ── */
const vipIncludes = [
  "Prévia presencial 30 dias antes",
  "Maquiagem blindada com fixação profissional",
  "Mapeamento e correção facial",
  "Aplique ou penteado completo com visagismo",
  "Suporte para véu e produção do vestido",
  "Making-of fotográfico no dia",
  "Suporte total do início ao fim",
];

const otherServices = [
  { name: "Noiva Light",      price: "R$ 1.400", desc: "Maquiagem blindada, mapeamento facial, penteado, fotos do making-of e auxílio no vestido. Para quem quer o essencial com qualidade premium." },
  { name: "Noiva Civil",      price: "R$ 900",   desc: "Maquiagem completa, cílios postiços e penteado para o civil. O look certo para um momento íntimo e especial." },
  { name: "Combo Make + Hair",price: "R$ 590",   desc: "Maquiagem e penteado para madrinhas e convidadas. O pacote mais pedido pelas equipes da noiva." },
  { name: "Maquiagem",        price: "R$ 380",   desc: "Estilo Beauty com produtos importados e acabamento de longa duração para qualquer evento." },
  { name: "Penteado",         price: "R$ 310",   desc: "Visagismo, textura e estrutura. Um penteado que aguenta o evento inteiro do início ao fim." },
];

const gallery = [
  { src: "/images/hero-makeup.png",      alt: "Make aplicação",         span: "md:col-span-2 md:row-span-2" },
  { src: "/images/noiva-tranca.jpg",     alt: "Penteado trança",        span: "md:col-span-1" },
  { src: "/images/retrato-glam.jpg",     alt: "Retrato glamour",        span: "md:col-span-1" },
  { src: "/images/veu-noiva.jpg",        alt: "Detalhe véu",            span: "md:col-span-1" },
  { src: "/images/detalhe-orquidea.jpg", alt: "Detalhe penteado",       span: "md:col-span-1" },
  { src: "/images/abraco-noiva.jpg",     alt: "Momento especial",       span: "md:col-span-2" },
];

const testimonials = [
  {
    text: "Meu casamento foi em pleno verão, 38°C, e eu chorei na entrada da igreja. Minha maquiagem ficou impecável da cerimônia até a última música — sem um retoque. Nas fotos pareço ter saído do salão há 10 minutos.",
    name: "Fernanda M.",
    role: "Noiva · Janeiro 2026",
  },
  {
    text: "Sempre tive medo de não me reconhecer com muita maquiagem. A Camara Beauty entendeu exatamente o que eu queria e me entregou uma versão de mim que nunca imaginei possível. Todas as convidadas perguntaram quem fez.",
    name: "Juliana S.",
    role: "Noiva · Outubro 2025",
  },
  {
    text: "Fui com minha mãe e quatro madrinhas. Todas ficamos perfeitas, o atendimento foi tranquilo e ainda chegamos na cerimônia adiantadas. Recomendo para qualquer noiva que queira paz no dia mais importante.",
    name: "Ana Beatriz R.",
    role: "Noiva · Agosto 2025",
  },
];

const faqs = [
  { q: "A prévia está incluída no pacote?", a: "Sim — no Noiva VIP, a prévia presencial acontece até 30 dias antes do casamento. Testamos técnica, produto e estilo até você se apaixonar pelo resultado. No Noiva Light e Civil, a prévia pode ser contratada à parte." },
  { q: "E se eu não gostar do resultado na prévia?", a: "A prévia existe exatamente para isso. Ajustamos o look quantas vezes for necessário até você chegar ao altar com confiança total — sem surpresas no grande dia." },
  { q: "Como garantir minha data?", a: "Com 50% de sinal via PIX ou cartão. O restante é pago no dia do evento. As datas são confirmadas por ordem de pagamento — quanto antes você reservar, mais segura fica sua data." },
  { q: "Atendem no local do evento?", a: "Sim, em toda São Paulo e região. O deslocamento é combinado previamente e adicionado ao valor do pacote. Ateliê fixo na Alameda Dino Bueno, 663 — Bela Vista." },
  { q: "Atendem madrinhas, mãe da noiva e convidadas?", a: "Sim! Temos pacotes específicos para o grupo — Combo Make + Hair (R$ 590) e Maquiagem avulsa (R$ 380). Me conte o tamanho da equipe e montamos um orçamento completo." },
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
    { href: "#pacotes",     label: "Pacotes" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#galeria",     label: "Galeria" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq",         label: "FAQ" },
  ];

  return (
    <>
      <Reveal />

      {/* ===== HEADER ===== */}
      <header className={`fixed top-0 z-50 w-full ${scrolled ? "nav-solid" : "nav-transparent"}`}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-20" style={{ height: "72px" }}>
          <a href="#"><Logo variant="wordmark" color={scrolled ? "dark" : "light"} /></a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="sans text-[13px] font-medium uppercase"
                style={{ letterSpacing: "0.1em", color: scrolled ? "#0D0D0D" : "#FAFAFA", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#0D0D0D" : "#FAFAFA")}
              >{link.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/5511948645727" className="btn-primary hidden md:inline-flex">
              Garantir minha data
            </a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: scrolled ? "#0D0D0D" : "#FAFAFA" }}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden" style={{ background: "#FFF", borderTop: "1px solid #E5E5E5" }}>
            <nav className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="sans py-3 text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.1em", color: "#0D0D0D", borderBottom: "1px solid #E5E5E5" }}>
                  {link.label}
                </a>
              ))}
              <a href="https://wa.me/5511948645727" className="btn-primary mt-4 justify-center">
                Garantir minha data
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <div id="hero-bg" style={{ position: "absolute", top: "-20%", left: 0, right: 0, bottom: "-20%", willChange: "transform" }}>
            <Image src="/images/hero-makeup.png" alt="Camara Beauty" fill priority className="object-cover" style={{ objectPosition: "center top" }} />
          </div>
          <div className="hero-overlay" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-20">
            <div className="max-w-[620px]">
              <p className="label-brand mb-5 reveal in" style={{ color: "#D4AF37" }}>
                Para noivas que exigem o melhor
              </p>
              <h1 className="serif reveal in"
                style={{ fontSize: "clamp(44px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.025em", color: "#FAFAFA" }}
                data-delay="80">
                O altar não aceita<br />segunda chance.
              </h1>
              <p className="sans mt-6 reveal in"
                style={{ fontSize: "17px", lineHeight: 1.65, color: "#FAFAFA", opacity: 0.82, maxWidth: "520px" }}
                data-delay="180">
                Maquiagem blindada e penteado com visagismo que resistem às 14 horas mais fotografadas da sua vida — porque as fotos do seu casamento vão durar para sempre.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 reveal in" data-delay="280">
                <a href="https://wa.me/5511948645727" className="btn-cta-hero">
                  Garantir minha data
                </a>
                <a href="#pacotes" className="btn-secondary btn-secondary-dark">
                  Ver pacotes
                </a>
              </div>
              <p className="sans mt-5 text-[12px] reveal in" style={{ color: "#FAFAFA", opacity: 0.5, letterSpacing: "0.1em" }} data-delay="360">
                Consulta gratuita · Resposta em até 2h · Sem compromisso
              </p>
            </div>
          </div>

          {/* scroll indicator */}
          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 reveal in" data-delay="600"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.5 }}>
            <ChevronDown size={20} style={{ color: "#D4AF37" }} />
          </div>
        </section>

        {/* ===== TRUST STRIP ===== */}
        <div className="trust-strip">
          <div className="trust-strip-inner mx-auto max-w-[1200px] px-5 md:px-20">
            {[
              { val: "10+", label: "Anos de mercado" },
              { val: "500+", label: "Noivas atendidas" },
              { val: "★★★★★", label: "Avaliação no Google" },
              { val: "Formação", label: "Internacional" },
              { val: "Produtos", label: "Premium importados" },
            ].map((item) => (
              <div key={item.label} className="trust-item">
                <span className="serif" style={{ fontSize: "15px", fontWeight: 600, color: "#D4AF37" }}>
                  {item.val}
                </span>
                <span className="text-small" style={{ color: "#888", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PACOTES ===== */}
        <section id="pacotes" style={{ background: "#FAFAFA" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-28">
            <div className="section-header mb-14 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Pacotes para noivas</p>
              <h2 className="heading-1 mt-3" style={{ color: "#0D0D0D" }}>
                Cada noiva merece um olhar único.
              </h2>
              <p className="body-text mt-4 mx-auto" style={{ color: "#666", maxWidth: "480px" }}>
                Do casamento civil ao evento dos sonhos — feito para que você chegue ao altar sem se preocupar com nada.
              </p>
              <div className="divider-gold" />
            </div>

            {/* VIP — featured horizontal card */}
            <div className="card-service-featured p-0 mb-8 reveal" data-dir="scale" data-delay="100">
              <div className="grid lg:grid-cols-[1fr_380px]">
                {/* Left */}
                <div className="p-8 md:p-10" style={{ borderRight: "1px solid rgba(212,175,55,0.15)" }}>
                  <div className="mb-4 flex items-center gap-3 flex-wrap">
                    <span className="badge-gold">· Mais completo</span>
                    <span className="text-small" style={{ color: "#D4AF37", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      Vagas limitadas para 2026
                    </span>
                  </div>
                  <h3 className="serif mb-2" style={{ fontSize: "32px", fontWeight: 700, color: "#0D0D0D" }}>
                    Noiva VIP
                  </h3>
                  <p className="body-text mb-6" style={{ color: "#666" }}>
                    Para a noiva que não quer se preocupar com nada no dia mais importante. Da prévia ao retoque final, você está em boas mãos — o dia inteiro.
                  </p>
                  <div className="flex flex-wrap items-end gap-6">
                    <div>
                      <span className="text-small" style={{ color: "#BABABA", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                        Investimento
                      </span>
                      <p className="serif" style={{ fontSize: "36px", fontWeight: 700, color: "#D4AF37", lineHeight: 1.1 }}>
                        R$ 2.200
                      </p>
                      <span className="text-small" style={{ color: "#BABABA" }}>ou 12x de R$ 183,34</span>
                    </div>
                    <a href="https://wa.me/5511948645727" className="btn-cta-hero">
                      Agendar Noiva VIP
                    </a>
                  </div>
                </div>
                {/* Right — includes */}
                <div className="p-8 md:p-10" style={{ background: "rgba(212,175,55,0.03)" }}>
                  <p className="text-small mb-4" style={{ color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600 }}>
                    O que está incluído
                  </p>
                  <div>
                    {vipIncludes.map((item) => (
                      <div key={item} className="included-item">
                        <span className="included-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other services */}
            <p className="label-brand mb-6 reveal" style={{ color: "#BABABA" }} data-delay="80">
              Também disponível
            </p>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {otherServices.map((s, i) => (
                <article key={s.name} className="card-service p-7 reveal" data-delay={String((i % 3) * 80)}>
                  <h3 className="serif mb-2" style={{ fontSize: "20px", fontWeight: 600, color: "#0D0D0D" }}>
                    {s.name}
                  </h3>
                  <p className="body-text mb-6" style={{ color: "#666", fontSize: "14px" }}>
                    {s.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="serif" style={{ fontSize: "20px", fontWeight: 600, color: "#D4AF37" }}>
                        {s.price}
                      </p>
                    </div>
                    <a href="https://wa.me/5511948645727" className="btn-text" style={{ fontSize: "13px" }}>
                      Agendar →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMO FUNCIONA ===== */}
        <section id="como-funciona" style={{ background: "#0D0D0D" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-28">
            <div className="section-header mb-16 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Como funciona</p>
              <h2 className="heading-1 mt-3" style={{ color: "#FAFAFA" }}>
                Do WhatsApp ao altar em 3 passos.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Consulta",
                  text: "Fale comigo pelo WhatsApp. Conta a data, o estilo do casamento e o que você imagina para o seu look. Respondo em até 2 horas.",
                },
                {
                  n: "02",
                  title: "Prévia",
                  text: "Agendamos uma sessão presencial onde testamos e ajustamos tudo — técnica, produto, estrutura — até você se apaixonar pelo resultado.",
                },
                {
                  n: "03",
                  title: "O grande dia",
                  text: "Chego pontualmente com tudo preparado. Você só precisa se sentar, respirar e deixar a transformação acontecer.",
                },
              ].map((step, i) => (
                <div key={step.n} className="step-card text-center reveal" data-delay={String(i * 120)}>
                  <div className="step-number">{step.n}</div>
                  <h3 className="serif mb-3" style={{ fontSize: "22px", fontWeight: 600, color: "#FAFAFA" }}>
                    {step.title}
                  </h3>
                  <p className="body-text" style={{ color: "#888" }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GALERIA ===== */}
        <section id="galeria" style={{ background: "#FFFFFF" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-28">
            <div className="section-header mb-12 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Portfólio</p>
              <h2 className="heading-1 mt-3" style={{ color: "#0D0D0D" }}>
                O trabalho fala por si.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {gallery.map((item, i) => (
                <div key={item.src} className={`gallery-tile ${item.span} reveal`}
                  style={{ minHeight: "300px" }}
                  data-dir="scale"
                  data-delay={String(i * 80)}>
                  <Image src={item.src} alt={item.alt} width={800} height={800} className="h-full w-full object-cover" />
                  <div className="gallery-overlay">
                    <span className="text-small" style={{ color: "#FAFAFA", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      {item.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center reveal" data-delay="200">
              <a href="https://www.instagram.com/camarabeauty/" target="_blank" rel="noopener"
                className="btn-secondary" style={{ gap: "8px" }}>
                <Instagram size={16} />
                Ver mais no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ===== DEPOIMENTOS ===== */}
        <section id="depoimentos" style={{ background: "#1A1A1A" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-28">
            <div className="section-header mb-14 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Depoimentos</p>
              <h2 className="heading-1 mt-3" style={{ color: "#FAFAFA" }}>
                Noivas que confiaram.<br />Noivas que voltariam.
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div key={t.name} className="card-testimonial reveal" data-delay={String(i * 120)}>
                  <div className="stars-gold mb-5">★★★★★</div>
                  <p className="body-text mb-6" style={{ color: "#FAFAFA", opacity: 0.85, fontStyle: "italic", lineHeight: 1.7 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="sans" style={{ color: "#FAFAFA", fontWeight: 600, fontSize: "14px" }}>{t.name}</p>
                    <p className="text-small mt-1" style={{ color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.15em" }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SOBRE ===== */}
        <section id="sobre" style={{ background: "#FAFAFA" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-20 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="reveal" data-dir="left">
                <p className="label-brand mb-4" style={{ color: "#D4AF37" }}>Sobre a Camara Beauty</p>
                <h2 className="heading-1 mb-6" style={{ color: "#0D0D0D" }}>
                  10 anos transformando noivas em São Paulo.
                </h2>
                <div style={{ width: "48px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />
                <p className="body-text mb-4" style={{ color: "#4A4A4A" }}>
                  A Camara Beauty nasce da convicção de que toda noiva merece chegar ao altar com confiança absoluta no próprio look — sem medos, sem ajustes de última hora, sem surpresas.
                </p>
                <p className="body-text mb-8" style={{ color: "#4A4A4A" }}>
                  Com formação internacional, 10 anos de mercado e produtos importados de marcas premium, cada atendimento é pensado para realçar a beleza única de cada cliente. Ateliê na Alameda Dino Bueno ou atendimento no local do seu evento.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <StatCounter value={10}  suffix="+" label="Anos de mercado" />
                  <StatCounter value={500} suffix="+" label="Noivas atendidas" />
                  <StatCounter value={12}  suffix="x"  label="Parcelamento" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 reveal" data-dir="right">
                <div className="gallery-tile" style={{ minHeight: "400px" }}>
                  <Image src="/images/gabi-contato.jpg" alt="Camara Beauty" width={600} height={800} className="h-full w-full object-cover" />
                  <div className="gallery-overlay">
                    <span className="text-small" style={{ color: "#FAFAFA", letterSpacing: "0.15em", textTransform: "uppercase" }}>Expertise</span>
                  </div>
                </div>
                <div className="gallery-tile" style={{ minHeight: "400px" }}>
                  <Image src="/images/gabi-produto.jpg" alt="Produtos premium" width={600} height={800} className="h-full w-full object-cover" />
                  <div className="gallery-overlay">
                    <span className="text-small" style={{ color: "#FAFAFA", letterSpacing: "0.15em", textTransform: "uppercase" }}>Produtos Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" style={{ background: "#FFFFFF" }}>
          <div className="mx-auto max-w-[760px] px-5 py-20 md:px-8 md:py-28">
            <div className="section-header mb-14 reveal" data-dir="scale">
              <p className="label-brand" style={{ color: "#D4AF37" }}>Perguntas frequentes</p>
              <h2 className="heading-1 mt-3" style={{ color: "#0D0D0D" }}>
                Tire suas dúvidas.
              </h2>
              <div className="divider-gold" />
            </div>
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section id="contato" style={{ background: "#0D0D0D", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{
            position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none",
          }} />

          <div className="relative mx-auto max-w-[1200px] px-5 py-28 md:px-20 md:py-36">
            <div className="text-center">
              <p className="label-brand mb-6 reveal" style={{ color: "#D4AF37" }}>
                Reserve sua data
              </p>
              <h2 className="serif mb-5 reveal"
                style={{ fontSize: "clamp(36px, 5.5vw, 56px)", fontWeight: 700, color: "#FAFAFA", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                data-delay="100">
                Sua data ainda<br />está disponível?
              </h2>
              <p className="body-text mb-3 mx-auto reveal"
                style={{ color: "#FAFAFA", opacity: 0.6, maxWidth: "420px" }}
                data-delay="200">
                Datas para 2026 se esgotam com antecedência. Verifique agora — sem compromisso.
              </p>
              <p className="body-text mb-10 mx-auto reveal" style={{ color: "#D4AF37", opacity: 0.9, maxWidth: "420px" }} data-delay="240">
                Consulta gratuita · Resposta em até 2h
              </p>
              <div className="reveal" data-delay="300">
                <a href="https://wa.me/5511948645727"
                  className="btn-cta-hero"
                  style={{ fontSize: "14px", padding: "18px 40px", letterSpacing: "0.12em" }}>
                  Verificar disponibilidade → WhatsApp
                </a>
              </div>
              <p className="text-small mt-6 reveal" style={{ color: "#555", letterSpacing: "0.1em" }} data-delay="380">
                Parcelamento em até 12x no cartão
              </p>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer style={{ background: "#0D0D0D", borderTop: "1px solid rgba(212,175,55,0.10)" }}>
          <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <Logo variant="full" color="light" />
                <p className="text-small mt-4" style={{ color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Beleza · Confiança · Transformação
                </p>
              </div>
              <div>
                <h3 style={{ color: "#FAFAFA", fontSize: "14px", fontWeight: 600, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Contato
                </h3>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/5511948645727" className="flex items-center gap-2 text-small" style={{ color: "#BABABA" }}>
                    <Phone size={15} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    (11) 9 4864-5727
                  </a>
                  <a href="https://www.instagram.com/camarabeauty/" className="flex items-center gap-2 text-small" style={{ color: "#BABABA" }}>
                    <Instagram size={15} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    @camarabeauty
                  </a>
                  <p className="flex items-center gap-2 text-small" style={{ color: "#BABABA" }}>
                    <MapPin size={15} strokeWidth={2} style={{ color: "#D4AF37" }} />
                    Alameda Dino Bueno, 663 — São Paulo/SP
                  </p>
                </div>
              </div>
              <div>
                <h3 style={{ color: "#FAFAFA", fontSize: "14px", fontWeight: 600, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Navegação
                </h3>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-small"
                      style={{ color: "#BABABA", transition: "color 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#BABABA")}>
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
