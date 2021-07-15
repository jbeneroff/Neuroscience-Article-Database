import React from 'react'
import './DeleteButton.css'

export default function DeleteButton(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
}

// https://www.cluemediator.com/create-simple-popup-in-reactjs