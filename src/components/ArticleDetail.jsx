import React from 'react'
import {useParams, useHistory}  from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { BASE_URL, headers } from '../services'

export default function ArticleDetail() {

  const [article, setArticle] = useState({})
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchArticle = async () => {
      const URL = `${BASE_URL}/${id}`
      const res = await axios.get(URL, { headers })
      setArticle(res.data)
    }
    fetchArticle()
  }, [id])

  const handleDelete = async () => {
    const URL = `${BASE_URL}/${id}`
    await axios.delete(URL, {headers})
    history.push('/all-articles')
  }

  if (!article.fields) {
    return <Loader />
  }

  return (
    <div>
      <h2>{article.fields?.title}</h2>
      <h3>{article.fields?.authors}</h3>
      <p>{article.fields?.abstract}</p>
      <a href={article.fields?.link}>Read More</a>
      <br />
      <button onClick={handleDelete}>Delete Article</button>
    </div>
  )
}
