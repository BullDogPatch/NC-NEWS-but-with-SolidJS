import styles from '../App.module.css'

const Article = ({ article }) => {
  return (
    <div class={styles.article}>
      <h4>{article.title}</h4>
      <p>{article.body}</p>
    </div>
  )
}

export default Article
