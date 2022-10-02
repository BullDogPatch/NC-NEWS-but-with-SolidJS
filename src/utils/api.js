import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-news-example.herokuapp.com/api',
})

export const getArticles = async () => {
  const { data } = await api.get(`/articles`)
  return data
}

// export const getArticles = async (sortBy, orderBy) => {
//   const { data } = await api.get(`/articles?sort_by=${sortBy}&order=${orderBy}`)
//   return data
// }

export const getTopics = async () => {
  const { data } = await api.get(`/topics`)
  return data
}

export const getTopicArticles = async topic => {
  const { data } = await api.get(`/articles?topic=${topic}`)
  return data
}
