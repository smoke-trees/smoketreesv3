import React, {useContext} from 'react'
import './product.scss'
import {DarkModeContext} from '../../context/darkModeContext';
import {Link} from 'react-router-dom'

const AboutSectionOne = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  return (
    <div className='about__first-section'>
      <div style={{maxWidth: '100%'}}>
        <div className={`about__first-section__heading ${darkMode ? 'dark-mode__color1' : 'light-mode__color1'}`} style={{marginTop: '20px'}}>
          Projects
        </div>
        <div className="about__first-section__bulb" style={{marginTop: '0px'}} onClick={toggleDarkMode}>
          <svg style={{maxWidth: '85vw'}} width="430" height="408" viewBox="0 0 430 408" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.39 186.651L146.39 273.253L71.3896 229.952L146.39 186.651Z" fill="#B4ADFF"/>
            <path d="M146.204 273.217L146.098 186.615L221.151 229.824L146.204 273.217Z" fill="#B4ADFF"/>
            <path d="M221.929 230.447L221.654 317.049L146.792 273.51L221.929 230.447Z" fill="#9289FF"/>
            <path d="M146.734 360.054L146.734 273.452L221.734 316.753L146.734 360.054Z" fill="#9289FF"/>
            <path d="M71.5 230.363L146.5 273.665L71.5 316.966L71.5 230.363Z" fill="#FCFCFC"/>
            <path d="M146.129 273.103L146.129 359.705L71.1289 316.404L146.129 273.103Z" fill="#FCFCFC"/>
            <path d="M297.39 186.651L297.39 273.253L222.39 229.952L297.39 186.651Z" fill="#B4ADFF"/>
            <path d="M297.205 273.217L297.099 186.615L372.152 229.824L297.205 273.217Z" fill="#B4ADFF"/>
            <path d="M372.183 231.116L372.327 317.718L297.255 274.541L372.183 231.116Z" fill="#9289FF"/>
            <path d="M297.615 361.085L297.197 274.483L372.405 317.422L297.615 361.085Z" fill="#9289FF"/>
            <path d="M222.5 230.363L297.5 273.665L222.5 316.966L222.5 230.363Z" fill="#FCFCFC"/>
            <path d="M297.129 273.103L297.129 359.705L222.129 316.404L297.129 273.103Z" fill="#FCFCFC"/>
            <path d="M221.39 55.6506L221.39 142.253L146.39 98.9519L221.39 55.6506Z" fill="#B4ADFF"/>
            <path d="M221.204 142.217L221.098 55.6146L296.151 98.8237L221.204 142.217Z" fill="#B4ADFF"/>
            <path d="M296.929 99.4468L296.654 186.049L221.792 142.51L296.929 99.4468Z" fill="#9289FF"/>
            <path d="M221.734 229.054L221.734 142.452L296.734 185.753L221.734 229.054Z" fill="#9289FF"/>
            <path d="M146.5 99.3635L221.5 142.665L146.5 185.966L146.5 99.3635Z" fill="#FCFCFC"/>
            <path d="M221.129 142.103L221.129 228.705L146.129 185.404L221.129 142.103Z" fill="#FCFCFC"/>
          </svg>
        </div>
      </div>
      <Link to='/project/projectname'>
        <div className={`about__first-section__explore ${darkMode ? 'dark-mode__color2' : 'light-mode__color2'}`}>
          Explore
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4237 13.2275L18.5 20.3037L25.5763 13.2275L27.75 15.4166L18.5 24.6666L9.25 15.4166L11.4237 13.2275Z" fill="#676767"/>
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default AboutSectionOne
