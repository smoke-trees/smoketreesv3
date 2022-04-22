import React, {useContext} from 'react'
import {DarkModeContext} from '../../context/darkModeContext';
import { Logo } from '../../assets/images'
import LogoWhite from '../../assets/images/logoWhite.png'
import Target from '../targets/target'
import {Link} from 'react-router-dom'

import './navbar.scss'

export function Navbar () {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img title='SmokeTrees Digital LLP' className='navbar__logo__img' src={darkMode ? LogoWhite : Logo} alt="SmokeTrees Logo" />
        </Link>
      </div>
      <div className="navbar__links">
        <Target>
          <div className="navbar__links__item">
            <Link to="/about" className={darkMode ? 'dark-mode__color1' : 'light-mode__color0'}>About</Link>
          </div>
        </Target>
        <Target>
          <div className="navbar__links__item">
            <Link to="/" className={darkMode ? 'dark-mode__color1' : 'light-mode__color0'}>Services</Link>
          </div>
        </Target>
        <Target>
          <div className="navbar__links__item">
            <Link to="/" className={darkMode ? 'dark-mode__color1' : 'light-mode__color0'}>Products</Link>
          </div>
        </Target>
        <Target>
          <div className="navbar__links__item">
            <Link to="/" className={darkMode ? 'dark-mode__color1' : 'light-mode__color0'}>Clients</Link>
          </div>
        </Target>
      </div>
    </div>
  )
}
