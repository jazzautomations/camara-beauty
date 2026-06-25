import Image from "next/image";
import Reveal from "./reveal";

const services = [
  { name: "Noiva VIP", price: "R$ 2.200", desc: "Prévia, blindagem, aplique e presença total no dia. A noiva chega pronta e sai sem preocupação." },
  { name: "Noiva Light", price: "R$ 1.400", desc: "Maquiagem blindada, mapeamento facial, suporte para véu e atendimento premium." },
  { name: "Noiva Civil", price: "R$ 900", desc: "Make, cílios e penteado para o casamento civil. Elegante, leve e duradouro." },
  { name: "Combo Make + Hair", price: "R$ 590", desc: "Para madrinhas e convidadas que querem aparecer lindas nas fotos sem exagero." },
  { name: "Maquiagem", price: "R$ 380", desc: "Acabamento editorial, produtos importados e fixação de longa duração." },
  { name: "Penteado", price: "R$ 310", desc: "Visagismo, textura e estrutura que seguram a noite inteira." },
];

const portfolio = [
  { src: "/images/hero-makeup.png", alt: "Maquiagem sendo aplicada em noiva", span: "md:col-span-7 md:row-span-2 min-h-[620px]" },
  { src: "/images/noiva-tranca.jpg", alt: "Noiva com trança elaborada e flores", span: "md:col-span-5 min-h-[300px]" },
  { src: "/images/gabi-penteando.png", alt: "Gabriela penteando cliente", span: "md:col-span-5 min-h-[300px]" },
  { src: "/images/veu-noiva.jpg", alt: "Ajuste do véu da noiva", span: "md:col-span-4 min-h-[300px]" },
  { src: "/images/retrato-glam.jpg", alt: "Retrato glam da noiva", span: "md:col-span-4 min-h-[300px]" },
  { src: "/images/abraco-noiva.jpg", alt: "Abraço de noiva", span: "md:col-span-4 min-h-[300px]" },
  { src: "/images/detalhe-orquidea.jpg", alt: "Detalhe de orquídea no penteado", span: "md:col-span-6 min-h-[300px]" },
  { src: "/images/make-aplicacao.jpg", alt: "Aplicação de maquiagem", span: "md:col-span-6 min-h-[300px]" },
];

const testimonials = [
  { quote: "A maquiagem durou mais de 11 horas sem nenhum retoque. Fiquei intacta do casamento até o dia seguinte.", author: "Noiva" },
  { quote: "Eu fiquei me reconhecendo no espelho e ainda assim parecia muito mais elegante nas fotos.", author: "Cliente" },
  { quote: "Transmite paz. A manhã ficou leve, organizada e sem correria.", author: "Madrinha" },
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
              O dia mais fotografado da sua vida merece uma beleza que não te traia.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              A maior dor da noiva não é só "ficar bonita". É não derreter, não borrar, não se estranhar no espelho e ainda sair do casamento com a sensação de que finalmente apareceu do jeito certo. É isso que a Camara Beauty entrega.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/5511948645727" className="btn-gold rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Quero reservar minha data</a>
              <a href="#portfolio" className="btn-ghost rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Ver resultados reais</a>
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
            <p className="eyebrow mb-4">A profissional</p>
            <h2 className="serif max-w-3xl text-4xl leading-tight md:text-6xl">A Gabriela não faz só maquiagem. Ela comanda a presença da noiva.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              São 10 anos no mercado, formação em São Paulo, Rio e Kryolan Buenos Aires, e uma obsessão simples: criar beleza que pareça natural, segura e valiosa nas fotos. Sem maquiagem comum. Sem acabamento que envelhece a cliente.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
              No ateliê ou no local do casamento, o processo é pensado pra reduzir ansiedade, evitar surpresas e deixar a manhã com clima de cuidado — não de correria.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "10 anos de experiência",
                "Kryolan Buenos Aires",
                "Produtos importados",
              ].map((item) => (
                <div key={item} className="price-card rounded-3xl p-5 text-sm tracking-wide text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="tile min-h-[330px] rounded-[2rem] lg:min-h-[420px]">
              <Image src="/images/gabi-contato.jpg" alt="Gabriela Câmara" width={800} height={1100} className="h-full w-full object-cover" />
            </div>
            <div className="tile min-h-[330px] rounded-[2rem] lg:min-h-[420px]">
              <Image src="/images/gabi-produto.jpg" alt="Gabriela aplicando produto" width={800} height={1100} className="h-full w-full object-cover" />
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
              <p className="eyebrow mb-4">Serviços</p>
              <h2 className="serif text-4xl md:text-6xl">Pacotes construídos pra reduzir risco e aumentar confiança.</h2>
            </div>
            <p className="max-w-xl text-white/60">A compra da noiva é emocional: ela compra tranquilidade, fotos boas e a certeza de não se arrepender.</p>
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
                    <div className="text-xs uppercase tracking-[0.28em] text-white/40">investimento</div>
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
            <h2 className="serif text-4xl md:text-6xl">Fotos reais, emoção real, acabamento de campanha.</h2>
          </div>
          <p className="max-w-xl text-white/60">A galeria foi curada para mostrar textura, elegância e presença. O que vende aqui é confiança visual.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {portfolio.map((item) => (
            <div key={item.src} className={`tile rounded-[2rem] ${item.span}`}>
              <Image src={item.src} alt={item.alt} width={1400} height={1100} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">Prova social</p>
            <h2 className="serif text-4xl md:text-6xl">O que a cliente precisa sentir antes de comprar.</h2>
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

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="tile min-h-[280px] rounded-[2rem] md:col-span-2">
            <Image src="/images/veu-noiva.jpg" alt="Ajuste do véu" width={1400} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="tile min-h-[280px] rounded-[2rem]">
            <Image src="/images/detalhe-orquidea.jpg" alt="Detalhe de orquídea no penteado" width={900} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Contato</p>
              <h2 className="serif text-4xl md:text-6xl">Se a data importa, a decisão não pode esperar.</h2>
              <p className="mt-6 max-w-xl text-white/65 leading-8">
                WhatsApp: (11) 9 4864-5727<br />
                Instagram: @camarabeauty<br />
                Ateliê: Alameda Dino Bueno, 663 — Centro, São Paulo
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5511948645727" className="btn-gold rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Quero falar sobre minha data</a>
                <a href="https://www.instagram.com/camarabeauty/" className="btn-ghost rounded-full px-7 py-4 text-sm uppercase tracking-[0.25em]">Ver mais trabalhos</a>
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
