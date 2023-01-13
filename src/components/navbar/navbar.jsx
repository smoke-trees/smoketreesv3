import React, {useContext, useState} from 'react'
import {DarkModeContext} from '../../context/darkModeContext';
import { Logo } from '../../assets/images'
import LogoWhite from '../../assets/images/logoWhite.png'
import Target from '../targets/target'
import {Link} from 'react-router-dom'

import './navbar.scss'
import { useEffect } from 'react';

export function Navbar ({mobDark, diffColor}) {
  const {darkMode} = useContext(DarkModeContext)
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
  }, [])

  return (
    <div className="navbar" style={{ backgroundColor: `${!darkMode ? "whitesmoke" : "#090a09"}` }}>
      <div className="navbar__logo">
        <Link to="/">
          <img
            title="SmokeTrees Digital LLP"
            className="navbar__logo__img"
            src={darkMode || mobDark ? LogoWhite : Logo}
            alt="SmokeTrees Logo"
          />
        </Link>
      </div>
      <div className={`navbar__hamburger ${burgerOpen ? "hamburger__open" : null}`} onClick={() => setBurgerOpen(!burgerOpen)}>
        {console.log(burgerOpen)}
        <div className="navbar__hamburger__line1" style={{ backgroundColor: `${darkMode || mobDark ? "whitesmoke" : "#000"}` }} />
        <div className="navbar__hamburger__line2" style={{ backgroundColor: `${darkMode || mobDark ? "whitesmoke" : "#000"}` }} />
      </div>
      <div
        className={`navbar__links ${burgerOpen ? "navbar__links__open" : null}`}
        style={{ backgroundColor: `${darkMode || mobDark ? "#090a09" : "whitesmoke"}`, display: `${isMobile? burgerOpen? '' : 'none': ''}` }}
      >
        <Target>
          <div className={`navbar__links__item ${burgerOpen ? "navbar__links__item__animate1" : null}`}>
            <Link to="/about" className={darkMode || mobDark ? "dark-mode__color1" : "light-mode__color0"}>
              About
            </Link>
          </div>
        </Target>
        <Target>
          <div className={`navbar__links__item ${burgerOpen ? "navbar__links__item__animate2" : null}`}>
            <Link to="/services" className={darkMode || mobDark ? "dark-mode__color1" : "light-mode__color0"}>
              Services
            </Link>
          </div>
        </Target>
        <Target>
          <div className={`navbar__links__item ${burgerOpen ? "navbar__links__item__animate3" : null}`}>
            <Link to="/project" className={darkMode || mobDark ? "dark-mode__color1" : "light-mode__color0"}>
              Products
            </Link>
          </div>
        </Target>
        {/* <Target>
          <div className={`navbar__links__item ${burgerOpen ? "navbar__links__item__animate4" : null}`}>
            <Link to="/clients" className={darkMode || mobDark ? "dark-mode__color1" : "light-mode__color0"}>
              Clients
            </Link>
          </div>
        </Target> */}
      </div>
    </div>
  )
}
