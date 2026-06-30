# LOG-APP — G-Social SaaS

## 📌 Status Consolidado do Módulo

* Projeto Next.js 14 (App Router, TypeScript) criado em `c:\Arquivos Pablo\Arquivos Genesys Tech\Repositórios\g-social`
* Design system premium dark mode configurado em `globals.css` (tokens CSS, animações, componentes base)
* Landing Page pública funcional com: Hero, Features, How it Works, Plans, CTA, Footer
* Prisma ORM inicializado com schema multi-tenant (Client, User, Post, enums)
* BullMQ configurado com 2 filas: `media-generation` e `social-publish`
* `.env.local` criado com template de todas as variáveis necessárias
* Repositório Git conectado ao remote `https://github.com/pblcezar/g-social.git`

---

## Objetivo

SaaS de geração automática de conteúdo para redes sociais (Instagram / Facebook) com IA, voltado a clientes de SEO da Genesys Tech. Plano Starter = 1 post/semana incluso no plano de SEO.

---

## Estrutura de Dados (Prisma)

| Modelo | Finalidade |
|--------|------------|
| `Client` | Tenant principal — dados do negócio, tokens Meta, plano |
| `User` | Usuários com acesso ao painel (admin ou cliente) |
| `Post` | Registro de cada post gerado (tipo, status, mídia, agendamento) |

Enums: `Plan` (STARTER/GROWTH/SCALE), `PostType` (IMAGE/CAROUSEL/VIDEO/REEL), `PostStatus` (PENDING → PUBLISHED)

---

## Arquivos Criados / Alterados

- `src/app/globals.css` — Design system completo
- `src/app/layout.tsx` — Layout raiz com fontes Outfit + Inter e metadata SEO
- `src/app/page.tsx` — Landing Page pública
- `src/app/page.module.css` — CSS Module da landing page
- `src/lib/db.ts` — Singleton do Prisma Client
- `src/lib/queue.ts` — Configuração BullMQ (Redis)
- `prisma/schema.prisma` — Schema do banco de dados
- `.env.local` — Template de variáveis de ambiente

---

## Decisões Técnicas

* **Next.js App Router** — Padrão moderno, server components nativos, rotas de API integradas
* **CSS Modules + Vanilla CSS** — Sem Tailwind, total controle sobre o design system
* **Prisma + PostgreSQL** — Multi-tenant via `clientId` em cada entidade
* **BullMQ + Redis** — Filas separadas para evitar que a geração de mídia bloqueie a API
* **Remotion** — Para geração de vídeos programáticos (fase 2)

---

## Integrações Impactadas

- Meta Graph API (publicação Instagram/Facebook) — fase 2
- OpenAI DALL-E 3 (geração de imagens) — fase 2
- Stripe (pagamentos e planos) — fase 2
- Redis (BullMQ) — necessário antes do ambiente de produção

---

## Próximos Passos

- [ ] Configurar banco PostgreSQL (local ou Supabase/Neon)
- [ ] Rodar `npx prisma migrate dev` para criar as tabelas
- [ ] Implementar autenticação com NextAuth v5 (login/signup)
- [ ] Criar dashboard do cliente (painel pós-login)
- [ ] Implementar rota de geração de imagens com OpenAI
- [ ] Integrar Meta Graph API para publicação
- [ ] Implementar agendador de posts
