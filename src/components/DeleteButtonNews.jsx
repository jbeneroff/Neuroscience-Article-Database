import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL_2, headers } from '../services'
import {useParams, useHistory}  from 'react-router-dom'
import './DeleteButton.css'

export default function DeleteButton(props) {
  const [password, setPassword] = useState(true)
  const { id } = useParams()
  const history = useHistory()

  const handlePassword = (e) =>  {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    checkValidity()
  }

  const checkValidity = () => {
    if (password === 'jared') {
      handleDelete()
      console.log('its right')
    } else {
      console.log('its wrong')
      alert('Incorrect Password. Please Try again.')
    }
  }

  const handleDelete = async () => {
    const URL = `${BASE_URL_2}/${id}`
    await axios.delete(URL, {headers})
    history.push('/all-news')
  }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <form>
          <p>Are you sure you want to delete this article?</p>
          <p>This cannot be undone.</p>
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)} type="password" placeholder="password" />
          <button id='delete-button-popup' onClick={(e) => handleSubmit(e)} >Delete Article</button>
        </form>
        {props.content}
      </div>
    </div>
  );
}