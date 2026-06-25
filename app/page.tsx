import Image from "next/image";

const services = [
  { title: "Maquiagem", value: "R$ 380", desc: "Estilo Beauty, blindada e com acabamento premium." },
  { title: "Penteado", value: "R$ 310", desc: "Visagismo, elegância e fixação para durar o evento inteiro." },
  { title: "Combo Make + Hair", value: "R$ 590", desc: "A escolha mais pedida para madrinhas e convidadas." },
  { title: "Noiva Civil", value: "R$ 900", desc: "Make, cílios e penteado para casamento civil." },
  { title: "Noiva Light", value: "R$ 1.400", desc: "Mais completo, com mapeamento facial e atendimento premium." },
  { title: "Noiva VIP", value: "R$ 2.200", desc: "Prévia, blindagem, aplique e suporte completo no dia." },
];

const gallery = [
  "/images/pdf-page-04.jpg",
  "/images/pdf-page-05.jpg",
  "/images/pdf-page-08.jpg",
  "/images/pdf-page-10.jpg",
  "/images/pdf-page-18.jpg",
  "/images/pdf-page-19.jpg",
  "/images/pdf-page-20.jpg",
  "/images/gabriela-portrait.jpg",
];

const testimonials = [
  "A melhor maquiadora do mundo.",
  "Durou mais de 11 horas sem retoque.",
  "Transmitiu paz e profissionalismo do início ao fim.",
  "Fiquei intacta do casamento até o dia seguinte.",
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f0e8]">
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <Image src="/images/hero.jpg" alt="Camara Beauty" fill priority className="object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="uppercase tracking-[0.4em] text-[#c9a96e] text-xs md:text-sm mb-6">Camara Beauty • São Paulo</p>
            <h1 className="font-serif text-5xl md:text-8xl leading-none mb-6">
              Beleza nupcial que <span className="gold-text">realça</span> sem apagar quem você é.
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mb-10">
              10 anos de experiência, produtos importados e um atendimento pensado para noivas, madrinhas e eventos que pedem presença, elegância e resultado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/5511948645727" className="px-6 py-3 bg-[#c9a96e] text-black rounded-full font-medium hover:opacity-90 transition">Agendar pelo WhatsApp</a>
              <a href="#servicos" className="px-6 py-3 border border-white/20 rounded-full hover:border-[#c9a96e] transition">Ver serviços</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="gold-line h-px w-full opacity-60" />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="uppercase tracking-[0.3em] text-[#c9a96e] text-xs mb-4">Sobre Gabriela</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Hair & Makeup Stylist com 10 anos de estrada.</h2>
          <p className="text-white/75 text-lg leading-8 max-w-3xl mb-8">
            Gabriela começou aos 17 anos, se formou em São Paulo, Rio e Kryolan Buenos Aires, e fundou a Camara Beauty em 2016. O foco sempre foi o mesmo: entregar uma beleza natural, sofisticada e extremamente fotogênica.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-white/70">
            <div className="p-4 border border-white/10 rounded-2xl bg-white/5">Atendimento no atelier</div>
            <div className="p-4 border border-white/10 rounded-2xl bg-white/5">Atendimento a domicílio</div>
            <div className="p-4 border border-white/10 rounded-2xl bg-white/5">Parcelamento em até 12x</div>
          </div>
        </div>
        <div className="relative rounded-[2rem] overflow-hidden min-h-[420px] border border-white/10">
          <Image src="/images/sobre.jpg" alt="Gabriela Camara" fill className="object-cover" />
        </div>
      </section>

      <section id="servicos" className="section-fade py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#c9a96e] text-xs mb-3">Serviços</p>
              <h2 className="font-serif text-4xl md:text-5xl">Pacotes que vendem por si.</h2>
            </div>
            <a href="https://wa.me/5511948645727" className="hidden md:inline-flex px-5 py-3 rounded-full border border-white/15 hover:border-[#c9a96e] transition">Pedir orçamento</a>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-hover rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <span className="text-[#c9a96e] font-semibold whitespace-nowrap">{s.value}</span>
                </div>
                <p className="text-white/72 leading-7">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-[2rem] overflow-hidden border border-white/10">
            <Image src="/images/produtos.jpg" alt="Produtos importados" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-[#c9a96e] text-xs mb-4">Produtos importados</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">MAC, NYX, Estée Lauder, Dior, Fenty e mais.</h2>
            <p className="text-white/75 text-lg leading-8 mb-8">
              Aqui a maquiagem não é genérica. É pensada para durar, fotografar bem e respeitar o estilo Beauty: naturalidade, singularidade e acabamento premium.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">Maquiagem blindada</div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">Aplique para penteado</div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">Mapeamento facial</div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">Suporte para véu</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#c9a96e] text-xs mb-3">Portfólio</p>
              <h2 className="font-serif text-4xl md:text-5xl">Imagens reais do PDF e do Instagram.</h2>
            </div>
            <p className="text-white/60 max-w-md text-sm">Usei o material do mídia kit para manter a identidade original e converter melhor.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div key={src} className={`gallery-item rounded-[1.25rem] overflow-hidden border border-white/10 ${i === 0 ? 'sm:col-span-2 sm:row-span-2 min-h-[520px]' : 'min-h-[250px]'}`}>
                <Image src={src} alt={`Portfólio Camara Beauty ${i + 1}`} width={1000} height={1000} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#c9a96e] text-xs mb-4">Feedbacks</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Prova social forte. Isso vende.</h2>
            <div className="grid gap-4">
              {testimonials.map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/80">“{t}”</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-white/10">
            <Image src="/images/testimonials-bg.jpg" alt="Feedbacks Camara Beauty" width={1200} height={900} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-[2rem] overflow-hidden border border-white/10">
            <Image src="/images/contact-photo.jpg" alt="Contato" width={1200} height={900} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="uppercase tracking-[0.3em] text-[#c9a96e] text-xs mb-4">Contato</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Agende sua data antes que ela feche.</h2>
            <p className="text-white/75 text-lg leading-8 mb-8">Ateliê em São Paulo e atendimento a domicílio. Faça seu evento ficar com cara de editorial.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/5511948645727" className="px-6 py-3 bg-[#c9a96e] text-black rounded-full font-medium">WhatsApp</a>
              <a href="https://www.instagram.com/camarabeauty/" className="px-6 py-3 border border-white/15 rounded-full">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
