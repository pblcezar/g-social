import styles from "./page.module.css";

const features = [
  {
    icon: "🖼️",
    title: "Imagens com IA",
    description:
      "Gere imagens profissionais e únicas para cada post usando DALL-E 3. Identidade visual do seu negócio sempre preservada.",
    tag: "DALL-E 3",
  },
  {
    icon: "📱",
    title: "Carrosséis Automáticos",
    description:
      "Crie carrosséis de alto engajamento com layout personalizado, slides estruturados e sua marca aplicada automaticamente.",
    tag: "Alta Conversão",
  },
  {
    icon: "🎬",
    title: "Vídeos & Reels",
    description:
      "Produza Reels com animações, transições e trilha sonora. Conteúdo em vídeo de forma totalmente automática e escalável.",
    tag: "Remotion",
  },
  {
    icon: "📅",
    title: "Agendamento Inteligente",
    description:
      "Publique diretamente no Instagram e Facebook no melhor horário para o seu público, sem precisar abrir o celular.",
    tag: "Meta API",
  },
  {
    icon: "✍️",
    title: "Legendas & Hashtags",
    description:
      "Geração de legendas otimizadas para SEO local, com as melhores hashtags do seu nicho, integradas com IA.",
    tag: "GPT-4o",
  },
  {
    icon: "📊",
    title: "Relatório de Resultados",
    description:
      "Acompanhe alcance, engajamento e crescimento de cada post diretamente no painel, com histórico completo.",
    tag: "Analytics",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Incluso no SEO",
    period: "",
    description: "Para clientes ativos do plano de SEO Genesys Tech.",
    features: [
      "1 post por semana",
      "Imagens geradas com IA",
      "Legenda + hashtags automáticas",
      "Publicação manual (você aprova)",
      "Suporte via WhatsApp",
    ],
    cta: "Já é cliente? Acesse",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "R$ 297",
    period: "/mês",
    description: "Para negócios que querem presença constante e acelerada.",
    features: [
      "4 posts por semana",
      "Imagens + Carrosséis com IA",
      "Vídeos e Reels mensais",
      "Publicação automática",
      "Relatório semanal de desempenho",
      "Gestão completa do feed",
    ],
    cta: "Quero o Growth",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "R$ 597",
    period: "/mês",
    description: "Para marcas que precisam dominar as redes sociais.",
    features: [
      "Posts diários",
      "Múltiplas plataformas",
      "Stories automáticos",
      "Estratégia de conteúdo mensal",
      "A/B test de criativos",
      "Account manager dedicado",
    ],
    cta: "Falar com especialista",
    highlighted: false,
  },
];

export default function LandingPage() {
  return (
    <main>
      {/* ==============================
          NAVBAR
      ============================== */}
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navInner}>
            <div className={styles.navLogo}>
              <span className={styles.navLogoIcon}>G</span>
              <span className="font-display">G-Social</span>
            </div>
            <div className={styles.navLinks}>
              <a href="#features">Funcionalidades</a>
              <a href="#plans">Planos</a>
              <a href="#contact">Contato</a>
            </div>
            <div className={styles.navActions}>
              <a href="/login" className="btn btn-outline btn-sm">
                Entrar
              </a>
              <a href="/signup" className="btn btn-primary btn-sm">
                Começar grátis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ==============================
          HERO
      ============================== */}
      <section className={styles.hero}>
        {/* Background glows */}
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />

        <div className="container">
          <div className={styles.heroContent}>
            <div className="animate-fade-up">
              <span className="badge badge-brand">
                <span>✨</span>
                Powered by IA Generativa
              </span>
            </div>

            <h1 className={`${styles.heroTitle} font-display animate-fade-up-delay-1`}>
              Conteúdo para Redes Sociais{" "}
              <span className="text-gradient">gerado por IA</span>,{" "}
              automaticamente.
            </h1>

            <p className={`${styles.heroSubtitle} animate-fade-up-delay-2`}>
              Transformamos sua estratégia de SEO em presença digital completa. Imagens, carrosséis
              e vídeos profissionais para Instagram e Facebook, sem esforço.
            </p>

            <div className={`${styles.heroCta} animate-fade-up-delay-3`}>
              <a href="/signup" className="btn btn-primary btn-lg">
                Começar agora — é grátis
              </a>
              <a href="#features" className="btn btn-outline btn-lg">
                Ver como funciona
              </a>
            </div>

            <div className={`${styles.heroStats} animate-fade-up-delay-3`}>
              <div className={styles.stat}>
                <strong>+200</strong>
                <span>Posts gerados</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <strong>+50</strong>
                <span>Clientes ativos</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <strong>3x</strong>
                <span>Mais engajamento</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`${styles.heroVisual} animate-float`}>
            <div className={styles.mockupCard}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDot} style={{ background: "#FF5F57" }} />
                <div className={styles.mockupDot} style={{ background: "#FFBD2E" }} />
                <div className={styles.mockupDot} style={{ background: "#28C840" }} />
                <span className={styles.mockupTitle}>G-Social — Gerador</span>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.mockupPrompt}>
                  <span className={styles.mockupLabel}>Prompt</span>
                  <p className={styles.mockupText}>
                    &ldquo;Post de segunda-feira para clínica odontológica, foco em clareamento dental, tom profissional&rdquo;
                  </p>
                </div>
                <div className={styles.mockupOutput}>
                  <div className={styles.mockupImagePreview}>
                    <div className={styles.mockupImageGradient} />
                    <span>🦷 Sorriso Perfeito</span>
                  </div>
                  <div className={styles.mockupMeta}>
                    <div className={styles.mockupMetaRow}>
                      <span className={styles.mockupMetaLabel}>Formato</span>
                      <span className={styles.mockupMetaBadge}>Carrossel • 5 slides</span>
                    </div>
                    <div className={styles.mockupMetaRow}>
                      <span className={styles.mockupMetaLabel}>Plataforma</span>
                      <span className={styles.mockupMetaBadge}>Instagram + Facebook</span>
                    </div>
                    <div className={styles.mockupMetaRow}>
                      <span className={styles.mockupMetaLabel}>Status</span>
                      <span className={styles.mockupStatusBadge}>✓ Pronto para publicar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          FEATURES
      ============================== */}
      <section id="features" className={`section ${styles.features}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge badge-brand">Funcionalidades</span>
            <h2 className="font-display">
              Tudo que você precisa para{" "}
              <span className="text-gradient">dominar as redes sociais</span>
            </h2>
            <p>
              Uma plataforma completa para criar, agendar e publicar conteúdo profissional com
              inteligência artificial, integrada ao seu plano de SEO.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, i) => (
              <div key={i} className={`card ${styles.featureCard}`}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <span className={`badge badge-brand ${styles.featureTag}`}>{feature.tag}</span>
                <h3 className="font-display">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          HOW IT WORKS
      ============================== */}
      <section className={`section ${styles.howItWorks}`}>
        <div className={styles.howGlow} />
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge badge-brand">Como funciona</span>
            <h2 className="font-display">
              De zero ao post publicado em{" "}
              <span className="text-gradient">3 passos</span>
            </h2>
          </div>

          <div className={styles.steps}>
            {[
              {
                n: "01",
                title: "Configure seu perfil",
                desc: "Informe o nicho, identidade visual e tom de voz do negócio. Feito uma vez, aplicado em todos os posts.",
              },
              {
                n: "02",
                title: "A IA cria o conteúdo",
                desc: "Nossa plataforma gera automaticamente a imagem, o texto e as hashtags ideais para o seu público.",
              },
              {
                n: "03",
                title: "Aprove e publique",
                desc: "Revise, ajuste se quiser, e publique diretamente no Instagram e Facebook com um clique.",
              },
            ].map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNumber}>{step.n}</div>
                <h3 className="font-display">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          PLANS
      ============================== */}
      <section id="plans" className={`section ${styles.plans}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="badge badge-brand">Planos</span>
            <h2 className="font-display">
              Escolha o plano ideal para{" "}
              <span className="text-gradient">o seu negócio</span>
            </h2>
            <p>Comece grátis como cliente de SEO e escale conforme o crescimento da sua marca.</p>
          </div>

          <div className={styles.plansGrid}>
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`card ${styles.planCard} ${plan.highlighted ? styles.planHighlighted : ""}`}
              >
                {plan.highlighted && (
                  <div className={styles.planBadgePop}>🔥 Mais popular</div>
                )}
                <div className={styles.planHeader}>
                  <h3 className="font-display">{plan.name}</h3>
                  <div className={styles.planPrice}>
                    <strong>{plan.price}</strong>
                    <span>{plan.period}</span>
                  </div>
                  <p>{plan.description}</p>
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.checkIcon}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.highlighted ? "/signup" : "#contact"}
                  className={`btn ${plan.highlighted ? "btn-primary" : "btn-outline"} btn-lg`}
                  style={{ width: "100%", marginTop: "auto" }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          CTA FINAL
      ============================== */}
      <section id="contact" className={`section-sm ${styles.ctaSection}`}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="badge badge-brand">Genesys Tech</span>
            <h2 className="font-display">
              Pronto para transformar sua{" "}
              <span className="text-gradient">presença digital?</span>
            </h2>
            <p>
              Já é cliente de SEO? Sua conta no G-Social já está disponível. Acesse agora e configure
              seu primeiro post em minutos.
            </p>
            <div className={styles.ctaActions}>
              <a href="/signup" className="btn btn-primary btn-lg">
                Criar minha conta grátis
              </a>
              <a
                href="https://wa.me/55SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          FOOTER
      ============================== */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div className={styles.navLogo}>
              <span className={styles.navLogoIcon}>G</span>
              <span className="font-display">G-Social</span>
            </div>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} Genesys Tech. Todos os direitos reservados.
            </p>
            <div className={styles.footerLinks}>
              <a href="/privacidade">Privacidade</a>
              <a href="/termos">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
