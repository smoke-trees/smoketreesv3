import React, {useContext} from 'react'
import './product.scss'
import { DarkModeContext } from '../../context/darkModeContext';
import GradientImg from '../../components/gradient-img/gradient-img'

const AboutSectionTwo = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  return (
    <div className='project__second-section'>
      <div className='project__second-section__container'>
        <div>
          <div className="project__second-section__heading light-mode__color1">Lorem ipsum dolor sit amet</div>
          <div className="project__second-section__dash" />
          <div className="project__second-section__para light-mode__color1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui hendrerit leo dictumst feugiat quis arcu integer morbi.</div>
          <div className="project__second-section__explore light-mode__color2">
            Explore <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9375 17.2813L13.7187 12.5L8.9375 7.71875L10.4167 6.25L16.6667 12.5L10.4167 18.75L8.9375 17.2813Z" fill="#676767"/>
            </svg>
          </div>
        </div>
        <div className='project__second-section__img-cont'>
          <GradientImg imgUrl='//unsplash.it/577/784' />
        </div>
      </div>
    </div>
  )
}

export default AboutSectionTwo
