import React from 'react'
import { Logo } from '../../assets/images'

import './navbar.scss'

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img title='SmokeTrees Digital LLP' className='navbar__logo__img' src={Logo} alt="SmokeTrees Logo" />
        </a>
      </div>
      <div className="navbar__links">
        <div className="navbar__links__item">
          <a href="/">About</a>
        </div>
        <div className="navbar__links__item">
          <a href="/">Services</a>
        </div>
        <div className="navbar__links__item">
          <a href="/">Products</a>
        </div>
        <div className="navbar__links__item">
          <a href="/">Clients</a>
        </div>
      </div>
    </div>
  )
}