import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, headers } from '../services'
import Loader from './Loader'
import ArticleDetail from './ArticleDetail'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'

export default function ArticleList(article) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(BASE_URL, {
        headers
      })
      setArticles(res.data.records)
      console.log(res.data.records)
    }
    fetchArticles()
  }, [])

  // Loading View
  // if (albums.length === 0) {
  //   return <Loader />

  // Display List
  return (
    <div>
      {articles.map(article => {
        return <ArticleCard article={article} />
        })}
    </div>
  )
}