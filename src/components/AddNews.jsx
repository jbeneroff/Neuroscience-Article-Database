import { useState } from "react"
import axios from "axios"
import { BASE_URL_2, headers } from "../services"
import { useHistory } from 'react-router'
import './Add.css'

const defaultForm = {
  title: "",
  abstract: "",
  link: "",
}

export default function AddNews() {
  const [input, setInput] = useState(defaultForm)
  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(BASE_URL_2, { fields: input }, { headers })
    console.log(res)
    history.push(`/news/${res.data.id}`)
  }

  return (
    <div className='add'>
      <h3>Add a News Article</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input name="title" value={input.title} onChange={handleChange} />
        <label>Abstract</label>
        <input name="abstract" value={input.abstract} onChange={handleChange} />
        <label>Link</label>
        <input name="link" value={input.link} onChange={handleChange} />
        <button id='add-button'>Add News Article</button>
      </form>
    </div>
  )
}
