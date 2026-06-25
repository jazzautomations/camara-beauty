import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://camarabeauty.com.br"),
  title: "Camara Beauty | Hair & Makeup Studio — São Paulo",
  description: "Maquiagem e penteado para noivas, madrinhas e eventos em São Paulo. 10 anos de experiência, produtos importados, estilo Beauty. Agende sua data.",
  keywords: ["maquiagem noiva", "penteado noiva", "maquiagem casamento", "camara beauty", "gabriela camara", "maquiagem sao paulo", "hair stylist noiva"],
  openGraph: {
    title: "Camara Beauty | Hair & Makeup Studio",
    description: "Beleza nupcial e eventos em São Paulo. 10 anos realçando a beleza única de cada mulher.",
    type: "website",
    locale: "pt_BR",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
