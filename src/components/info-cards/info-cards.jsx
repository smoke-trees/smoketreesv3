import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

import "./info-cards.scss"

const InfoCards = (props) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className="info-cards__container">
      <div className="info-cards__data-container">
        <img src={props.img} className="info-cards__img" alt="" />
        <div className={`info-cards__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>{props.heading}</div>
        <div className={`info-cards__desc ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>{props.desc} {props.desc2 ? <><br /> <br/> {props.desc2}</> : null}</div>
      </div>
    </div>
  )
}

export default InfoCards
