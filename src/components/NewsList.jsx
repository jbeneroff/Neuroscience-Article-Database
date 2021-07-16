import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL_2, headers } from '../services'
import Loader from './Loader'
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'
import './List.css'


export default function NewsList() {
  const [news, setNews] = useState([])
  const [filteredData, setFilteredData] = useState(news)
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(BASE_URL_2 , { headers })
      setNews(res.data.records)
      setFilteredData(res.data.records)
    }
    fetchNews()
  }, [])

  const handleSearch = () => {
    const result = news.filter((data) => {
      return (data.fields.title.toLowerCase().includes(title.toLowerCase()))
    })
    setFilteredData(result)
  }

  const matches = filteredData.filter((item) => item.fields.title.toLowerCase().includes(title.toLowerCase()))

  if (news.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={title} id='search' type="text" placeholder='Search' onChange={(e) => setTitle(e.target.value)} />
      </form>
      <div id='list-div'>
        {matches.map((news, key) => {
          return <NewsCard key={news.id} news={news} />
          })}
      </div>
      <button className='button'>
        <Link to='/new-news' className='add-button' >Add a News Article</Link>
      </button>
    </div>
  )
}