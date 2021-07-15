import React from 'react'
import {useParams, useHistory}  from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { headers } from '../services'
import './Detail.css'
import DeleteButton from './DeleteButton'

const BASE_URL = `https://api.airtable.com/v0/appXNlhVJ6AfbKMdN/news`

export default function NewsDetail() {

  const [news, setNews] = useState({})
  const { id } = useParams()
  // const history = useHistory()
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const fetchNews = async () => {
      const URL = `${BASE_URL}/${id}`
      const res = await axios.get(URL, { headers })
      setNews(res.data)
    }
    fetchNews()
  }, [id])

  // const handleDelete = async () => {
  //   const URL = `${BASE_URL}/${id}`
  //   await axios.delete(URL, {headers})
  //   history.push('/all-news')
  // }

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
        {isOpen && <DeleteButton
          content={
            <div>
              {/* <p>Are you sure you want to delete this article?</p>
              <p>This cannot be undone.</p>
              <button id='delete-button-popup' onClick={handleDelete}>Delete Article</button> */}
            </div>}
          handleClose={togglePopup}/>}
      </div>
    </div>
  )
}
