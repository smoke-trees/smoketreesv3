import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
// import Design1 from "../../assets/images/design-icons/Design1.svg"
import Design2 from "../../assets/images/design-icons/Design2.svg"
import Design3 from "../../assets/images/design-icons/Design3.svg"
import Design4 from "../../assets/images/design-icons/Design4.svg"
// import Design5 from "../../assets/images/design-icons/Design5.svg"
// import Design6 from "../../assets/images/design-icons/Design6.svg"

import "./services.scss"
import InfoCards from "../../components/info-cards/info-cards"

const ServicesDesignSection = () => {
  const { darkMode } = useContext(DarkModeContext)
  const designCard = [
    {
      img: Design4,
      heading: "UI design",
      desc: "A visually appealing platform is what separates a user’s choice from a user’s desire. This is where we come in.",
      desc2: "Collaborate with us to make a beautiful and interactive experiences for your audience.",
    },
    {
      img: Design2,
      heading: "User Journeys",
      desc: "Mapping a holistic view of the user’s experience, starting from the point of discovery, and incorporating the different phases of a user’s flow through the platform.",
      desc2:
        "Let us analyze various options and research for hours on how your product will work well with your target audience.",
    },
    {
      img: Design3,
      heading: "Wireframing",
      desc: "Creating a blueprint of a platform, helping you and others working with you to visualize the basic structure of what is being built. So that everyone is on the same page, and every page is vital.",
    },
  ]

  return (
    <div className="design-section">
      <div className="design-section__heading__container">
        <div className={`design-section__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Design</div>
        <div className={`design-section__heading__description ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus pharetra netus mi eget elit eget quam leo.
        </div>
        <div className="design-section__heading__img1">
          <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="51" width="50" height="50" fill="url(#paint0_radial_302_17)" />
            <rect x="50" width="50" height="50" fill="#30EC9C" />
            <defs>
              <radialGradient
                id="paint0_radial_302_17"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25 76) rotate(90) scale(25)"
              >
                <stop stop-color="#EEEDFF" stop-opacity="0.13" />
                <stop offset="1" stop-color="#D2CEFF" stop-opacity="0.19" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="design-section__heading__img2">
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="38" width="50" height="50" fill="#FFD089" />
            <path
              d="M87.125 8.58333C87.9583 7.75 87.9583 6.5 87.125 5.66667L82.3333 0.875C81.5 0.0416667 80.25 0.0416667 79.4167 0.875L75.6667 4.625L83.5833 12.5417L87.125 8.58333ZM50.25 29.8333V37.75H58.1667L81.0833 14.625L73.375 6.70833L50.25 29.8333Z"
              fill="#FFD089"
            />
          </svg>
        </div>
        <div className="design-section__heading__img3">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="50" height="50" fill="url(#paint0_radial_302_19)" />
            <rect width="50" height="50" fill="#9289FF" />
            <defs>
              <radialGradient
                id="paint0_radial_302_19"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(75 75) rotate(90) scale(25)"
              >
                <stop stop-color="#EEEDFF" stop-opacity="0.13" />
                <stop offset="1" stop-color="#D2CEFF" stop-opacity="0.19" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="design-section__heading__img4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.5417 0.333374L31.9583 9.39588L29.9583 9.93754C29.0208 8.12504 28.0625 6.31254 26.9583 5.39587C25.8542 4.50004 24.5625 4.50004 23.2917 4.50004H18.0833V26.375C18.0833 27.4167 18.0833 28.4584 18.7708 28.9792C19.4792 29.5 20.8542 29.5 22.25 29.5V31.5834H9.74999V29.5C11.1458 29.5 12.5208 29.5 13.2292 28.9792C13.9167 28.4584 13.9167 27.4167 13.9167 26.375V4.50004H8.70832C7.43749 4.50004 6.14582 4.50004 5.04166 5.39587C3.93749 6.31254 2.97916 8.12504 2.04166 9.93754L0.0416565 9.39588L2.45832 0.333374H29.5417Z"
              fill="#5EDEAA"
            />
          </svg>
        </div>
        <div className="design-section__heading__img5">
          <svg viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="91" width="50" height="50" fill="url(#paint0_radial_302_20)" />
            <rect x="50" width="91" height="91" fill="#FFE108" />
            <defs>
              <radialGradient
                id="paint0_radial_302_20"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25 116) rotate(90) scale(25)"
              >
                <stop stop-color="#EEEDFF" stop-opacity="0.13" />
                <stop offset="1" stop-color="#D2CEFF" stop-opacity="0.19" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="design-section__heading__img6">
          <svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M41.75 0H4.24999C1.95833 0 0.0833282 1.875 0.0833282 4.16667V37.5C0.0833282 39.7917 1.95833 41.6667 4.24999 41.6667H41.75C44.0417 41.6667 45.9167 39.7917 45.9167 37.5V4.16667C45.9167 1.875 44.0417 0 41.75 0ZM41.75 37.5H4.24999V8.33333H41.75V37.5ZM12.5833 45.8333H16.75V50H12.5833V45.8333ZM20.9167 45.8333H25.0833V50H20.9167V45.8333ZM29.25 45.8333H33.4167V50H29.25V45.8333Z"
              fill="#9289FF"
            />
          </svg>
        </div>
        <div className="design-section__heading__img7">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" fill="url(#paint0_radial_302_5)" />
            <defs>
              <radialGradient
                id="paint0_radial_302_5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25 25) rotate(90) scale(25)"
              >
                <stop stop-color="#EEEDFF" stop-opacity="0.13" />
                <stop offset="1" stop-color="#D2CEFF" stop-opacity="0.19" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="design-section__heading__img8">
          <svg width="76" height="72" viewBox="0 0 76 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M75.8334 4.33335C75.8334 2.02085 73.9584 0.166687 71.6667 0.166687H38.3334C37.2283 0.166687 36.1685 0.605674 35.3871 1.38708C34.6057 2.16848 34.1667 3.22829 34.1667 4.33335V29.3334C34.1667 30.4384 34.6057 31.4982 35.3871 32.2796C36.1685 33.061 37.2283 33.5 38.3334 33.5H67.5L75.8334 41.8334V4.33335Z"
              fill="#30EC9C"
            />
            <path
              d="M0.666648 47.3333C0.666648 45.8533 1.86665 44.6666 3.33331 44.6666H24.6666C25.3739 44.6666 26.0522 44.9476 26.5523 45.4477C27.0524 45.9478 27.3333 46.626 27.3333 47.3333V63.3333C27.3333 64.0405 27.0524 64.7188 26.5523 65.2189C26.0522 65.719 25.3739 66 24.6666 66H5.99998L0.666648 71.3333V47.3333Z"
              fill="#9289FF"
            />
          </svg>
        </div>
        <div className="design-section__heading__img9">
          <svg width="75" height="125" viewBox="0 0 75 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="50" width="50" height="50" fill="#FFA8F1" />
            <path
              d="M40.0417 24.8125C39.3542 25.5 38.9792 26.3542 38.875 27.25L50.3542 32.1667L68.0417 14.5C69.6667 12.8542 69.6667 10.2292 68.0417 8.60417L65.0833 5.64583C63.4583 4.02083 60.8333 4.02083 59.1875 5.64583L40.0417 24.8125ZM35.4167 33.3333V45.3125L47.5208 34.4375L37.1042 30.2708L35.4167 33.3333ZM60.6667 10.0625C61.4583 9.25 62.8125 9.25 63.625 10.0625C64.4375 10.8958 64.4375 12.2083 63.625 13.0208C62.8125 13.8333 61.4583 13.8333 60.6667 13.0208C59.8542 12.2083 59.8542 10.8958 60.6667 10.0625Z"
              fill="#FFA8F1"
            />
            <line x1="1.07556" y1="124.619" x2="34.0756" y2="44.6187" stroke="white" stroke-width="2" />
          </svg>
        </div>
      </div>
      <div className="design-card-container">
        {designCard.map((e, i) => (
          <InfoCards heading={e.heading} img={e.img} desc={e.desc} desc2={e.desc2} index={`0${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default ServicesDesignSection
