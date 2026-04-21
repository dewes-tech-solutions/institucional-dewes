# Dewes Tech Solutions — Estrutura do projeto

Organização dos arquivos do site e materiais complementares.

---

## Estrutura de pastas

```
site/
├── index.html                  ← landing page principal
├── privacidade.html            ← política de privacidade (LGPD)
├── robots.txt                  ← diretivas para crawlers
├── sitemap.xml                 ← mapa do site
├── favicon.svg                 ← favicon principal (SVG)
├── favicon-16.png              ← fallback 16x16
├── favicon-32.png              ← fallback 32x32
├── apple-touch-icon.png        ← iOS home screen (180x180)
├── og-image.png                ← Open Graph / Twitter Card (1200x630)
│
├── assets/                     ← brand kit e assets visuais
│   ├── logo-mark.svg           ← pennant cromado (fundo escuro)
│   ├── logo-mark-white.svg     ← pennant branco (monocromático)
│   ├── logo-mark-black.svg     ← pennant preto (fundo claro)
│   ├── logo-horizontal.svg     ← lockup horizontal (fundo escuro)
│   ├── logo-horizontal-light.svg
│   ├── logo-stacked.svg        ← lockup vertical (fundo escuro)
│   ├── logo-stacked-light.svg
│   ├── wordmark.svg            ← só texto (fundo escuro)
│   ├── wordmark-light.svg
│   ├── social-avatar.svg       ← avatar 1024x1024 (fonte vetorial)
│   ├── social-avatar.png       ← avatar pronto para upload
│   ├── og-image.svg            ← fonte vetorial do OG image
│   └── showcase.png            ← screenshot do site
│
├── github/                     ← arquivos para o repo .github da org
│   ├── github-banner.svg       ← fonte vetorial do banner
│   ├── github-banner.png       ← banner pronto
│   └── github-profile-README.md
│
└── docs/                       ← documentação interna (não vai pro servidor)
    ├── README.md               ← este arquivo
    ├── LOGO-USAGE.md           ← guia de uso do brand kit
    └── ANALYTICS-SETUP.md      ← guia para ativar analytics no futuro
```

---

## Deploy do site

Os arquivos que vão para o servidor web são tudo que está na **raiz** do projeto:

- `index.html` — página principal
- `privacidade.html` — política de privacidade
- `robots.txt` e `sitemap.xml` — SEO/crawlers
- `favicon.svg`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` — ícones
- `og-image.png` — preview de link em redes sociais

URLs finais no domínio:
- `https://dewestechsolutions.com.br/`
- `https://dewestechsolutions.com.br/privacidade.html`
- `https://dewestechsolutions.com.br/robots.txt`
- `https://dewestechsolutions.com.br/sitemap.xml`

As pastas `assets/`, `github/` e `docs/` **não precisam ir para o servidor** — são materiais de suporte e brand kit.

---

## GitHub organization profile

**Arquivos:** `github/github-banner.png`, `github/github-profile-README.md`

**Setup:**
1. No GitHub, cria um repo público chamado `.github` dentro da org `dewes-tech-solutions`
   (URL final: `github.com/dewes-tech-solutions/.github`)
2. Dentro desse repo, cria a pasta `profile/`
3. Coloca o `github-profile-README.md` renomeado pra `README.md` dentro de `profile/`
4. Coloca o `github-banner.png` dentro da mesma pasta `profile/` com o nome `banner.png`
   (o README faz referência a `./banner.png`)

Estrutura final do repo:
```
.github/
└── profile/
    ├── README.md   ← github-profile-README.md renomeado
    └── banner.png  ← github-banner.png renomeado
```

---

## Analytics

Guia completo em `docs/ANALYTICS-SETUP.md`. Compara Plausible vs Umami, snippets prontos e texto exato para atualizar a Política de Privacidade.

**Não precisa fazer nada agora.** Consultar quando for ativar.

---

**Dewes Tech Solutions** · CNPJ 65.292.248/0001-19 · v2026.04
