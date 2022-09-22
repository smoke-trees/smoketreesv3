import React from 'react'
import { HashLink as Link } from "react-router-hash-link"

import './services.scss'

const ServicesSecondSection = () => {
  return (
    <div className='services-second-section__container'>
      <div style={{minWidth: '55%'}}>
        <Link to="#design">
          <div className="services-second__link">
            <div className="services-second__link__number">01</div>
            <div className="services-second__link__text">Design</div>
          </div>
        </Link>
        <Link to="#development">
          <div className="services-second__link">
            <div className="services-second__link__number">02</div>
            <div className="services-second__link__text">Development</div>
          </div>
        </Link>
        <Link to="#cloud-application">
          <div className="services-second__link">
            <div className="services-second__link__number">03</div>
            <div className="services-second__link__text">Cloud Applications</div>
          </div>
        </Link>
        <Link to="#automation-ai">
          <div className="services-second__link">
            <div className="services-second__link__number">04</div>
            <div className="services-second__link__text">Automation and AI</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ServicesSecondSection
