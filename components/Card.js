import styles from '@styles/Card.module.css'

function Card({ title, link, thumbnail }) {
  return (
    <figure>
      <a href={link} target='_blank'>
        <img src={thumbnail} alt={'Imagem'} className={styles.thumbnail} />
      </a>
      <figcaption>
        <a href={link} target='_blank' className={styles.title}>
          {title}
        </a>
      </figcaption>
    </figure>
  )
}

export default Card