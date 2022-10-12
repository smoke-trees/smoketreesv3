import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext"
import { Navbar } from "../../components"
import ProductSectionOne from "./product-section-one"
import ProductSectionTwo from "./product-section-two"
import Kidscur from "../../assets/images/kidscur.png"
import Altilium from "../../assets/images/altilium.png"
import Ombhu from "../../assets/images/ombhu.png"
import Menova from "../../assets/images/menova.png"
import MBLarge from "../../assets/images/meri-bachat-big.png"

import "./product.scss"

export const Product = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "about__container__dark" : "about__container__light"}>
      <Navbar />
      <div>
        <ProductSectionOne />
        <ProductSectionTwo />
        <div className="more-projects__container">
          <div className="more-projects__div1">
            <Link to="/project/kidscur">
              <img src={Kidscur} alt="" style={{ width: "100%" }} />
              <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Kidscur</div>
            </Link>
            <Link to="/project/altilium">
              <img src={Altilium} alt="" style={{ width: "100%" }} />
              <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Altilium ERP</div>
            </Link>
          </div>
          <div className="more-projects__div2">
            <Link to="/project/ombhu">
              <img src={Ombhu} alt="" style={{ width: "100%" }} />
              <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Ombhu</div>
            </Link>
            <Link to="/project/menova">
              <img src={Menova} alt="" style={{ width: "100%" }} />
              <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Menova</div>
            </Link>
          </div>
        </div>
        <div className="bottom-mb__container">
          <Link to="/project/meri-bachat">
            <img src={MBLarge} alt="" style={{ width: "100%" }} />
            <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>MeriBachat</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
