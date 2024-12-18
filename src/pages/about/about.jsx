import React, { useContext, useEffect } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { Navbar } from "../../components"
import AboutSectionOne from "./about-section-one"
import AboutSectionTwo from "./about-section-two"
import AboutSectionThree from "./about-section-three"
import "./about.scss"
import Footer from '../../components/footer/footer'

export function About() {
  const { darkMode } = useContext(DarkModeContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={darkMode ? "about__container__dark" : "about__container__light"}>
      <Navbar />
      <div>
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
      </div>
      <Footer />
    </div>
  )
}
