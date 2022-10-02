import styles from '../App.module.css'

const Article = props => {
  return (
    <div class={styles.article}>
      <h4>{props.article.title}</h4>
      <p>{props.article.body}</p>
    </div>
  )
}

export default Article
