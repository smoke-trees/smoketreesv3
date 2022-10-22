import React from "react"
import { Navbar } from "../../components"
import { ProjInfoHero } from "./menova"
import OmbhuLogo from "../../assets/images/Ombhu-logo.png"
import OmbhuDiv1 from "../../assets/images/ombhu-div1-phone.png"
import OmbhuDiv2 from "../../assets/images/ombhu-div2-phone.png"
import OmbhuFinal from "../../assets/images/ombhu-final-img.png"

const Ombhu = () => {
  return (
    <div className="ombhu-body">
      <Navbar diffColor="#A3B770" />
      <ProjInfoHero logo={OmbhuLogo} name="Ombhu" desc="The good we build builds us" />
      <div className="ombhu-bgc project-details__data kidscur-content">
        <div className="project-details__data__product ombhu-text">THE PRODUCT</div>
        <div className="mb-data-div1">
          <div className="mb-data-div1__img-cont kidscur-ph1">
            <img src={OmbhuDiv1} alt="" />
            <div className="mb-data-div1__img-cont__ball">
              <svg viewBox="0 0 758 907" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M-7.92925e-05 453.5C-3.55003e-05 203.038 203.038 3.55003e-05 453.5 7.92925e-05C703.96 0.000123084 907 203.038 907 453.5C907 703.955 703.955 907 453.5 907C203.038 907 -0.000123083 703.955 -7.92925e-05 453.5Z"
                  fill="url(#paint0_radial_757_38)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_757_38"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(308.5 241) rotate(49.8172) scale(701.459 692.495)"
                  >
                    <stop stop-color="#A3B770" />
                    <stop offset="0.651042" stop-color="#A1B56F" />
                    <stop offset="1" stop-color="#93A568" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="mb-data-div1__text-cont">
            <div className="mb-data-div1__text-cont__heading ombhu-text">Software that makes a difference</div>
            <div className="ombhu__line" />
            <div className="mb-data-div1__text-cont__desc">
              OMBHU-Supplies will supply essential construction materials bought directly from manufacturers for private
              constructions. The end users will be people building their houses as well as contractors who build the individual
              houses.
            </div>
          </div>
        </div>
        <div className="mb-data-div2">
          <div className="mb-data-div2__img-cont kidscur-ph2">
            <img src={OmbhuDiv2} alt="" />
            <div className="mb-data-div2__img-cont__ball">
              <svg viewBox="0 0 570 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M253 -1.38565e-05C428.075 -6.20375e-06 570 141.925 570 317C570 492.074 428.075 634 253 634C77.9303 634 -64 492.07 -64 317C-64 141.925 77.9303 -2.1509e-05 253 -1.38565e-05Z"
                  fill="url(#paint0_radial_757_774)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_757_774"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(401.539 215.644) rotate(139.817) scale(490.326 484.059)"
                  >
                    <stop stop-color="#A3B770" />
                    <stop offset="0.651042" stop-color="#A1B56F" />
                    <stop offset="1" stop-color="#93A568" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="mb-data-div2__text-cont__desc">
              The platform manages the selling platform, and the corresponding ERP for the organization. The entire ecosystem of
              Warehousing, Inventory Management, Cataloguing, Support Pipeline and Shipping Management, is controlled by our
              blazing fast and scalable mechanisms.
            </div>
          </div>
        </div>
        <div className="kidscur-final">
          <div className="kidscur-final__circle1">
            <svg viewBox="0 0 909 909" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M227.743 847.235C10.8363 722.004 -63.4809 444.649 61.7501 227.743C186.98 10.8379 464.336 -63.4806 681.243 61.7503C898.143 186.978 972.462 464.343 847.235 681.243C722.004 898.149 444.643 972.463 227.743 847.235Z"
                fill="url(#paint0_radial_757_783)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_757_783"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(197.962 473.816) rotate(-10.1828) scale(701.459 692.495)"
                >
                  <stop stop-color="#A3B770" />
                  <stop offset="0.651042" stop-color="#A1B56F" />
                  <stop offset="1" stop-color="#93A568" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <img src={OmbhuFinal} alt="" />
          <div className="kidscur-final__circle2">
            <svg viewBox="0 0 907 907" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M453.5 -1.98231e-05C703.962 -8.87508e-06 907 203.038 907 453.5C907 703.96 703.962 907 453.5 907C203.045 907 -3.07708e-05 703.955 -1.98231e-05 453.5C-8.87508e-06 203.038 203.045 -3.07708e-05 453.5 -1.98231e-05Z"
                fill="url(#paint0_radial_757_784)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_757_784"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(666 308.5) rotate(139.817) scale(701.459 692.495)"
                >
                  <stop stop-color="#A3B770" />
                  <stop offset="0.651042" stop-color="#A1B56F" />
                  <stop offset="1" stop-color="#93A568" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ombhu
