import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'

export default function ArticleCard(props) {

  return (
    <Link to={`/articles/${props.article.id}`} className='list'>
      <div className='article-div'>
        <h3 className='hover-link' id='list-item'>{props.article.fields.title}</h3>
      </div>
    </Link>
  )
}
