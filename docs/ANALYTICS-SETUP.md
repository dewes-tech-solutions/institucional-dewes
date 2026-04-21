# Analytics — Guia de setup

Quando decidir instalar analytics no site, siga este guia. Duas opções recomendadas, ambas LGPD-friendly e sem cookie banner.

---

## Opção A — Plausible Analytics (recomendado)

**Por quê:** simples, pago mas barato, sem cookies, respeita privacidade por padrão, compatível com LGPD/GDPR sem banner, hospedado fora do seu stack.

**Custo:** a partir de ~US$ 9/mês (10k page views) · [plausible.io/#pricing](https://plausible.io/#pricing)

**Trial:** 30 dias grátis, sem cartão.

### Como instalar

**1. Criar conta e site**

Cadastra no [plausible.io](https://plausible.io), adiciona `dewestechsolutions.com.br` como site, anota o domínio exatamente como digitou.

**2. Adicionar snippet no HTML principal**

No arquivo `index.html` (raiz do site), **antes do `</head>`**:

```html
<script defer data-domain="dewestechsolutions.com.br"
        src="https://plausible.io/js/script.js"></script>
```

Pra habilitar também rastreamento de outbound links e file downloads (recomendado):

```html
<script defer data-domain="dewestechsolutions.com.br"
        src="https://plausible.io/js/script.outbound-links.file-downloads.js"></script>
```

**3. Adicionar também em `privacidade.html`**

Pra ter dados completos de navegação no site. Mesmo snippet, antes do `</head>`.

**4. Validar**

- Abre o site em aba anônima
- Navega algumas páginas
- Confere no dashboard do Plausible em ~30 segundos

---

## Opção B — Umami (gratuito, self-hosted)

**Por quê:** gratuito se você hospedar, open-source, funcionalidade parecida com Plausible.

**Custo:** grátis se self-hosted (requer servidor) · US$ 20/mês cloud

### Como instalar (versão cloud)

**1. Criar conta em [umami.is](https://umami.is)**, adicionar site, copiar o `data-website-id` gerado.

**2. Snippet:**

```html
<script async defer
        data-website-id="SEU_WEBSITE_ID_AQUI"
        src="https://cloud.umami.is/script.js"></script>
```

### Como instalar (self-hosted)

Se preferir self-hostar (você tem infra K8s/OCI já rodando), o [docker-compose oficial](https://github.com/umami-software/umami) sobe Umami + Postgres em uns 5 minutos. Aí o snippet aponta pro seu próprio domínio em vez de `cloud.umami.is`.

---

## Atualização obrigatória da Política de Privacidade

**Assim que ativar analytics**, edite `privacidade.html` trocando o trecho atual da seção **"03 — Dados coletados automaticamente"**.

### Antes (estado atual)

> Caso venhamos a adotar ferramentas de análise de tráfego no futuro, utilizaremos exclusivamente soluções que respeitam a privacidade por padrão, sem cookies identificadores nem fingerprinting — como **Plausible Analytics** ou **Umami**. Atualizaremos esta política antes da implementação.

### Depois (se escolher Plausible)

Substitua o bloco acima por:

```html
<li>Utilizamos <strong>Plausible Analytics</strong> para mensurar tráfego agregado do site.
A Plausible é uma ferramenta de análise privacidade-por-design: <strong>não utiliza cookies</strong>,
não rastreia visitantes individualmente, não faz fingerprinting e não compartilha dados com terceiros.
Os dados coletados são agregados (contagem de visitas, páginas mais vistas, país de origem aproximado,
referer) e não permitem identificação pessoal. Saiba mais na
<a href="https://plausible.io/privacy-focused-web-analytics" target="_blank" rel="noopener noreferrer">política de privacidade da Plausible</a>.</li>
```

### Depois (se escolher Umami)

```html
<li>Utilizamos <strong>Umami Analytics</strong> para mensurar tráfego agregado do site.
O Umami é uma solução open-source privacidade-por-design: <strong>não utiliza cookies</strong>,
não rastreia visitantes individualmente e não compartilha dados com terceiros.
Os dados coletados são totalmente anonimizados e agregados (visitas, páginas mais vistas,
país de origem aproximado, referer).</li>
```

Também atualize a seção **"08 — Cookies e tecnologias similares"**:

```html
<p>Atualmente, este site <strong>não utiliza cookies de rastreamento</strong> além
daqueles estritamente necessários ao funcionamento técnico (ex.: cookies de sessão do
provedor de hospedagem ou da Cloudflare para proteção contra fraude).</p>
<p>A ferramenta de analytics utilizada (Plausible/Umami) foi especificamente escolhida
<strong>por não usar cookies</strong>. Não há cookies de publicidade, rastreamento
comportamental ou identificação individual.</p>
```

Não esqueça de atualizar também a data no topo da política:

```html
Última atualização: [MÊS/ANO DO UPDATE] · vigência imediata
```

---

## Google Analytics — por que NÃO recomendo

1. **Cookies obrigatórios** — requer cookie banner pra estar em conformidade com LGPD
2. **Dashboard complexo demais** pro seu caso — GA4 é overkill pra um site de consultoria
3. **Compartilhamento com Google** — seus dados viram dados da Google pra melhorar ads
4. **Performance** — snippet mais pesado que Plausible/Umami
5. **Integração com IA adversa ao usuário** — fingerprinting implícito, cross-domain tracking

Se alguém te pedir pra instalar GA pelo SEO/marketing, argumente que Plausible/Umami oferecem os mesmos dados relevantes **sem criar um pesadelo de compliance**.

---

## Métricas que valem acompanhar (pro seu caso)

- **Page views / Unique visitors** — tráfego geral
- **Top pages** — que páginas convertem (provável: `/` e `/privacidade` não)
- **Referers** — de onde vêm os visitantes (LinkedIn, GitHub, Google direto?)
- **Outbound clicks** — quantos cliques no WhatsApp? Quantos no email? Quantos no GitHub?
- **Countries** — valida hipóteses sobre atendimento internacional

Para um site de consultoria B2B founder-led, o que importa é **qualidade de conversão**, não volume. Um lead bom vale mais que 10k visitantes.

---

**Pronto pra instalar?** Me chama quando decidir qual ferramenta vai usar — atualizo o HTML e a política de privacidade no mesmo commit, sem você precisar mexer em nada.
