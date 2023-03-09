import React, { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import Cloud1 from '../../assets/images/cloud-icons/cloud1.svg'
import Cloud2 from '../../assets/images/cloud-icons/cloud2.svg'
import Cloud3 from '../../assets/images/cloud-icons/cloud3.svg'

import "./services.scss"
import InfoCards from "../../components/info-cards/info-cards"

const ServicesCloudSection = () => {
  const { darkMode } = useContext(DarkModeContext)
  const cloudCard = [
    {
      img: Cloud1,
      heading: "Cloud Architecture Design",
      desc: "System design and architecture is our foremost priority. We help you achieve cloud governance, compliance, and visibility across your IT environment with a digital self-service model.",
    },
    {
      img: Cloud2,
      heading: "Security",
      desc: "Cloud governance, compliance, and visibility across your IT environment with a digital self-service model. Reduce risk of failure with proven processes and methodologies",
    },
    {
      img: Cloud3,
      heading: "Manage",
      desc: "Intelligent monitoring and preemptive management of hybrid multi-cloud environment",
    },
  ]

  return (
    <div className="development-section">
      <div className="design-section__heading__container">
        <div className={`design-section__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>
          Cloud Applications
        </div>
        <div className={`design-section__heading__description ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
        Cloud design refers to the process of designing and building cloud-based systems, services, and applications.
        </div>
        <div className="cloud-section__heading__img1">
          <svg viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M48.75 162.5C35.8207 162.5 23.4209 157.364 14.2785 148.221C5.13615 139.079 0 126.679 0 113.75C0 88.6437 19.0125 67.925 43.4688 65.325C53.625 45.825 74.0187 32.5 97.5 32.5C126.994 32.5 151.613 53.4625 157.219 81.25C178.344 82.7938 195 100.425 195 121.875C195 127.21 193.949 132.493 191.908 137.422C189.866 142.35 186.874 146.829 183.101 150.601C179.329 154.374 174.85 157.366 169.922 159.408C164.993 161.449 159.71 162.5 154.375 162.5H48.75ZM73.8563 68.25L36.5625 105.625L73.8563 143L85.3125 131.463L59.475 105.625L85.3125 79.7875L73.8563 68.25ZM121.144 68.25L109.688 79.7875L135.525 105.625L109.688 131.463L121.144 143L158.438 105.625L121.144 68.25Z"
              fill="#9289FF"
            />
          </svg>
        </div>
        <div className="cloud-section__heading__img2">
          <svg viewBox="0 0 240 248" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M115.6 91.6566V175.667H203.2C221.7 174.323 230 162.543 230 148.077C230 132.783 218.8 120.487 203.8 120.487C200 120.487 196.8 121.313 193.5 122.76C191.1 98.5799 171.2 79.6699 146.7 79.6699C135 79.6699 123.9 84.2166 115.6 91.6566ZM106.8 102.197C103.8 100.337 100.6 98.8899 97.1 98.1666V175.667H111V96.5133C109.5 98.1666 108.1 100.233 106.8 102.197ZM83.3 96.6166V175.667H92.5V96.9266C90.6 96.6166 88.7 96.5133 86.7 96.5133C85.5 96.5133 84.4 96.5133 83.3 96.6166ZM65 103.333V175.667H74.1V98.5799C70.8 99.7166 67.7 101.37 65 103.333ZM48.3 129.167C47.7 129.167 47.1 128.547 46.4 128.237V175.667H55.6V112.22C51.9 117.18 49.4 123.07 48.3 129.167ZM27.9 126.273V174.737C30 175.357 32.4 175.667 35 175.667H37.2V125.447C36.4 125.343 35.6 125.24 35 125.24C32.4 125.24 30 125.653 27.9 126.273ZM10 150.453C10 158.203 13.4 165.023 18.7 169.673V131.337C13.4 135.883 10 142.807 10 150.453Z"
              fill="#FFE108"
            />
          </svg>
        </div>
        <div className="cloud-section__heading__img3">
          <svg viewBox="0 0 222 222" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M175.75 166.5H55.5C45.687 166.5 36.2759 162.602 29.337 155.663C22.3982 148.724 18.5 139.313 18.5 129.5C18.5 119.687 22.3982 110.276 29.337 103.337C36.2759 96.3982 45.687 92.5 55.5 92.5H62.0675C68.1725 71.1325 87.875 55.5 111 55.5C124.493 55.5 137.433 60.86 146.974 70.4009C156.515 79.9419 161.875 92.8821 161.875 106.375V111H175.75C183.11 111 190.168 113.924 195.372 119.128C200.576 124.332 203.5 131.39 203.5 138.75C203.5 146.11 200.576 153.168 195.372 158.372C190.168 163.576 183.11 166.5 175.75 166.5ZM178.988 92.7775C172.698 60.9575 144.67 37 111 37C84.2675 37 61.05 52.17 49.4875 74.2775C21.645 77.33 0 100.825 0 129.5C0 144.22 5.8473 158.336 16.2556 168.744C26.6638 179.153 40.7805 185 55.5 185H175.75C181.824 185 187.838 183.804 193.449 181.479C199.06 179.155 204.159 175.748 208.454 171.454C212.748 167.159 216.155 162.06 218.479 156.449C220.804 150.838 222 144.824 222 138.75C222 114.33 203.038 94.535 178.988 92.7775Z"
              fill="#9289FF"
            />
          </svg>
        </div>
        <div className="cloud-section__heading__img4">
          <svg viewBox="0 0 267 413" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path
                d="M232.583 154.875V120.458H198.167V86.0417C198.167 76.9138 194.54 68.1598 188.086 61.7054C181.632 55.251 172.878 51.625 163.75 51.625H-77.1668C-86.2947 51.625 -95.0487 55.251 -101.503 61.7054C-107.957 68.1598 -111.583 76.9138 -111.583 86.0417V326.958C-111.583 336.086 -107.957 344.84 -101.503 351.295C-95.0487 357.749 -86.2947 361.375 -77.1668 361.375H163.75C172.878 361.375 181.632 357.749 188.086 351.295C194.54 344.84 198.167 336.086 198.167 326.958V292.542H232.583V258.125H198.167V223.708H232.583V189.292H198.167V154.875H232.583ZM163.75 326.958H-77.1668V86.0417H163.75V326.958ZM-42.7502 223.708H43.2915V292.542H-42.7502V223.708ZM60.4998 120.458H129.333V172.083H60.4998V120.458ZM-42.7502 120.458H43.2915V206.5H-42.7502V120.458ZM60.4998 189.292H129.333V292.542H60.4998V189.292Z"
                fill="#9289FF"
              />
              <g clipPath="url(#clip0_718_138)">
                <path
                  d="M232.583 154.875V120.458H198.167V86.0417C198.167 76.9138 194.54 68.1598 188.086 61.7054C181.632 55.251 172.878 51.625 163.75 51.625H-77.1668C-86.2947 51.625 -95.0487 55.251 -101.503 61.7054C-107.957 68.1598 -111.583 76.9138 -111.583 86.0417V326.958C-111.583 336.086 -107.957 344.84 -101.503 351.295C-95.0487 357.749 -86.2947 361.375 -77.1668 361.375H163.75C172.878 361.375 181.632 357.749 188.086 351.295C194.54 344.84 198.167 336.086 198.167 326.958V292.542H232.583V258.125H198.167V223.708H232.583V189.292H198.167V154.875H232.583ZM163.75 326.958H-77.1668V86.0417H163.75V326.958ZM-42.7502 223.708H43.2915V292.542H-42.7502V223.708ZM60.4998 120.458H129.333V172.083H60.4998V120.458ZM-42.7502 120.458H43.2915V206.5H-42.7502V120.458ZM60.4998 189.292H129.333V292.542H60.4998V189.292Z"
                  fill="#FFE108"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_718_138">
                <rect width="218.446" height="204.793" fill="white" transform="translate(-60.6694 102.397)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="cloud-section__heading__img5">
          <svg viewBox="0 0 236 222" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path
                d="M27.74 18.2517C22.8993 18.2517 18.2569 20.1746 14.8341 23.5975C11.4112 27.0204 9.48828 31.6627 9.48828 36.5034V146.013C9.48828 156.143 17.7015 164.265 27.74 164.265H91.6208V182.517H73.3692V200.769H146.376V182.517H128.124V164.265H192.005C196.846 164.265 201.488 162.342 204.911 158.919C208.334 155.497 210.257 150.854 210.257 146.013V36.5034C210.257 31.6627 208.334 27.0204 204.911 23.5975C201.488 20.1746 196.846 18.2517 192.005 18.2517H27.74ZM27.74 36.5034H192.005V146.013H27.74V36.5034ZM137.25 45.6292L105.31 77.5697L137.25 109.51L150.026 96.7339L130.862 77.5697L150.026 58.4054L137.25 45.6292ZM82.495 73.0068L69.7188 85.7829L88.8831 104.947L69.7188 124.111L82.495 136.888L114.435 104.947"
                fill="#9289FF"
              />
              <path
                d="M105.31 77.5696L137.25 45.6292L150.026 58.4053L130.862 77.5696L150.026 96.7339L137.25 109.51L105.31 77.5696Z"
                fill="#9289FF"
              />
              <path
                d="M260.169 169.852H165.186V117.705H260.169V169.852ZM260.169 107.275H165.186C159.329 107.275 154.632 111.916 154.632 117.705V180.282C154.632 183.048 155.744 185.701 157.723 187.657C159.703 189.613 162.387 190.711 165.186 190.711H202.124L191.57 206.356V211.57H233.785V206.356L223.231 190.711H260.169C262.968 190.711 265.653 189.613 267.632 187.657C269.611 185.701 270.723 183.048 270.723 180.282V117.705C270.723 111.916 265.974 107.275 260.169 107.275Z"
                fill="#FFE108"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="design-card-container">
        {cloudCard.map((e, i) => (
          <InfoCards heading={e.heading} img={e.img} desc={e.desc} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ServicesCloudSection
