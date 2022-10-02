import { createSignal, For, createEffect } from 'solid-js'
import { useParams } from '@solidjs/router'
import { getTopicArticles } from '../utils/api'
import Article from './Article'
import Loading from './Loading'
import styles from '../App.module.css'

const Topics = () => {
  const params = useParams()

  const [articles, setArticles] = createSignal([])
  const [loading, setLoading] = createSignal(true)

  createEffect(() => {
    setLoading(true)
    getTopicArticles(params.topic).then(({ articles }) => {
      setArticles(articles)
      setLoading(false)
    })
  })

  return (
    <div className={styles.articles_container}>
      <h2>{params.topic}</h2>
      {loading() && <Loading />}
      <For each={articles()}>{article => <Article article={article} />}</For>
    </div>
  )
}

export default Topics
