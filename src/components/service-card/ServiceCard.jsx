import React from 'react'
import { Link } from 'react-router-dom'

import './ServiceCard.scss'

export function ServiceCard({ color, image, text, link }) {
  return (
    <>
      <Link to={link}>
        <div className={`service-card service-card--${color}`}>
          <img src={image} alt={text}/>
          <span>{text}</span>
        </div>
      </Link>
    </>
  )
}