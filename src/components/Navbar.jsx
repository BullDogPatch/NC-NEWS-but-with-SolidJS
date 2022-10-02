import { onMount, createSignal, For } from 'solid-js'
import { Link } from '@solidjs/router'
import { getTopics } from '../utils/api'

const Navbar = () => {
  const [topics, setTopics] = createSignal([])

  onMount(() => {
    getTopics().then(({ topics }) => {
      console.log(topics, 'topics')
      setTopics(topics)
    })
  })

  return (
    <nav>
      <ul>
        <For each={topics()}>
          {topic => (
            <li>
              <Link href={`/${topic.slug}`}>{topic.slug}</Link>
            </li>
          )}
        </For>
      </ul>
    </nav>
  )
}

export default Navbar
