import React from 'react'

import './ServiceCard.scss'

export function ServiceCard({ color, image, text }) {
  return (
    <>
      <div className={`service-card service-card--${color}`}>
        <img src={image} alt={text}/>
        <span>{text}</span>
      </div>
    </>
  )
}