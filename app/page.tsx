import Image from "next/image";
import Reveal from "./reveal";

const services = [
  { name: "Maquiagem", price: "R$ 380", desc: "Acabamento editorial, blindada e durável." },
  { name: "Penteado", price: "R$ 310", desc: "Visagismo elegante, textura e fixação de alto padrão." },
  { name: "Combo Make + Hair", price: "R$ 590", desc: "A escolha mais vendida para convidadas e madrinhas." },
  { name: "Noiva Civil", price: "R$ 900", desc: "Make, cílios e penteado para o casamento civil." },
  { name: "Noiva Light", price: "R$ 1.400", desc: "Mais completo, com mapeamento facial e experiência premium." },
  { name: "Noiva VIP", price: "R$ 2.200", desc: "Prévia, blindagem, aplique e presença total no grande dia." },
];

const portfolio = [
  { src: "/images/hero-makeup.png", alt: "Make" },
  { src: "/images/noiva-tranca.jpg", alt: "Noiva com trança" },
  { src: "/images/gabi-penteando.png", alt: "Gabi penteando" },
  { src: "/images/veu-noiva.jpg", alt: "Véu" },
  { src: "/images/retrato-glam.jpg", alt: "Retrato glam" },
  { src: "/images/abraco-noiva.jpg", alt: "Abraço noiva" },
  { src: "/images/detalhe-orquidea.jpg", alt: "Detalhe orquídea" },
  { src: "/images/make-aplicacao.jpg", alt: "Aplicação make" },
];

const testimonials = [
  "A melhor maquiadora do mundo.",
  "Durou a festa inteira sem retoque.",
  "Paz, profissionalismo e resultado absurdo.",
  "A sensação foi de editorial, não de produção comum.",
];

export default function Home() {
  return (
    <main className="bg-[var(--ink)] text-[var(--ivory)]">
      <Reveal />
      <header className="nav-blur fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="leading-none">
            <div className="serif text-2xl tracking-[0.28em] text-[var(--champagne)]">C BEAUTY</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.4em] text-white/55">Camara Beauty</div>
          </div>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
            <a href="#sobre" className="hover:text-[var(--champagne)]">Sobre</a>
            <a href="#servicos" className="hover:text-[var(--champagne)]">Serviços</a>
            <a href="#portfolio" className="hover:text-[var(--champagne)]">Portfólio</a>
            <a href="#contato" className="hover:text-[var(--champagne)]">Contato</a>
          </nav>
          <a href="https://wa.me/5511948645727" className="btn-gold rounded-full px-5 py-3 text-xs uppercase tracking-[0.25em]">Agendar</a>
        </div>
      </header>

      <section className="relative min-h-[100svh] overflow-hidden">
        <Image src="/images/hero-makeup.png" alt="Camara Beauty" fill priority className="hero-img" />
        <div className="hero-grad" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-24 pt-32 md:pb-32">
          <div className="max-w-4xl reveal in">
            <p className="eyebrow mb-6">São Paulo • Beleza nupcial • 10 anos de experiência</p>
            <h1 className="serif max-w-4xl text-6xl leading-[0.92] md:text-8xl">
              Beleza <span className="gold">premium</span> para noivas que não querem parecer só arrumadas.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Um site que vende serviço de alto valor precisa parecer alto valor. A Camara Beauty entrega presença, naturalidade e uma assinatura visual editorial, com produção pensada para durar e fotografar lindamente.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/5511948645727" className="btn-gold rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Quero meu orçamento</a>
              <a href="#portfolio" className="btn-ghost rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Ver portfólio</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="hairline" />
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="reveal">
            <p className="eyebrow mb-4">Sobre a Gabriela</p>
            <h2 className="serif max-w-3xl text-4xl leading-tight md:text-6xl">Hair & Makeup Stylist com formação internacional e olhar de editorial.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              A Gabriela começou cedo, se formou em São Paulo, Rio e Kryolan Buenos Aires, e construiu a Camara Beauty para entregar naturalidade, visagismo e acabamento impecável — não maquiagem genérica.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Ateliê em São Paulo",
                "Atendimento a domicílio",
                "Parcelamento em até 12x",
              ].map((item) => (
                <div key={item} className="price-card rounded-3xl p-5 text-sm tracking-wide text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="tile min-h-[330px] rounded-[2rem] lg:min-h-[420px]">
              <Image src="/images/gabi-contato.jpg" alt="Gabriela" width={800} height={1100} className="h-full w-full object-cover" />
            </div>
            <div className="tile min-h-[330px] rounded-[2rem] lg:min-h-[420px]">
              <Image src="/images/gabi-produto.jpg" alt="Gabriela produto" width={800} height={1100} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="tile min-h-[260px] rounded-[2rem] lg:col-span-5">
            <Image src="/images/preparacao-make.jpg" alt="Preparação" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="tile min-h-[260px] rounded-[2rem] lg:col-span-4">
            <Image src="/images/noiva-outdoor.jpg" alt="Noiva outdoor" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="tile min-h-[260px] rounded-[2rem] lg:col-span-3">
            <Image src="/images/grupo-feliz.jpg" alt="Grupo feliz" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Serviços</p>
              <h2 className="serif text-4xl md:text-6xl">Tabela de valor que conversa com ticket de 3k.</h2>
            </div>
            <p className="max-w-xl text-white/60">Preço e percepção precisam bater. O layout agora empurra confiança, não poluição visual.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <article key={s.name} className="price-card rounded-[1.8rem] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="serif text-3xl">{s.name}</h3>
                    <p className="mt-3 max-w-sm text-white/65 leading-7">{s.desc}</p>
                  </div>
                  <div className="text-right text-[var(--champagne)]">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/40">a partir de</div>
                    <div className="mt-2 text-2xl font-medium">{s.price}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Portfólio real</p>
            <h2 className="serif text-4xl md:text-6xl">Só as melhores imagens do PDF, sem firula.</h2>
          </div>
          <p className="max-w-xl text-white/60">Escolhi imagens com glamour, textura e emoção — as que mais parecem campanha premium.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {portfolio.map((item, i) => (
            <div key={item.src} className={`tile rounded-[2rem] ${i === 0 ? "md:col-span-7 md:row-span-2 min-h-[620px]" : i === 1 ? "md:col-span-5 min-h-[300px]" : i === 2 ? "md:col-span-5 min-h-[300px]" : i === 3 ? "md:col-span-4 min-h-[300px]" : i === 4 ? "md:col-span-4 min-h-[300px]" : i === 5 ? "md:col-span-4 min-h-[300px]" : i === 6 ? "md:col-span-6 min-h-[300px]" : "md:col-span-6 min-h-[300px]"}`}>
              <Image src={item.src} alt={item.alt} width={1400} height={1100} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">Feedbacks</p>
            <h2 className="serif text-4xl md:text-6xl">Prova social sem parecer template de agência barata.</h2>
            <p className="mt-5 max-w-xl text-white/65 leading-8">A marca já tem depoimentos fortes. O site só precisava tratá-los com a mesma elegância do serviço.</p>
          </div>
          <div className="grid gap-4">
            {testimonials.map((t, i) => (
              <div key={t} className="price-card rounded-[1.6rem] p-6">
                <div className="quote-mark">“</div>
                <p className="-mt-8 pl-1 text-lg text-white/80">{t}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[var(--champagne)]">Cliente {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="tile min-h-[280px] rounded-[2rem] md:col-span-2">
            <Image src="/images/veu-noiva.jpg" alt="Véu" width={1400} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="tile min-h-[280px] rounded-[2rem]">
            <Image src="/images/detalhe-orquidea.jpg" alt="Detalhe" width={900} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Contato</p>
              <h2 className="serif text-4xl md:text-6xl">Agende antes da agenda sumir.</h2>
              <p className="mt-6 max-w-xl text-white/65 leading-8">WhatsApp: (11) 9 4864-5727 • Instagram: @camarabeauty • Atelier: Alameda Dino Bueno, 663 — Centro, São Paulo.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511948645727" className="btn-gold rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Falar no WhatsApp</a>
                <a href="https://www.instagram.com/camarabeauty/" className="btn-ghost rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Ver Instagram</a>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="tile min-h-[320px] rounded-[2rem]">
                <Image src="/images/abraco-noiva.jpg" alt="Abraço" width={1000} height={1200} className="h-full w-full object-cover" />
              </div>
              <div className="tile min-h-[320px] rounded-[2rem]">
                <Image src="/images/retrato-glam.jpg" alt="Retrato glam" width={1000} height={1200} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
