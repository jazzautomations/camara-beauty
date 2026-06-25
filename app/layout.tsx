import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://camarabeauty.com.br"),
  title: "CAMARABEAUTY · Beauty Salon | Maquiagem e Penteado Nupcial — São Paulo",
  description: "Realce sua melhor versão. Maquiagem blindada, penteado com visagismo e atendimento premium para noivas, madrinhas e eventos em São Paulo.",
  keywords: ["maquiagem noiva", "penteado noiva", "maquiagem casamento", "camarabeauty", "camara beauty", "maquiagem sao paulo", "hair stylist noiva", "beauty salon"],
  openGraph: {
    title: "CAMARABEAUTY · Beauty Salon",
    description: "Beleza · Confiança · Transformação. Maquiagem e penteado nupcial em São Paulo.",
    type: "website",
    locale: "pt_BR",
    images: ["/images/hero-makeup.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0D0D0D" />
      </head>
      <body>{children}</body>
    </html>
  );
}
