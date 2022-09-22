import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { Navbar } from "../../components"
import ProductSectionOne from "./product-section-one"
import ProductSectionTwo from "./product-section-two"
import MoreProjects from "../../components/more-projects/more-projects"

import "./product.scss"

export const Product = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "about__container__dark" : "about__container__light"}>
      <Navbar />
      <div>
        <ProductSectionOne />
        <ProductSectionTwo />
        <MoreProjects
          noHead
          img1="//unsplash.it/577/801"
          img2="//unsplash.it/577/1040"
          img3="//unsplash.it/577/580"
          img4="//unsplash.it/577/379"
        />
      </div>
    </div>
  )
}
