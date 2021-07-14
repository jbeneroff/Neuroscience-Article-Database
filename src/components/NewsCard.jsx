import React from 'react'
import {Link} from 'react-router-dom'

export default function NewsCard(props) {

  return (
    <Link to={`/news/${props.news.id}`}>
      <div>
        <h3>{props.news.fields.title}</h3>
      </div>
    </Link>
  )
}