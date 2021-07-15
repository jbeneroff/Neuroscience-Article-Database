import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL, headers } from '../services'
import {useParams, useHistory}  from 'react-router-dom'
import './DeleteButton.css'

export default function DeleteButton(props) {
  const [password, setPassword] = useState('')
  const { id } = useParams()
  const history = useHistory()
  const [passwordMessage, setPasswordMessage] = useState('This cannot be undone.')

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
    } else {
      setPasswordMessage('Incorrect Password. Please try again.')
      setPassword('')
    }
  }

  const handleDelete = async () => {
    const URL = `${BASE_URL}/${id}`
    await axios.delete(URL, {headers})
    history.push('/all-articles')
  }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <form>
          <p>Are you sure you want to delete this article?</p>
          <p>{passwordMessage}</p>
          <label>Password</label>
          <input value={password} onChange={(e) => handlePassword(e)} type="password" placeholder="password" />
          <button id='delete-button-popup' onClick={(e) => handleSubmit(e)} >Delete Article</button>
        </form>
        {props.content}
      </div>
    </div>
  );
}

// https://www.cluemediator.com/create-simple-popup-in-reactjs