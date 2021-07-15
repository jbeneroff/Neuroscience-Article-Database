import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL, headers } from '../services'
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
        setPassword(true)
    } else {
      setPassword(false)
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
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)} type="password" placeholder="password" />
          <button id='delete-button-popup' onClick={(e) => handleSubmit(e)} onClick={handleDelete}>Delete Article</button>
        </form>
        {props.content}
      </div>
    </div>
  );
}

// https://www.cluemediator.com/create-simple-popup-in-reactjs