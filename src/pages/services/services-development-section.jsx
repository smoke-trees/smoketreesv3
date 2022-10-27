import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import Development1 from '../../assets/images/development-icons/development1.svg'
import Development2 from '../../assets/images/development-icons/development2.svg'
import Development3 from '../../assets/images/development-icons/development3.svg'

import "./services.scss"
import InfoCards from "../../components/info-cards/info-cards"

const ServicesDevelopmentSection = () => {
  const { darkMode } = useContext(DarkModeContext)
  const develpomentCard = [
    {
      img: Development1,
      heading: "Website Developement",
      desc: "The age old necessity of every platform, but with our own twist to it. We have our arsenal filled with the latest technologies and ultra-focused solutions, so we work faster and better than any other team.",
    },
    {
      img: Development2,
      heading: "Mobile App Developement",
      desc: "Build applications for iOS, Android and other platforms with unprecedented interactivity and animated content with us. Our industry-focused app solutions have proven to accelerate businesses beyond imagination.",
    },
    {
      img: Development3,
      heading: "Backend Developement",
      desc: "Build a house with a solid foundation. Our backend solutions are built to tackle unparalleled resilience and speed, so you can be assured on the scalability and accountability of our implementations and microservices.",
    },
  ]

  return (
    <div className="development-section">
      <div className="design-section__heading__container">
        <div className={`design-section__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>
          Deve
          <svg className="design-section__heading__tower" viewBox="0 0 51 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 0.666748H42C44.188 0.666748 46.2865 1.79055 47.8336 3.79094C49.3808 5.79133 50.25 8.50444 50.25 11.3334V96.6667C50.25 99.4957 49.3808 102.209 47.8336 104.209C46.2865 106.21 44.188 107.333 42 107.333H9C6.81196 107.333 4.71354 106.21 3.16637 104.209C1.61919 102.209 0.75 99.4957 0.75 96.6667V11.3334C0.75 8.50444 1.61919 5.79133 3.16637 3.79094C4.71354 1.79055 6.81196 0.666748 9 0.666748ZM9 11.3334V22.0001H42V11.3334H9ZM42 32.6667H9V43.3334H42V32.6667ZM42 86.0001H33.75V96.6667H42V86.0001Z"
              fill="#FFE108"
            />
          </svg>
          <svg className="design-section__heading__cog" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42 28C45.713 28 49.274 29.475 51.8995 32.1005C54.525 34.726 56 38.287 56 42C56 45.713 54.525 49.274 51.8995 51.8995C49.274 54.525 45.713 56 42 56C38.287 56 34.726 54.525 32.1005 51.8995C29.475 49.274 28 45.713 28 42C28 38.287 29.475 34.726 32.1005 32.1005C34.726 29.475 38.287 28 42 28ZM42 35C40.1435 35 38.363 35.7375 37.0502 37.0503C35.7375 38.363 35 40.1435 35 42C35 43.8565 35.7375 45.637 37.0502 46.9497C38.363 48.2625 40.1435 49 42 49C43.8565 49 45.637 48.2625 46.9497 46.9497C48.2625 45.637 49 43.8565 49 42C49 40.1435 48.2625 38.363 46.9497 37.0503C45.637 35.7375 43.8565 35 42 35ZM35 77C34.125 77 33.39 76.37 33.25 75.53L31.955 66.255C29.75 65.38 27.86 64.19 26.04 62.79L17.325 66.325C16.555 66.605 15.61 66.325 15.19 65.555L8.19 53.445C7.735 52.675 7.945 51.73 8.61 51.205L15.995 45.395L15.75 42L15.995 38.5L8.61 32.795C7.945 32.27 7.735 31.325 8.19 30.555L15.19 18.445C15.61 17.675 16.555 17.36 17.325 17.675L26.04 21.175C27.86 19.81 29.75 18.62 31.955 17.745L33.25 8.47C33.39 7.63 34.125 7 35 7H49C49.875 7 50.61 7.63 50.75 8.47L52.045 17.745C54.25 18.62 56.14 19.81 57.96 21.175L66.675 17.675C67.445 17.36 68.39 17.675 68.81 18.445L75.81 30.555C76.265 31.325 76.055 32.27 75.39 32.795L68.005 38.5L68.25 42L68.005 45.5L75.39 51.205C76.055 51.73 76.265 52.675 75.81 53.445L68.81 65.555C68.39 66.325 67.445 66.64 66.675 66.325L57.96 62.825C56.14 64.19 54.25 65.38 52.045 66.255L50.75 75.53C50.61 76.37 49.875 77 49 77H35ZM39.375 14L38.08 23.135C33.88 24.01 30.17 26.25 27.475 29.365L19.04 25.725L16.415 30.275L23.8 35.7C22.4 39.795 22.4 44.24 23.8 48.3L16.38 53.76L19.005 58.31L27.51 54.67C30.205 57.75 33.88 59.99 38.045 60.83L39.34 70H44.66L45.955 60.865C50.12 59.99 53.795 57.75 56.49 54.67L64.995 58.31L67.62 53.76L60.2 48.335C61.6 44.24 61.6 39.795 60.2 35.7L67.585 30.275L64.96 25.725L56.525 29.365C53.83 26.25 50.12 24.01 45.92 23.17L44.625 14H39.375Z"
              fill="#9289FF"
            />
          </svg>
          pment
        </div>
        {/* <div className={`design-section__heading__description ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus pharetra netus mi eget elit eget quam leo.
        </div> */}
        <div className="development-section__heading__img1">
          <svg viewBox="0 0 185 149" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.375 12.25C15.1261 12.25 12.0103 13.5406 9.71294 15.8379C7.41562 18.1353 6.125 21.2511 6.125 24.5V98C6.125 104.799 11.6375 110.25 18.375 110.25H61.25V122.5H49V134.75H98V122.5H85.75V110.25H128.625C131.874 110.25 134.99 108.959 137.287 106.662C139.584 104.365 140.875 101.249 140.875 98V24.5C140.875 21.2511 139.584 18.1353 137.287 15.8379C134.99 13.5406 131.874 12.25 128.625 12.25H18.375ZM18.375 24.5H128.625V98H18.375V24.5ZM91.875 30.625L70.4375 52.0625L91.875 73.5L100.45 64.925L87.5875 52.0625L100.45 39.2L91.875 30.625ZM55.125 49L46.55 57.575L59.4125 70.4375L46.55 83.3L55.125 91.875L76.5625 70.4375"
              fill="#9289FF"
            />
            <path
              d="M70.4375 52.0625L91.875 30.625L100.45 39.2L87.5875 52.0625L100.45 64.925L91.875 73.5L70.4375 52.0625Z"
              fill="#9289FF"
            />
            <path
              d="M174.375 114H110.625V79H174.375V114ZM174.375 72H110.625C106.694 72 103.542 75.115 103.542 79V121C103.542 122.857 104.288 124.637 105.616 125.95C106.945 127.263 108.746 128 110.625 128H135.417L128.333 138.5V142H156.667V138.5L149.583 128H174.375C176.254 128 178.055 127.263 179.384 125.95C180.712 124.637 181.458 122.857 181.458 121V79C181.458 75.115 178.271 72 174.375 72Z"
              fill="#FFE108"
            />
          </svg>
        </div>
        <div className="development-section__heading__img2">
          <svg viewBox="0 0 229 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M160.875 163.583H129.083V172.667H160.875V186.292L179.042 168.125L160.875 149.958V163.583ZM188.125 159.042V145.417H219.917V136.333H188.125V122.708L169.958 140.875L188.125 159.042Z"
              fill="#9289FF"
            />
            <path
              d="M140 42H84L70 28H28C20.3 28 14 34.3 14 42V126C14 133.7 20.3 140 28 140H140C147.7 140 154 133.7 154 126V56C154 48.3 147.7 42 140 42ZM140 126H112V112H98V126H28V56H98V70H112V56H140V126ZM112 84V70H126V84H112ZM98 84H112V98H98V84ZM126 112H112V98H126V112Z"
              fill="#FFE108"
            />
          </svg>
        </div>
        <div className="development-section__heading__img3">
          <svg viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M110.917 45.375V35.2917H100.833V25.2083C100.833 22.5341 99.771 19.9693 97.88 18.0783C95.989 16.1873 93.4243 15.125 90.75 15.125H20.1666C17.4924 15.125 14.9276 16.1873 13.0367 18.0783C11.1457 19.9693 10.0833 22.5341 10.0833 25.2083V95.7917C10.0833 98.4659 11.1457 101.031 13.0367 102.922C14.9276 104.813 17.4924 105.875 20.1666 105.875H90.75C93.4243 105.875 95.989 104.813 97.88 102.922C99.771 101.031 100.833 98.4659 100.833 95.7917V85.7083H110.917V75.625H100.833V65.5417H110.917V55.4583H100.833V45.375H110.917ZM90.75 95.7917H20.1666V25.2083H90.75V95.7917ZM30.25 65.5417H55.4583V85.7083H30.25V65.5417ZM60.5 35.2917H80.6667V50.4167H60.5V35.2917ZM30.25 35.2917H55.4583V60.5H30.25V35.2917ZM60.5 55.4583H80.6667V85.7083H60.5V55.4583Z"
              fill="#9289FF"
            />
            <g clipPath="url(#clip0_309_475)">
              <path
                d="M110.917 45.375V35.2917H100.833V25.2083C100.833 22.5341 99.771 19.9693 97.88 18.0783C95.989 16.1873 93.4243 15.125 90.75 15.125H20.1666C17.4924 15.125 14.9276 16.1873 13.0367 18.0783C11.1457 19.9693 10.0833 22.5341 10.0833 25.2083V95.7917C10.0833 98.4659 11.1457 101.031 13.0367 102.922C14.9276 104.813 17.4924 105.875 20.1666 105.875H90.75C93.4243 105.875 95.989 104.813 97.88 102.922C99.771 101.031 100.833 98.4659 100.833 95.7917V85.7083H110.917V75.625H100.833V65.5417H110.917V55.4583H100.833V45.375H110.917ZM90.75 95.7917H20.1666V25.2083H90.75V95.7917ZM30.25 65.5417H55.4583V85.7083H30.25V65.5417ZM60.5 35.2917H80.6666V50.4167H60.5V35.2917ZM30.25 35.2917H55.4583V60.5H30.25V35.2917ZM60.5 55.4583H80.6666V85.7083H60.5V55.4583Z"
                fill="#FFE108"
              />
            </g>
            <defs>
              <clipPath id="clip0_309_475">
                <rect width="64" height="60" fill="white" transform="translate(25 30)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="development-section__heading__img4">
          <svg viewBox="0 0 165 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_716_3" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="264" height="264">
              <circle cx="132" cy="132" r="132" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_716_3)">
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -66 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 73.9199 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 13.2002 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -145.2 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 153.12 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -26.3999 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 113.52 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 52.7998 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -105.6 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -44.8799 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 95.04 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 34.3198 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -124.08 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -5.27979 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 134.64 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 73.9199 277.2)"
                stroke="#FFE108"
              />
              <line
                y1="-0.5"
                x2="363.381"
                y2="-0.5"
                transform="matrix(0.646593 -0.762835 0.646593 0.762835 -84.48 277.2)"
                stroke="#FFE108"
              />
            </g>
          </svg>
        </div>
        <div className="development-section__heading__img5">
          <svg viewBox="0 0 150 191" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="91" width="50" height="50" fill="url(#paint0_radial_403_6)" />
            <rect x="50" width="91" height="91" fill="#FFE108" />
            <rect x="100" y="141" width="50" height="50" fill="url(#paint1_radial_403_6)" />
            <rect x="50" y="91" width="50" height="50" fill="#9289FF" />
            <defs>
              <radialGradient
                id="paint0_radial_403_6"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(25 116) rotate(90) scale(25)"
              >
                <stop stopColor="#EEEDFF" stopOpacity="0.13" />
                <stop offset="1" stopColor="#D2CEFF" stopOpacity="0.19" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_403_6"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(125 166) rotate(90) scale(25)"
              >
                <stop stopColor="#EEEDFF" stopOpacity="0.13" />
                <stop offset="1" stopColor="#D2CEFF" stopOpacity="0.19" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="design-card-container">
        {develpomentCard.map((e, i) => (
          <InfoCards heading={e.heading} img={e.img} desc={e.desc} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ServicesDevelopmentSection
