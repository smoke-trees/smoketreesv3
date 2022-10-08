import React from "react"
import { Navbar } from "../../components"
import { ProjInfoHero } from "./menova"
import AltiliumDiv1 from "../../assets/images/altilium-div1-laptop.png"
import AltiliumDiv2 from "../../assets/images/altilium-div2-laptop.png"
import AltiliumDiv3 from "../../assets/images/altilium-div3-laptop.png"

const AltiliumErp = () => {
  return (
    <div className="altilium-body">
      <Navbar diffColor="#FF9AA2" />
      {/* // TODO: Logo and desc here */}
      <ProjInfoHero name="Altilium ERP" desc="Feed your curiosity!" />
      <div className="altilium-bgc project-details__data">
        <div className="project-details__data__product altilium-text">THE PRODUCT</div>
        <div className="menova-data-div1">
          <div className="menova-data-div1__img-cont">
            <img src={AltiliumDiv1} alt="" />
            <div className="menova-data-div1__img-cont__ball">
              <svg viewBox="0 0 648 907" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M-7.92925e-05 453.5C-3.55003e-05 203.038 203.038 3.55003e-05 453.5 7.92925e-05C703.96 0.000123084 907 203.038 907 453.5C907 703.955 703.955 907 453.5 907C203.038 907 -0.000123083 703.955 -7.92925e-05 453.5Z"
                  fill="url(#paint0_radial_755_1028)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_755_1028"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(322.192 280.854) rotate(48.4975) scale(662.353 653.888)"
                  >
                    <stop stop-color="#FFC6CA" />
                    <stop offset="0.473958" stop-color="#FF9AA2" />
                    <stop offset="1" stop-color="#F27F88" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="menova-data-div1__text-cont">
            <div className="menova-data-div1__text-cont__heading altilium-text">Software that makes a difference</div>
            <div className="altilium__line" />
            <div className="menova-data-div1__text-cont__desc dark-mode__color2">
              A complete management and improvement platform solution for Altilium Energie Pvt. Ltd., a pristine energy trading
              consultant company. From running various algorithm to handle Big Data in the energy sector, to managing the various
              clients and processes, we have been doing it all.
            </div>
          </div>
        </div>
        <div className="menova-data-div2">
          <div className="menova-data-div2__img-cont">
            <img src={AltiliumDiv2} alt="" style={{ left: `${window.innerWidth > 960 ? "-12vw" : null}` }} />
            <div className="menova-data-div2__img-cont__ball">
              <svg viewBox="0 0 574 732" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M208 -1.59984e-05C410.137 -7.16269e-06 574 163.863 574 366C574 568.135 410.137 732 208 732C5.86905 732 -158 568.131 -158 366C-158 163.863 5.86908 -2.48338e-05 208 -1.59984e-05Z"
                  fill="url(#paint0_radial_757_498)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_757_498"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(347.335 260.027) rotate(138.497) scale(534.556 527.725)"
                  >
                    <stop stop-color="#FFC6CA" />
                    <stop offset="0.473958" stop-color="#FF9AA2" />
                    <stop offset="1" stop-color="#F27F88" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="menova-data-div2__text-cont__desc dark-mode__color2">
              Tracking medical history is an important part of maintaining proper health and having your records in order and
              ready to go when your healthcare provider requests for it alleviates a lot of the frustration and hassle associated
              with getting treated.
            </div>
          </div>
        </div>
        <div className="altilium-data-div3">
          <div className="altilium-data-div3__img-cont">
            <img src={AltiliumDiv3} alt="" />
            <div className="altilium-data-div3__img-cont__ball">
              <svg viewBox="0 0 582 732" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 366C0 163.863 163.863 0 366 0C568.135 0 732 163.863 732 366C732 568.131 568.131 732 366 732C163.863 732 0 568.131 0 366Z"
                  fill="url(#paint0_radial_757_499)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_757_499"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(260.027 226.665) rotate(48.4975) scale(534.556 527.725)"
                  >
                    <stop stop-color="#FFC6CA" />
                    <stop offset="0.473958" stop-color="#FF9AA2" />
                    <stop offset="1" stop-color="#F27F88" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="altilium-data-div3__text-cont">
            <div className="altilium-data-div3__text-cont__desc dark-mode__color2">
              {/* // TODO: Unique info here  */}
              Tracking medical history is an important part of maintaining proper health and having your records in order and
              ready to go when your healthcare provider requests for it alleviates a lot of the frustration and hassle associated
              with getting treated.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AltiliumErp
