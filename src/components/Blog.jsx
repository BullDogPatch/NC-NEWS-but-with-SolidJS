import { useParams } from '@solidjs/router'

const Blog = () => {
  const params = useParams()
  console.log(params)
  console.log({ ...params })
  return <div>Blog {JSON.stringify(params)}</div>
}

export default Blog
