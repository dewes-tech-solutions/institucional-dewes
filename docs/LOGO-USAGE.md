# Dewes Tech Solutions — Kit de Logo

Guia rápido de quando usar cada arquivo deste kit.

---

## Mark (pennant sozinho)

O símbolo isolado, sem wordmark. Usa quando o espaço é pequeno ou quando o nome da marca já está estabelecido no contexto (ex.: favicon, avatar, carimbo, watermark em imagens).

| Arquivo | Quando usar |
|---|---|
| **`logo-mark.svg`** | Versão principal — pennant com gradiente cromado. Usa sempre que houver fundo escuro (#0A0A0A ou mais escuro) e espaço pra exibir o detalhe metálico. É a assinatura visual da marca. |
| **`logo-mark-white.svg`** | Impressão monocromática em fundo escuro, contextos onde o gradiente não renderiza bem (merchandising simples, gravação a laser, bordado). |
| **`logo-mark-black.svg`** | Fundo claro (papel timbrado, NF-e, contratos impressos em branco). Também serve pra stamps monocromáticos. |

## Lockup horizontal (pennant + wordmark lado a lado)

Formato padrão pra cabeçalhos de site, assinaturas de email, slides de apresentação, apresentação institucional.

| Arquivo | Quando usar |
|---|---|
| **`logo-horizontal.svg`** | Fundo escuro (#0A0A0A a #1C1C1E). É a versão principal pra vitrine — cromado + off-white + cinza muted. |
| **`logo-horizontal-light.svg`** | Fundo claro (branco, cinza muito claro, papel). Texto preto puro + cinza escuro pra "tech solutions". |

## Lockup vertical (pennant em cima, wordmark embaixo)

Ideal pra espaços quadrados ou verticais — posts de redes sociais, banners laterais, capa de PDF.

| Arquivo | Quando usar |
|---|---|
| **`logo-stacked.svg`** | Fundo escuro. |
| **`logo-stacked-light.svg`** | Fundo claro. |

## Wordmark (só texto, sem pennant)

Quando o pennant já está visível em outro lugar (ex.: pennant no canto do slide e wordmark no pé da página), ou quando o espaço horizontal é tão pouco que o pennant prejudica a legibilidade do nome.

| Arquivo | Quando usar |
|---|---|
| **`wordmark.svg`** | Fundo escuro. |
| **`wordmark-light.svg`** | Fundo claro. |

## Favicon

Ícone pequeno pra aba do navegador.

| Arquivo | Onde colocar |
|---|---|
| **`favicon.svg`** | Arquivo principal, moderno. `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` no `<head>` do site. |
| **`favicon-16.png`** | Fallback pra navegadores antigos (IE, alguns Edge legado). `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">` |
| **`favicon-32.png`** | Fallback tamanho médio. `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">` |
| **`apple-touch-icon.png`** | iOS — aparece quando o usuário adiciona o site à home screen do iPhone/iPad. 180×180px. `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` |

## Avatar social

Pra perfis em LinkedIn, X, Instagram, GitHub da organização.

| Arquivo | Onde usar |
|---|---|
| **`social-avatar.svg`** | Fonte vetorial 1024×1024 — pra editar se precisar. |
| **`social-avatar.png`** | Pronto pra upload direto. 1024×1024, formato que todas as plataformas aceitam. |

## OG image (preview de link em redes)

Não está neste kit — já foi gerada separadamente como `og-image.png` e `og-image.svg` no pacote do site. Usada nas meta tags `og:image` e `twitter:image`.

---

## Regras de uso

**Espaço de respiro (clear space):**
Sempre deixa um espaço mínimo em volta do logo equivalente à **altura do pennant** (ou, em lockups, à altura do "D" do "dewes"). Nada de elementos, textos ou bordas invadindo esse espaço.

**Tamanho mínimo:**
- Mark sozinho: **24px de altura**. Abaixo disso, o detalhe vazado interno some.
- Lockup horizontal: **40px de altura**.
- Lockup vertical: **64px de altura**.
- Favicon: já otimizado pra 16/32px.

**Fundo:**
- Versões chrome só em fundos escuros. Chrome em fundo claro some.
- Versões black só em fundos claros.
- Em fundos com muito contraste ou imagem, prefira as versões **monocromáticas** (white ou black) que mantêm legibilidade.

**Nunca:**
- Achatar, esticar, inclinar ou distorcer o logo.
- Trocar as cores do gradiente cromado por cores arbitrárias (ex.: verde, azul, roxo).
- Adicionar sombra drop, bordas ou efeitos que não estejam nos arquivos originais.
- Separar o pennant do wordmark nos lockups horizontais/verticais pra remontar outra composição.
- Usar o pennant sobreposto em texto ou imagens de pessoas.
- Rotacionar o pennant (ele tem orientação fixa, ponta à direita).

**Fontes:**
Os arquivos SVG usam **Geist Semibold** pra "dewes" e **Geist Mono Regular** pra "tech solutions" (com fallback stack que inclui Inter, Helvetica Neue, Arial e monospace padrão). Pra renderização pixel-perfect em ambientes externos (apresentações, vídeos, gravuras), converta o texto em paths usando Inkscape/Illustrator antes de exportar.

---

## Paleta oficial

- **Grafite (fundo primário):** `#0A0A0A`
- **Grafite (fundo superfície):** `#121214` a `#1C1C1E`
- **Off-white (texto primário em escuro):** `#F0F0F0`
- **Cinza muted (texto secundário em escuro):** `#8A8A8A`
- **Cinza muted (texto secundário em claro):** `#6E6E6E`
- **Cromado (gradiente):** `#F8F8F8` → `#FFFFFF` → `#6E6E6E` → `#BEBEBE` (linear 135°)

---

**Kit v1 · abril/2026 · dewestechsolutions.com.br**
