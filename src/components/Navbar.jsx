import { onMount, createSignal, For } from 'solid-js'
import { NavLink } from '@solidjs/router'
import { getTopics } from '../utils/api'

const Navbar = () => {
  const [topics, setTopics] = createSignal([])

  onMount(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics)
    })
  })

  return (
    <nav>
      <ul>
        <For each={topics()}>
          {topic => (
            <li>
              <NavLink href={`/articles/${topic.slug}`}>{topic.slug}</NavLink>
            </li>
          )}
        </For>
      </ul>
    </nav>
  )
}

export default Navbar
