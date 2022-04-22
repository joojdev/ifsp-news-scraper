import styles from '@styles/Post.module.css'

function Post({ title, link, date }) {
  return (
    <div>
      <a className={styles.title} href={link}>
        <h2>{title}</h2>
      </a>
      <p>{date}</p>
    </div>
  )
}

export default Post