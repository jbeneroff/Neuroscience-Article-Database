import React from 'react'
import {Link} from 'react-router-dom'

export default function ArticleCard(props) {

  // const { article } = props

  return (
    <Link to={`/articles/${props.article.id}`}>
      <div>
        <h3>{props.article.fields.title}</h3>
      </div>
    </Link>
  )
}
