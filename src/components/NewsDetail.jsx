import React from 'react'
import {useParams, useHistory}  from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { headers } from '../services'

const BASE_URL = `https://api.airtable.com/v0/appXNlhVJ6AfbKMdN/news`

export default function NewsDetail() {

  const [news, setNews] = useState({})
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchNews = async () => {
      const URL = `${BASE_URL}/${id}`
      const res = await axios.get(URL, { headers })
      setNews(res.data)
    }
    fetchNews()
  }, [id])

  const handleDelete = async () => {
    const URL = `${BASE_URL}/${id}`
    await axios.delete(URL, {headers})
    history.push('/all-news')
  }

  if (!news.fields) {
    return <Loader />
  }

  return (
    <div>
      <h2>{news.fields?.title}</h2>
      <p>{news.fields?.abstract}</p>
      <a href={news.fields?.link}>Read More</a>
      <br />
      <button onClick={handleDelete}>Delete Article</button>
    </div>
  )
}