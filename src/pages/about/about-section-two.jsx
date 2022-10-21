import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import "./about.scss"

const AboutSectionTwo = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className="about__second-section">
      <div className="about__second-section__content">
        <div className="about__second-section__images">
          <img src="//unsplash.it/196/303" alt="" className="about__second-section__images__1" />
          <img src="//unsplash.it/429/663" alt="" className="about__second-section__images__2" />
          <img src="//unsplash.it/245/378" alt="" className="about__second-section__images__3" />
        </div>
        <div className="about__second-section__text-container">
          <div className="about__second-section__text-container__title">Our Values</div>
          <div className={`about__second-section__text-container__para ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
            The driving force behind SmokeTrees is the hard work and talent of its founding members dedicated to bringing the
            developers' community together. Each of them is extremely skilled in their own fortes and ensure top notch results.
          </div>
          {/* // TODO: Second Para here */}
          {/* <div className={`about__second-section__text-container__para ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus amet, commodo condimentum integer. Something
            about consultation!
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AboutSectionTwo
