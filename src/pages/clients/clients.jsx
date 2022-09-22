import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import ClientsSectionOne from "./clients-section-one"
import ClientsSectionTwo from "./clients-section-two"

import "./clients.scss"

export const Clients = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "about__container__dark" : "about__container__light"}>
      <div>
        <ClientsSectionOne />
        <ClientsSectionTwo />
      </div>
    </div>
  )
}
