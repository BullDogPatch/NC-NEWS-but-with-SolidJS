// get the params from the url
import { useParams } from '@solidjs/router'
import { createSignal, For, onMount, createResource } from 'solid-js'
import { getTopicArticles } from '../utils/api'
const Topics = () => {
  const { topic } = useParams()
  console.log(topic)

  return (
    <div>
      <h1>{topic}</h1>
    </div>
  )
}

export default Topics
