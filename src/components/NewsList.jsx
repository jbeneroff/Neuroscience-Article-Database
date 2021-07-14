import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { headers } from '../services'
import Loader from './Loader'
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'

const BASE_URL = `https://api.airtable.com/v0/appXNlhVJ6AfbKMdN/news`

export default function NewsList() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(BASE_URL, { headers })
      setNews(res.data.records)
    }
    fetchNews()
  }, [])

  if (news.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <div>
        <Link to='/new-news'>Add an News Article</Link>
      </div>
      <div>
        {news.map((news, key) => {
          return <NewsCard key={news.id} news={news} />
          })}
      </div>
    </div>
  )
}