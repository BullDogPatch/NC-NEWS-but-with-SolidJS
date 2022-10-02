import { onMount, createSignal, For } from 'solid-js'
import { Link } from '@solidjs/router'
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
        <Link href="/articles/cooking">Cooking</Link>
        <Link href="/articles/coding">Coding</Link>
        <Link href="/articles/football">Football</Link>
        {/* <Link href="/blog/js/1">Blog</Link>
        <Link href="/blog/js/1">Blog</Link> */}
      </ul>
    </nav>
  )
}

export default Navbar
