import styles from "../login/auth.module.css";

export default function SignupPage() {
  return (
    <main className={styles.authMain}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.authCard}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>G</span>
          <span className="font-display">G-Social</span>
        </a>

        <div className={styles.authHeader}>
          <h1 className="font-display">Criar sua conta</h1>
          <p>Comece a gerar conteúdo profissional com IA</p>
        </div>

        <form className={styles.form} action="#" method="post">
          <div className={styles.field}>
            <label htmlFor="name">Nome completo</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Mínimo 8 caracteres"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`}>
            Criar conta grátis
          </button>
        </form>

        <p className={styles.switchLink}>
          Já tem uma conta?{" "}
          <a href="/login">Entrar</a>
        </p>
      </div>
    </main>
  );
}
