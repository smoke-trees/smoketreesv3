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
      heading: "Secure",
      desc: "Always stay a step ahead. Let us reduce the risk of failure and vulnerabilities with proven processes and methodologies. With our smart alerts in place, we help you handle mishaps and incidents on the go, and identify the source meticulously.",
    },
    {
      img: Cloud3,
      heading: "Manage",
      desc: "We engineer applications with Intelligent Monitoring and manage hybrid multi-cloud environments. Our capacity to stay up-to-date with the latest trends in cloud technologies gives us the upper hand to help you build the most efficient cloud solution at the least possible running cost.",
    },
  ]

  return (
    <div className="development-section">
      <div className="design-section__heading__container">
        <div className={`design-section__heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>
          Cloud Applications
        </div>
        <div className={`design-section__heading__description ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus pharetra netus mi eget elit eget quam leo.
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
      </div>
      <div className="development-card-container">
        {cloudCard.map((e, i) => (
          <InfoCards heading={e.heading} img={e.img} desc={e.desc} />
        ))}
      </div>
    </div>
  )
}

export default ServicesCloudSection
