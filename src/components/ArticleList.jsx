import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, headers } from '../services'
import Loader from './Loader'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'
import './List.css'

export default function ArticleList() {
  const [articles, setArticles] = useState([])
  const [filteredData, setFilteredData] = useState(articles)

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(BASE_URL, { headers })
      setArticles(res.data.records)
      setFilteredData(res.data.records)
    }
    fetchArticles()
  }, [])

  const handleSearch = (e) => {
    let input = e.target.value.toLowerCase()
    let result = []
    console.log(input)
    result = articles.filter((data) => {
      return data.fields.title.search(input) !== -1
    })
    console.log(result)
    setFilteredData(result)
  }

  if (articles.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <input id='search' type="text" placeholder='Search' onChange={(e) => handleSearch(e)} />
      <div id='list-div'>
        {filteredData.map((article, key) => {
          return <ArticleCard key={article.id} article={article} />
          })}
      </div>
      <button className='button'>
        <Link to='/new-article' className='add-button' >Add a Journal Article</Link>
      </button>
    </div>
  )
}