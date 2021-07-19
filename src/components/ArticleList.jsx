import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL, headers } from '../services'
import Loader from './Loader'
import ArticleCard from './ArticleCard'

import './List.css'

export default function ArticleList() {
  const [articles, setArticles] = useState([])
  const [filteredData, setFilteredData] = useState(articles)
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(BASE_URL, { headers })
      setArticles(res.data.records)
      setFilteredData(res.data.records)
    }
    fetchArticles()
  }, [])

  const handleSearch = () => {
    const result = articles.filter((data) => {
      return (data.fields.title.toLowerCase().includes(title.toLowerCase()))
    })
    setFilteredData(result)
  }

  const matches = filteredData.filter((item) => item.fields.title.toLowerCase().includes(title.toLowerCase()))
  
  if (articles.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={title} id='search' type="text" placeholder='Search' onChange={(e) => setTitle(e.target.value)} />
      </form>
      <div id='list-div'>
        {matches.map((article, key) => {
          return <ArticleCard key={article.id} article={article} />
        })}
      </div>
      <button className='button'>
        <Link to='/new-article' className='add-button' >Add a Journal Article</Link>
      </button>
    </div>
  )
}