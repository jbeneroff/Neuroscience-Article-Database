import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'

export default function NewsCard(props) {

  return (
    <Link to={`/news/${props.news.id}`} className='list'>
      <div className='article-div'>
        <h3 className='hover-link' id='list-item'>{props.news.fields.title}</h3>
      </div>
    </Link>
  )
}