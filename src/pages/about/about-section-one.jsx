import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import "./about.scss"
import { ReactComponent as Bulb } from "../../assets/images/bulb.svg"
import { ReactComponent as BulbDark } from "../../assets/images/bulbDark.svg"

const AboutSectionOne = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  return (
    <div className="about__first-section">
      <div style={{ maxWidth: "100%" }}>
        <div className={`about__first-section__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>
          <br />
          We deliver what you ideate.
        </div>
        <div className="about__first-section__bulb">
          {darkMode ? <BulbDark onClick={toggleDarkMode} /> : <Bulb onClick={toggleDarkMode} />}
        </div>
      </div>
      <div className={`about__first-section__explore ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
        Explore
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4237 13.2275L18.5 20.3037L25.5763 13.2275L27.75 15.4166L18.5 24.6666L9.25 15.4166L11.4237 13.2275Z"
            fill="#676767"
          />
        </svg>
      </div>
    </div>
  )
}

export default AboutSectionOne
