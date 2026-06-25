import Image from "next/image";
import Reveal from "./reveal";

const services = [
  {
    name: "Noiva VIP",
    price: "R$ 2.200",
    desc: "Tudo incluso: prévia com 30 dias de antecedência, maquiagem blindada, aplique, making-of e suporte completo no dia. Você chega no casamento sem nenhuma dúvida.",
  },
  {
    name: "Noiva Light",
    price: "R$ 1.400",
    desc: "Mapeamento facial, maquiagem blindada, suporte para o véu e auxílio no vestido. Experiência completa para um dia sem preocupação.",
  },
  {
    name: "Noiva Civil",
    price: "R$ 900",
    desc: "Maquiagem, cílios e penteado para o casamento civil. Elegante, leve e pronto em pouco tempo.",
  },
  {
    name: "Combo Make + Hair",
    price: "R$ 590",
    desc: "A escolha mais pedida por madrinhas e convidadas. Maquiagem e penteado num único atendimento.",
  },
  {
    name: "Maquiagem",
    price: "R$ 380",
    desc: "Acabamento editorial com produtos importados. Durou mais de 11 horas sem retoque em eventos reais.",
  },
  {
    name: "Penteado",
    price: "R$ 310",
    desc: "Visagismo, textura e fixação que seguram a noite inteira. Tranças, coques, meios-presos — tudo pensado pro seu rosto.",
  },
];

const benefits = [
  {
    title: "Maquiagem blindada",
    text: "Técnica de longa duração que aguenta emoção, calor, beijo, lágrima e festa. Você esquece que está maquiada e só vive o dia.",
  },
  {
    title: "Você no espelho",
    text: "O resultado parece você, só que no melhor dia da sua vida. Sem máscara, sem estranheza, sem aquele olhar que não é seu.",
  },
  {
    title: "Manhã sem caos",
    text: "Atendimento calmo, briefing claro e processo organizado. Você entra na produção relaxada e sai pronta — sem correria nem atraso.",
  },
];

const portfolio = [
  { src: "/images/hero-makeup.png", alt: "Maquiagem sendo aplicada em noiva", span: "md:col-span-7 md:row-span-2 min-h-[620px]" },
  { src: "/images/noiva-tranca.jpg", alt: "Noiva com trança elaborada e flores", span: "md:col-span-5 min-h-[300px]" },
  { src: "/images/gabi-penteando.png", alt: "Equipe Camara Beauty penteando cliente", span: "md:col-span-5 min-h-[300px]" },
  { src: "/images/retrato-glam.jpg", alt: "Retrato de noiva com maquiagem glam", span: "md:col-span-4 min-h-[300px]" },
  { src: "/images/veu-noiva.jpg", alt: "Ajuste do véu da noiva", span: "md:col-span-4 min-h-[300px]" },
  { src: "/images/abraco-noiva.jpg", alt: "Noiva abraçando amiga", span: "md:col-span-4 min-h-[300px]" },
];

const process = [
  {
    step: "01",
    title: "Conversa franca",
    text: "Você conta sobre o evento, suas referências, seu vestido e o que quer sentir no dia. A gente ouve de verdade.",
  },
  {
    step: "02",
    title: "Prévia e alinhamento",
    text: "No Noiva VIP, a gente testa maquiagem e penteado com até 30 dias de antecedência. No dia do casamento, nada é surpresa.",
  },
  {
    step: "03",
    title: "O dia, sem ruído",
    text: "Produção calma, precisa e focada em durabilidade. Você sai pronta, leve e confiante para o seu momento.",
  },
];

const testimonials = [
  {
    quote: "A maquiagem durou mais de 11 horas sem nenhum retoque. Fiquei intacta do casamento até o dia seguinte.",
    author: "Noiva",
  },
  {
    quote: "Transmitiu paz e profissionalismo do início ao fim. Todos os convidados elogiaram.",
    author: "Madrinha",
  },
  {
    quote: "A melhor maquiadora do mundo. Já indiquei para sogra, madrinhas e amigas.",
    author: "Cliente recorrente",
  },
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
        <Image src="/images/hero-makeup.png" alt="Maquiagem sendo aplicada em noiva" fill priority className="hero-img" />
        <div className="hero-grad" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-24 pt-32 md:pb-32">
          <div className="max-w-4xl reveal in">
            <p className="eyebrow mb-6">São Paulo • Beleza nupcial desde 2016</p>
            <h1 className="serif max-w-4xl text-6xl leading-[0.92] md:text-8xl">
              No dia em que todos vão olhar pra você, a maquiagem precisa durar.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Camara Beauty. Maquiagem blindada, penteado com visagismo e uma manhã sem correria — pra você chegar no casamento com calma, presença e o mesmo rosto lindo até o fim da festa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/5511948645727" className="btn-gold rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Reservar minha data</a>
              <a href="#portfolio" className="btn-ghost rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Ver trabalhos reais</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            "10 anos de experiência",
            "Formação internacional",
            "Produtos importados",
            "Ateliê e domicílio",
          ].map((item) => (
            <div key={item} className="price-card rounded-3xl px-5 py-4 text-sm tracking-wide text-white/75">{item}</div>
          ))}
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="reveal">
            <p className="eyebrow mb-4">Sobre a Camara Beauty</p>
            <h2 className="serif max-w-3xl text-4xl leading-tight md:text-6xl">Beleza que parece natural, só que na sua melhor versão.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              A Camara Beauty nasceu em 2016 com uma obsessão simples: fazer você se reconhecer no espelho e amar o que vê. São 10 anos de mercado, formação em São Paulo, Rio e na Kryolan em Buenos Aires.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
              No ateliê da Alameda Dino Bueno ou onde o seu casamento for, o trabalho é o mesmo: reduzir sua ansiedade, alinhar cada detalhe e entregar um resultado que aguente a festa inteira.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="tile min-h-[330px] rounded-[2rem] lg:min-h-[420px]">
              <Image src="/images/gabi-contato.jpg" alt="Camara Beauty" width={800} height={1100} className="h-full w-full object-cover" />
            </div>
            <div className="tile min-h-[330px] rounded-[2rem] lg:min-h-[420px]">
              <Image src="/images/gabi-produto.jpg" alt="Aplicação de produto importado" width={800} height={1100} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="tile min-h-[260px] rounded-[2rem] lg:col-span-5">
            <Image src="/images/preparacao-make.jpg" alt="Preparação de maquiagem" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="tile min-h-[260px] rounded-[2rem] lg:col-span-4">
            <Image src="/images/noiva-outdoor.jpg" alt="Noiva em sessão de fotos externa" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="tile min-h-[260px] rounded-[2rem] lg:col-span-3">
            <Image src="/images/grupo-feliz.jpg" alt="Grupo de madrinhas" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-4">Por que Camara Beauty</p>
              <h2 className="serif text-4xl md:text-6xl">Pra você viver o dia. Não ficar preocupada com ele.</h2>
            </div>
            <p className="max-w-xl text-white/60">Sinal de 50% pra reservar a data. Saldo no dia anterior. Parcelamento em até 12x. Tudo pelo WhatsApp.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((b) => (
              <article key={b.title} className="price-card rounded-[1.8rem] p-7">
                <div className="eyebrow mb-4">{b.title}</div>
                <p className="text-white/70 leading-8">{b.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
            <p className="eyebrow mb-4">Portfólio</p>
            <h2 className="serif text-4xl md:text-6xl">Noivas reais. Resultados que duraram a noite inteira.</h2>
          </div>
          <p className="max-w-xl text-white/60">Cada foto é de um atendimento real da Camara Beauty. Sem banco de imagens, sem filtro.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {portfolio.map((item) => (
            <div key={item.src} className={`tile rounded-[2rem] ${item.span}`}>
              <Image src={item.src} alt={item.alt} width={1400} height={1100} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">Quem já viveu</p>
            <h2 className="serif text-4xl md:text-6xl">O que as noivas dizem depois do sim.</h2>
          </div>
          <div className="grid gap-4">
            {testimonials.map((t) => (
              <div key={t.quote} className="price-card rounded-[1.6rem] p-6">
                <div className="quote-mark">&ldquo;</div>
                <p className="-mt-8 pl-1 text-lg text-white/80">{t.quote}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[var(--champagne)]">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="tile min-h-[280px] rounded-[2rem] md:col-span-2">
            <Image src="/images/veu-noiva.jpg" alt="Ajuste do véu" width={1400} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="tile min-h-[280px] rounded-[2rem]">
            <Image src="/images/detalhe-orquidea.jpg" alt="Detalhe de orquídea no penteado" width={900} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow mb-4">Como funciona</p>
              <h2 className="serif text-4xl md:text-6xl">Um caminho simples para o dia ficar leve.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {process.map((p) => (
                <article key={p.step} className="price-card rounded-[1.6rem] p-6">
                  <div className="text-[var(--champagne)] text-xs uppercase tracking-[0.3em]">{p.step}</div>
                  <h3 className="serif mt-4 text-2xl">{p.title}</h3>
                  <p className="mt-4 text-white/65 leading-7">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Contato</p>
              <h2 className="serif text-4xl md:text-6xl">Sua data pode já estar quase fechando.</h2>
              <p className="mt-6 max-w-xl text-white/65 leading-8">
                WhatsApp: (11) 9 4864-5727<br />
                Instagram: @camarabeauty<br />
                Ateliê: Alameda Dino Bueno, 663 — Centro, São Paulo
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511948645727" className="btn-gold rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Falar no WhatsApp</a>
                <a href="https://www.instagram.com/camarabeauty/" className="btn-ghost rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Ver Instagram</a>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="tile min-h-[320px] rounded-[2rem]">
                <Image src="/images/abraco-noiva.jpg" alt="Noiva abraçando amiga" width={1000} height={1200} className="h-full w-full object-cover" />
              </div>
              <div className="tile min-h-[320px] rounded-[2rem]">
                <Image src="/images/retrato-glam.jpg" alt="Retrato de noiva" width={1000} height={1200} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
