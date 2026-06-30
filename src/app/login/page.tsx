import styles from "./auth.module.css";

export default function LoginPage() {
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
          <h1 className="font-display">Bem-vindo de volta</h1>
          <p>Entre na sua conta para gerenciar seus posts</p>
        </div>

        <form className={styles.form} action="#" method="post">
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
            <label htmlFor="password">
              Senha
              <a href="/esqueci-senha" className={styles.forgotLink}>
                Esqueci minha senha
              </a>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`}>
            Entrar
          </button>
        </form>

        <p className={styles.switchLink}>
          Ainda não tem conta?{" "}
          <a href="/signup">Criar conta grátis</a>
        </p>
      </div>
    </main>
  );
}
