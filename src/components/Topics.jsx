// get the params from the url
import { useParams } from '@solidjs/router'
import { createSignal, For, onMount, createResource } from 'solid-js'
import { getTopicArticles } from '../utils/api'
import Article from './Article'

const Topics = () => {
  // get the params from the url
  const params = useParams()
  console.log({ ...params }, 'params')

  return (
    <>
      <div>{JSON.stringify(params)}</div>;
      {/* <div>
        <h2>{topic}</h2>
        <For each={articles()}>{article => <Article article={article} />}</For>
      </div> */}
    </>
  )
}

export default Topics
