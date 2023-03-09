import React, { useEffect } from "react"
import { Navbar } from "../../components"
import { ProjInfoHero } from "./menova"
import KidsCurHero1 from '../../assets/images/kidscur-hero1.png'
import KidsCurHero2 from '../../assets/images/kidscur-hero2.png'
import KidsCurLogo from '../../assets/images/kidscur-logo.png'
import KidsCurDiv1 from "../../assets/images/kidscur-div1-phone.png"
import KidsCurDiv2 from "../../assets/images/kidscur-div2-phone.png"
import KidsCurFinal from "../../assets/images/kidscur-final-img.png"
import Footer from "../../components/footer/footer"
import { Link } from "react-router-dom"
import Kidscur from "../../assets/images/kidscur.png"
import Altilium from "../../assets/images/altilium.png"
import Ombhu from "../../assets/images/ombhu.png"
import Menova from "../../assets/images/menova.png"
import MBLarge from "../../assets/images/meri-bachat-big.png"
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react"

const KidsCur = () => {
  const { darkMode } = useContext(DarkModeContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="kidscur-body">
      <Navbar diffColor="#957AFF" />
      <ProjInfoHero
        hero1={KidsCurHero1}
        hero2={KidsCurHero2}
        logo={KidsCurLogo}
        name="KidsCur"
        desc="Digital Health Repository"
      />
      <div className="kidscur-bgc project-details__data kidscur-content">
        <div className="project-details__data__product kidscur-text">THE PRODUCT</div>
        <div className="mb-data-div1">
          <div className="mb-data-div1__img-cont kidscur-ph1">
            <img src={KidsCurDiv1} alt="" />
            <div className="mb-data-div1__img-cont__ball">
              <svg viewBox="0 0 688 694" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.998047 347C0.998047 155.357 156.355 0 347.998 0C539.64 0 694.998 155.357 694.998 347C694.998 538.638 539.636 694 347.998 694C156.355 694 0.998047 538.638 0.998047 347Z"
                  fill="url(#paint0_radial_753_4)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_753_4"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(247.526 214.898) rotate(48.4975) scale(506.806 500.329)"
                  >
                    <stop stop-color="#957AFF" />
                    <stop offset="0.550106" stop-color="#8E74F2" />
                    <stop offset="1" stop-color="#836BDF" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="mb-data-div1__text-cont">
            <div className="mb-data-div1__text-cont__heading kidscur-text">We care as much as you!</div>
            <div className="kidscur__line" />
            <div className="mb-data-div1__text-cont__desc dark-mode__color1">
              KidsCur is the one-stop spot to store, handle and retrieve all the medical documents your kids need to have easy and
              secure health appointments every time. Discover pediatricians and medicines around you, read various health blogs to
              accentuate your child’s healthcare.
            </div>
          </div>
        </div>
        <div className="mb-data-div2">
          <div className="mb-data-div2__img-cont kidscur-ph2">
            <img src={KidsCurDiv2} alt="" />
            <div className="mb-data-div2__img-cont__ball">
              <svg viewBox="0 0 561 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M270.998 -1.26763e-05C431.161 -5.67536e-06 560.998 129.837 560.998 290C560.998 450.162 431.161 580 270.998 580C110.84 580 -19.002 450.158 -19.002 290C-19.002 129.837 110.84 -1.9677e-05 270.998 -1.26763e-05Z"
                  fill="url(#paint0_radial_753_16)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_753_16"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(381.4 206.032) rotate(138.497) scale(423.555 418.143)"
                  >
                    <stop stop-color="#957AFF" />
                    <stop offset="0.550106" stop-color="#8B70F5" />
                    <stop offset="1" stop-color="#846DDF" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="mb-data-div2__text-cont__desc dark-mode__color1">
              Tracking medical history is an important part of maintaining proper health and having your records in order and
              ready to go when your healthcare provider requests for it alleviates a lot of the frustration and hassle associated
              with getting treated.
            </div>
          </div>
        </div>
        <div className="kidscur-final">
          <div className="kidscur-final__circle1">
            <svg viewBox="0 0 879 879" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M59.3804 658.739C-61.7803 448.882 10.1213 180.541 219.978 59.3802C429.833 -61.7797 698.176 10.1214 819.336 219.978C940.494 429.829 868.59 698.179 658.739 819.336C448.882 940.497 180.538 868.589 59.3804 658.739Z"
                fill="url(#paint0_radial_759_4)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_759_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(245.821 358.222) rotate(18.4975) scale(640.826 632.636)"
                >
                  <stop stop-color="#957AFF" />
                  <stop offset="0.550106" stop-color="#8E74F2" />
                  <stop offset="1" stop-color="#836BDF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <img src={KidsCurFinal} alt="" />
          <div className="kidscur-final__circle2">
            <svg viewBox="0 0 802 781" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M401 -1.75283e-05C622.467 -7.84765e-06 802 174.832 802 390.5C802 606.166 622.467 781 401 781C179.54 781 3.4539e-05 606.162 4.39658e-05 390.5C5.3393e-05 174.832 179.54 -2.72086e-05 401 -1.75283e-05Z"
                fill="url(#paint0_radial_759_2)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_759_2"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(553.66 277.433) rotate(139.251) scale(578.991 569.551)"
                >
                  <stop stop-color="#957AFF" />
                  <stop offset="0.550106" stop-color="#8B70F5" />
                  <stop offset="1" stop-color="#846DDF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="more-projects__container">
          <div className="more-projects__div1">
            <Link to="/project/ombhu">
            <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Ombhu</div>
              <img src={Ombhu} alt="" style={{ width: "100%" }} />
            </Link>
            <Link to="/project/menova">
            <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Menova</div>
              <img src={Menova} alt="" style={{ width: "100%" }} />
            </Link>
          </div>
          <div className="more-projects__div2">
            <Link to="/project/altilium">
              <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Altilium ERP</div>
              <img src={Altilium} alt="" style={{ width: "100%" }} />
            </Link>
          </div>
        </div>
        <div className="bottom-mb__container">
          <Link to="/project/meri-bachat">
          <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>MeriBachat</div>
            <img src={MBLarge} alt="" style={{ width: "100%" }} />
          </Link>
        </div>
      <Footer />
    </div>
  )
}

export default KidsCur
