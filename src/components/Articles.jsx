import { createSignal, onMount, For } from 'solid-js'
import { getArticles } from '../utils/api'
import Article from './Article'
import Loading from './Loading'
import styles from '../App.module.css'

const Articles = () => {
  const [articles, setArticles] = createSignal([])
  const [loading, setLoading] = createSignal(true)

  onMount(async () => {
    const { articles } = await getArticles()
    setArticles(articles)
    setLoading(false)
  })

  return (
    <>
      <div className={styles.articles_container}>
        {loading() && <Loading />}
        <h2 className={styles.articles_heading}>Articles</h2>
        <For each={articles()}>{article => <Article article={article} />}</For>
      </div>
    </>
  )
}

export default Articles
