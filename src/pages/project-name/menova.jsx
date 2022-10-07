import React from "react"
import { Navbar } from "../../components"
import { useParams } from "react-router-dom"
import MenovaHero1 from "../../assets/images/menova-hero1.png"
import MenovaLogo from "../../assets/images/menova-logo.png"
import MenovaHero2 from "../../assets/images/menova-hero2.png"
import MenovaDiv1 from "../../assets/images/menova-div1-laptop.png"
import MenovaDiv2 from "../../assets/images/menova-div2-laptop.png"

const Menova = () => {
  return (
    <div className="menova-body">
      {window.innerWidth > 960 ? <Navbar /> : <Navbar mobDark />}
      <ProjInfoHero hero1={MenovaHero1} logo={MenovaLogo} hero2={MenovaHero2} name="Menova" desc="Feed your curiosity!" />
      <div className="menova-bgc project-details__data">
        <div className="project-details__data__product menova-text">THE PRODUCT</div>
        <div className="menova-data-div1">
          <div className="menova-data-div1__img-cont">
            <img src={MenovaDiv1} alt="" />
            <div className="menova-data-div1__img-cont__ball">
              <svg viewBox="0 0 907 907" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 453.5C0 203.038 203.038 0 453.5 0C703.96 0 907 203.038 907 453.5C907 703.955 703.955 907 453.5 907C203.038 907 0 703.955 0 453.5Z"
                  fill="url(#paint0_radial_743_7)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_743_7"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(322.192 280.854) rotate(48.4975) scale(662.353 653.888)"
                  >
                    <stop stop-color="#676767" />
                    <stop offset="0.550106" stop-color="#323232" />
                    <stop offset="1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="menova-data-div1__text-cont">
            <div className="menova-data-div1__text-cont__heading menova-text">Learn the things that truly excite you!</div>
            <div className="menova__line" />
            <div className="menova-data-div1__text-cont__desc dark-mode__color2">
              Menova brings you a learning platform taught by extraordinaries, designed by storytellers and produced by
              cinematographers. Explore the most immersive and stimulating learning experiences that draw you in and keep you
              hooked.
            </div>
          </div>
        </div>
        <div className="menova-data-div2">
          <div className="menova-data-div2__img-cont">
            <img src={MenovaDiv2} alt="" />
            <div className="menova-data-div2__img-cont__ball">
              <svg viewBox="0 0 545 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M-105 325C-105 145.507 40.5069 0 220 0C399.492 0 545 145.507 545 325C545 504.488 399.488 650 220 650C40.5069 650 -105 504.488 -105 325Z"
                  fill="url(#paint0_radial_743_8)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_743_8"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(125.898 201.273) rotate(48.4975) scale(474.674 468.608)"
                  >
                    <stop stop-color="#676767" />
                    <stop offset="0.550106" stop-color="#323232" />
                    <stop offset="1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="menova-data-div2__text-cont__desc dark-mode__color2">
              MeriBachat is the leading platform for buying gift cards and coupons. With over 350 brands to choose from, avail
              discounts all year round with 0% convenience fees and compare prices and features of various products at a single
              platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menova

export const ProjInfoHero = (props) => {
    const { name } = useParams()

  return (
    <div className="project-details__container">
      <div className={`project-details__title light-mode__color1 ${name === 'menova' ? "menova__mob-color" : null}`}>
        {props.name}
      </div>
      <div className={`project-details__desc light-mode__color1 ${name === 'menova' ? "menova__mob-color" : null}`}>
        {props.desc}
      </div>
      <div className={`project-details__logo-cont ${name}-bgc`}>
        <div className="menova__top-left">
          <img src={props.hero1} alt="" />
        </div>
        <div className="project-details__logo-cont__logo">
          <img src={props.logo} alt="" />
        </div>
        <div className="menova__bot-right">
          <img src={props.hero2} alt="" />
        </div>
      </div>
    </div>
  )
}
