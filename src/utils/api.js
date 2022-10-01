import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-news-example.herokuapp.com/api',
})

export const getArticles = async (sortBy, orderBy) => {
  const { data } = await api.get(`/articles?sort_by=${sortBy}&order=${orderBy}`)
  return data
}
