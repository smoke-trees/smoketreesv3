import React from 'react'

import './ServiceCard.scss'

export function ServiceCard({ color }) {
  return (
    <>
      <div className={`service-card service-card--${color}`}>
      </div>
    </>
  )
}