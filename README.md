# Trixon Optimizer Landing Page

Landing page profissional para o Trixon Optimizer, criada com Next.js App Router, TypeScript, TailwindCSS, Framer Motion e Lucide React.

O conteudo foi alinhado ao repositorio publico `viniciusaqueiroz/trixon-optimizer`, incluindo README, roadmap, paginas do sistema, estrategia de distribuicao Windows, QA em maquina limpa e download 0.3.4 para validacao.

## Como executar

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run build:pages
npm run start
```

## Deploy GitHub Pages

O workflow em `.github/workflows/deploy.yml` publica o site no GitHub Pages quando houver push na branch `main`.

Repositorio esperado:

```text
viniciusaqueiroz/trixon-optimizer-landing
```

URL esperada:

```text
https://viniciusaqueiroz.github.io/trixon-optimizer-landing/
```

## Estrutura

- `src/app`: rotas, layout global e estilos base.
- `src/components/layout`: Header e Footer.
- `src/components/sections`: secoes principais da landing page.
- `src/components/ui`: componentes reutilizaveis.
- `src/data`: conteudo estruturado de recursos, roadmap e FAQ.
- `src/lib`: utilitarios compartilhados.
- `public`: logo, favicon e preview visual do aplicativo.

## Observacoes

Esta landing nao inclui backend, banco de dados ou autenticacao. Os links externos apontam para a documentacao publica do projeto no GitHub. A build 0.3.4 citada no repositorio e unsigned e voltada para QA/validacao; distribuicao publica deve usar assinatura de codigo.
