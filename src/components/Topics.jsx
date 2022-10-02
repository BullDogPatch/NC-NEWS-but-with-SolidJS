import { createSignal, For, createEffect } from 'solid-js'
import { useParams } from '@solidjs/router'
import { getTopicArticles } from '../utils/api'
import Article from './Article'
import Loading from './Loading'

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
    <>
      {loading() && <Loading />}
      <h2>{params.topic}</h2>
      <For each={articles()}>{article => <Article article={article} />}</For>
    </>
  )
}

export default Topics
