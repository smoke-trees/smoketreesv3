import React, { useContext, useEffect } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import "./about.scss"
import { ReactComponent as Bulb } from "../../assets/images/bulb.svg"
import { ReactComponent as BulbDark } from "../../assets/images/bulbDark.svg"
import gsap from "gsap"

const AboutSectionOne = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const headingDelay = 0.3
  const headingDuration = 0.01
  const headingStagger = 0.05
  useEffect(() => {
    gsap
      .timeline({})
      .fromTo(
        ".build-better.typewriter-char",
        {
          autoAlpha: 0,
          display: "",
        },
        {
          opacity: 1,
          autoAlpha: 1,
          display: "inline",
          delay: headingDelay,
          duration: headingDuration,
          stagger: headingStagger,
        }
      )
      .fromTo(
        ".build-better__underline",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.5, ease: "power3.inout" }
      )
      .from(".explore__text, .explore__arrow", {
        opacity: 0,
        y: -20,
      })

      gsap.timeline().from("#st", {
        opacity: 0,
        y: 60,
        ease: "bounce.out",
        delay: 1,
        duration: 1.2,
      })
    
    }, [])
  return (
    <div className="about__first-section">
      <div style={{ maxWidth: "100%" }}>
        <div className={`about__first-section__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>
          {/* We deliver what you ideate. */}
          <span className="typewriter-char build-better">W</span>
          <span className="typewriter-char build-better">e</span>
          <span className="typewriter-char build-better"> </span>
          <span className="typewriter-char build-better">d</span>
          <span className="typewriter-char build-better">e</span>
          <span className="typewriter-char build-better">l</span>
          <span className="typewriter-char build-better">i</span>
          <span className="typewriter-char build-better">v</span>
          <span className="typewriter-char build-better">e</span>
          <span className="typewriter-char build-better">r</span>          
        </div>
        <div className="about__first-section__heading heading-gradient heading">
          <span className="typewriter-char build-better">d</span>
          <span className="typewriter-char build-better">r</span>
          <span className="typewriter-char build-better">e</span>
          <span className="typewriter-char build-better">a</span>
          <span className="typewriter-char build-better">m</span>
          <span className="typewriter-char build-better">s</span>
        </div>
        <div className="about__first-section__bulb" id='st'>
          {darkMode ? <BulbDark onClick={toggleDarkMode} /> : <Bulb onClick={toggleDarkMode} />}
        </div>
      </div>
      {/* <div className={`about__first-section__explore ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
        Explore
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4237 13.2275L18.5 20.3037L25.5763 13.2275L27.75 15.4166L18.5 24.6666L9.25 15.4166L11.4237 13.2275Z"
            fill="#676767"
          />
        </svg>
      </div> */}
    </div>
  )
}

export default AboutSectionOne
