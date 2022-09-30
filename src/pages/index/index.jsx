import React, { useEffect, useState, useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { Navbar } from "../../components"
import { FirstSection } from "./first-section"
import FourthSection from "./fourth-secion"
import "./index.scss"
import { SecondSection } from "./second-section"
import { ThirdSection } from "./third-section"

export function Index() {
    const { darkMode } = useContext(DarkModeContext)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const a = () => {
      console.log(window.innerWidth)
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
    }
    a()
    window.addEventListener("resize", a)
    return () => {
      window.removeEventListener("resize", a)
    }
  }, [])
  return (
    <React.Fragment>
      <Navbar />
      <div className={`body ${darkMode ? "about__container__dark" : "about__container__light"}`}>
        <FirstSection isMobile={isMobile} />
        <SecondSection isMobile={isMobile} />
        <ThirdSection isMobile={isMobile} />
        <FourthSection isMobile={isMobile} />
      </div>
    </React.Fragment>
  )
}
