import styles from '@styles/Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1>Notícias do IFSP São Carlos</h1>
      </header>
      <section className={styles.section}>
        {children}
      </section>
      <footer className={styles.footer}>&copy; joojdev</footer>
    </div>
  )
}

export default Layout