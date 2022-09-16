import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import GradientImg from "../gradient-img/gradient-img"
import "./more-projects.scss"

const MoreProjects = (props) => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className="more-projects">
      {props.noHead ? null : (
        <div
          className={`about__first-section__heading ${
            darkMode ? "dark-mode__color1" : "light-mode__color1"
          }`}
          style={{ textAlign: "left" }}
        >
          More Projects
        </div>
      )}
      <div className="more-projects__cont">
        <div className="more-projects__cont2">
          <div className="more-projects__img1">
            <GradientImg imgUrl={props.img1} />
          </div>
          <div className="more-projects__img3">
            <GradientImg imgUrl={props.img3} />
          </div>
        </div>
        <div className="more-projects__cont2">
          <div className="more-projects__img2">
            <GradientImg imgUrl={props.img2} />
          </div>
          <div className="more-projects__img4">
            <GradientImg imgUrl={props.img4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreProjects
