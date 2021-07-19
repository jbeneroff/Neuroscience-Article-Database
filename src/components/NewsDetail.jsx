import React from 'react'
import axios from 'axios'
import {useParams}  from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL_2, headers } from '../services'
import Loader from './Loader'
import DeleteButtonNews from './DeleteButtonNews'
import './Detail.css'

export default function NewsDetail() {

  const [news, setNews] = useState({})
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const fetchNews = async () => {
      const URL = `${BASE_URL_2}/${id}`
      const res = await axios.get(URL, { headers })
      setNews(res.data)
    }
    fetchNews()
  }, [id])

  if (!news.fields) {
    return <Loader />
  }

  return (
    <div className='info'>
      <h2 id='title'>{news.fields?.title}</h2>
      <p id='abstract'>{news.fields?.abstract}</p>
      <a href={news.fields?.link} id='read-more'>Link to Article</a>
      <br />
      <div>
        <input
          id='delete-button'
          type="button"
          value="Delete Article"
          onClick={togglePopup}/>
        {isOpen && <DeleteButtonNews
          content={<div></div>}
          handleClose={togglePopup}/>}
      </div>
    </div>
  )
}
