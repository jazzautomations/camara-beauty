# Camara Beauty — Site Oficial

Site institucional da Camara Beauty, estúdio de maquiagem e penteado para noivas e eventos em São Paulo, fundado por Gabriela Câmara.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3**
- **Imagens** extraídas do mídia kit PDF oficial
- Deploy otimizado para **Vercel**

## Como rodar

```bash
npm install
npm run dev
```

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Vá em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Clique em **Deploy** — pronto, sem configurações extras.

## Estrutura

```
app/
├── layout.tsx     ← Metadata global (SEO, OpenGraph)
├── page.tsx       ← Página única (one-page scroll)
├── globals.css    ← Tema dark + dourado
└── favicon.svg    ← Logo "C" estilizada
public/
└── images/        ← Fotos do mídia kit + hero
```

## Personalização

- Editar textos e preços: `app/page.tsx`
- Mudar cores/tema: `tailwind.config.js` + `app/globals.css`
- Trocar imagens: substituir arquivos em `public/images/`

## SEO

Metadata em `app/layout.tsx` com:
- Title e description otimizados
- OpenGraph image
- Keywords em pt-BR
- Lang pt-BR

## Contato

- Instagram: [@camarabeauty](https://instagram.com/camarabeauty)
- WhatsApp: (11) 94864-5727
- Ateliê: Alameda Dino Bueno, 663 — São Paulo, SP
