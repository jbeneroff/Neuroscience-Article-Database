import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, headers } from '../services'
import Loader from './Loader'
import ArticleCard from './ArticleCard'

export default function ArticleList(article) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(BASE_URL, { headers })
      setArticles(res.data.records)
      console.log(res.data.records)
    }
    fetchArticles()
  }, [])

  // Loading View
  // if (albums.length === 0) {
  //   return <Loader />

  return (
    <div>
      {articles.map((article, key) => {
        return <ArticleCard key={article.id} article={article} />
        })}
    </div>
  )
}