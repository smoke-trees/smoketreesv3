import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
// import Automation1 from '../../assets/images/automation-icons/automation1.svg'
import Automation2 from '../../assets/images/automation-icons/automation2.svg'
import Automation3 from '../../assets/images/automation-icons/automation3.svg'

import "./services.scss"
import InfoCards from "../../components/info-cards/info-cards"

const ServicesAutomationSection = () => {
  const { darkMode } = useContext(DarkModeContext)
  const cloudCard = [
    {
      img: Automation2,
      heading: "Machine Learning",
      desc: "Be smarter than your competition. Our Machine Learning algorithms and AI capabilities give you the edge you need to succeed. We build Smart Recommendation Systems and perform various forms of Predictive Analysis so you can give your business a massive upgrade.",
    },
    {
      img: Automation3,
      heading: "Data Science and Analytics",
      desc: "Data moves the world, learn how to move with it. We provide analytics and insights on your platform that help you upgrade to superiority. Put our knowledge in Big Data to your use, and condense tons of data to useful information.",
    },
  ]

  return (
    <div className="development-section">
      <div className="design-section__heading__container">
        <div className={`design-section__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>
          Automation and AI
        </div>
        {/* <div className={`design-section__heading__description ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus pharetra netus mi eget elit eget quam leo.
        </div> */}
        <div className="automation-section__heading__img1">
          <svg viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M155.833 99.1665H148.75C148.75 71.754 126.579 49.5832 99.1666 49.5832H92.0833V40.5873C96.3333 38.179 99.1666 33.5748 99.1666 28.3332C99.1666 20.5415 92.8625 14.1665 85 14.1665C77.1375 14.1665 70.8333 20.5415 70.8333 28.3332C70.8333 33.5748 73.6666 38.179 77.9166 40.5873V49.5832H70.8333C43.4208 49.5832 21.25 71.754 21.25 99.1665H14.1666C10.2708 99.1665 7.08331 102.354 7.08331 106.25V127.5C7.08331 131.396 10.2708 134.583 14.1666 134.583H21.25V141.667C21.25 149.529 27.625 155.833 35.4166 155.833H134.583C142.446 155.833 148.75 149.529 148.75 141.667V134.583H155.833C159.729 134.583 162.917 131.396 162.917 127.5V106.25C162.917 102.354 159.729 99.1665 155.833 99.1665ZM148.75 120.417H134.583V141.667H35.4166V120.417H21.25V113.333H35.4166V99.1665C35.4166 79.6165 51.2833 63.7498 70.8333 63.7498H99.1666C118.717 63.7498 134.583 79.6165 134.583 99.1665V113.333H148.75V120.417ZM60.2083 95.6248L76.925 112.342L68.5666 120.7L60.2083 112.342L51.85 120.7L43.4916 112.342L60.2083 95.6248ZM109.792 95.6248L126.508 112.342L118.15 120.7L109.792 112.342L101.433 120.7L93.075 112.342L109.792 95.6248Z"
              fill="#9289FF"
            />
          </svg>
        </div>
        <div className="automation-section__heading__img2">
          <svg viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M141.167 89.8335H128.333V102.667H89.8333V83.4168H102.667V70.5835H89.8333V38.5002C89.8333 35.0966 88.4813 31.8323 86.0745 29.4256C83.6678 27.0189 80.4036 25.6668 77 25.6668H25.6667V12.8335H12.8333V64.1668H25.6667V51.3335H64.1667V70.5835H51.3333V83.4168H64.1667V115.5C64.1667 118.904 65.5188 122.168 67.9255 124.575C70.3322 126.981 73.5964 128.334 77 128.334H128.333V141.167H141.167"
              fill="#FFE108"
            />
          </svg>
        </div>
        <div className="automation-section__heading__img3">
          <svg viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M81.3633 38.5002H72.6367L44.9167 102.667H57.75L62.4342 89.8335H91.5658L96.25 102.667H109.083L81.3633 38.5002ZM66.0917 80.2085L77 51.3335L87.9083 80.2085H66.0917ZM111.65 130.9L121.917 141.167H89.8333V109.084L102.667 121.917C118.003 112.998 128.333 95.9294 128.333 77.0002C128.333 48.7027 105.298 25.6668 77 25.6668C48.7025 25.6668 25.6666 48.7027 25.6666 77.0002C25.6666 95.9294 35.9975 112.484 51.3333 121.404V135.777C28.6825 125.831 12.8333 103.309 12.8333 77.0002C12.8333 41.7085 41.7083 12.8335 77 12.8335C112.292 12.8335 141.167 41.7085 141.167 77.0002C141.167 99.651 129.424 119.479 111.65 130.9Z"
              fill="#9289FF"
            />
          </svg>
        </div>
      </div>
      <div className="design-card-container automation-section">
        {cloudCard.map((e, i) => (
          <InfoCards heading={e.heading} img={e.img} desc={e.desc} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ServicesAutomationSection
