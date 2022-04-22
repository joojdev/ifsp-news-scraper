import styles from '@styles/Center.module.css'

function Center({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Center