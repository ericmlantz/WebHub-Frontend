import React from 'react'
import Home from '../pages/Home'

const Pages = (props) => {
  return (
    <div>
      <div className="card-wrapper">
      <h1>{props.topic}</h1>
      <h3>{props.description}</h3>
      </div>
    </div>
  )
}

export default Pages