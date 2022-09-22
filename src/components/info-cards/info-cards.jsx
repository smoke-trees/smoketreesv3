import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

import "./info-cards.scss"

const InfoCards = (props) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className="info-cards__container">
      {props.img ? <div className="info-cards__index-container">
        <div style={{height: '171px', width: '100%'}} />
        <div className="info-cards__index">{props.index}</div>
      </div> : null}
      <div className="info-cards__data-container">
        <img src={props.img} className="info-cards__img" alt="" />
        <div className={`info-cards__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>{props.heading}</div>
        <div className={`info-cards__desc ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>{props.desc}</div>
      </div>
    </div>
  )
}

export default InfoCards
