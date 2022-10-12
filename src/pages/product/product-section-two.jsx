import React from "react"
import "./product.scss"
import { Link } from "react-router-dom"
import MainImg from "../../assets/images/projects-main.png"

const AboutSectionTwo = () => {
  return (
    <div style={{ backgroundColor: "#1A1A1A" }}>
      <div className="project__second-section">
        <div className="project__second-section__container">
          <div>
            <div className={`project__second-section__heading dark-mode__color1`}>
              One stopshop for all your additional savings!
            </div>
            <div className={`project__second-section__dash dash-dark-mode`} />
            <Link to="/project/meri-bachat">
              <div className={`project__second-section__explore dark-mode__color1`}>
                Explore{" "}
                <svg width="25" height="25" viewBox="0 0 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.9375 17.2813L13.7187 12.5L8.9375 7.71875L10.4167 6.25L16.6667 12.5L10.4167 18.75L8.9375 17.2813Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <img src={MainImg} alt="" className="project__second-section__img-cont" />
        </div>
      </div>
    </div>
  )
}

export default AboutSectionTwo
