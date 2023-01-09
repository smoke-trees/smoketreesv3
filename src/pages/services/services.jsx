import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { Navbar } from "../../components"
import ServicesSectionOne from "./services-section-one"
import ServicesSecondSection from "./services-second-section"
import ServicesDesignSection from "./services-design-section"
import ServicesDevelopmentSection from "./services-development-section"

import "./services.scss"
import ServicesCloudSection from "./services-cloud-section"
import ServicesAutomationSection from "./services-automation-section"
import Footer from "../../components/footer/footer"

export const Services = () => {
  const { darkMode } = useContext(DarkModeContext)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={darkMode ? "about__container__dark" : "about__container__light"}>
      <Navbar />
      <ServicesSectionOne />
      <ServicesSecondSection />
      <div id="design">
        <ServicesDesignSection />
      </div>
      <div id="development">
        <ServicesDevelopmentSection />
      </div>
      <div id="cloud-application">
        <ServicesCloudSection />
      </div>
      <div id="automation-ai">
        <ServicesAutomationSection />
      </div>
      <Footer />
    </div>
  )
}
