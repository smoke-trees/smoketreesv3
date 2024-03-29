import React, { useEffect } from "react"
import { Navbar } from "../../components"
import MbHero2 from "../../assets/images/mb-hero2.png"
import MbDiv1 from "../../assets/images/mb-div1-phone.png"
import MbDiv2 from "../../assets/images/mb-div2-phone.png"
import Footer from "../../components/footer/footer"
import { Link } from "react-router-dom"
import Kidscur from "../../assets/images/kidscur.png"
import Altilium from "../../assets/images/altilium.png"
import Ombhu from "../../assets/images/ombhu.png"
import Menova from "../../assets/images/menova.png"
// import MBLarge from "../../assets/images/meri-bachat-big.png"
import { DarkModeContext } from "../../context/darkModeContext"
import { useContext } from "react"

const MeriBachat = () => {
  const { darkMode } = useContext(DarkModeContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="meri-bachat-body">
      <Navbar diffColor="#FFF8C8" />
      <ProdInfoHero />
      <div className="meri-bachat-bgc project-details__data">
        <div className="project-details__data__product light-mode__color1">THE PRODUCT</div>
        <div className="mb-data-div1">
          <div className="mb-data-div1__img-cont">
            <img src={MbDiv1} alt="" />
            <div className="mb-data-div1__img-cont__ball">
              <svg viewBox="0 0 688 694" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 347C0 155.357 155.357 0 347 0C538.642 0 694 155.357 694 347C694 538.638 538.638 694 347 694C155.357 694 0 538.638 0 347Z"
                  fill="url(#paint0_radial_743_6)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_743_6"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(246.528 214.898) rotate(48.4975) scale(506.806 500.329)"
                  >
                    <stop stopColor="#525FBF" />
                    <stop offset="0.550106" stopColor="#454F9A" />
                    <stop offset="1" stopColor="#212752" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="mb-data-div1__text-cont">
            <div className="mb-data-div1__text-cont__heading meri-bachat-text">One stopshop for all your additional savings!</div>
            <div className="mb-data-div1__line" />
            <div className="mb-data-div1__text-cont__desc light-mode__color1">
              MeriBachat is the leading platform for buying gift cards and coupons. With over 350 brands to choose from, avail
              discounts all year round with 0% convenience fees and compare prices and features of various products at a single
              platform.
            </div>
          </div>
        </div>
        <div className="mb-data-div2">
          <div className="mb-data-div2__img-cont">
            <img src={MbDiv2} alt="" />
            <div className="mb-data-div2__img-cont__ball">
              <svg viewBox="0 0 560 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M270 -1.26763e-05C430.163 -5.67536e-06 560 129.837 560 290C560 450.162 430.163 580 270 580C109.842 580 -20 450.158 -20 290C-20 129.837 109.842 -1.96771e-05 270 -1.26763e-05Z"
                  fill="url(#paint0_radial_743_10)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_743_10"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(380.402 206.032) rotate(138.497) scale(423.555 418.143)"
                  >
                    <stop stopColor="#525FBF" />
                    <stop offset="0.550106" stopColor="#454F9A" />
                    <stop offset="1" stopColor="#212752" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="mb-data-div2__text-cont__desc light-mode__color1">
              Gain cashback from well known platforms like Flipkart, Myntra, 1MG, HomeCentre, Udemy etc.
            </div>
          </div>
        </div>
      </div>
      <div className="more-projects__container" style={{marginBottom: '50px'}}>
          <div className="more-projects__div1">
            <Link to="/project/kidscur">
            <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Kidscur</div>
              <img src={Kidscur} alt="" style={{ width: "100%" }} />
            </Link>
            <Link to="/project/altilium">
              <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Altilium ERP</div>
              <img src={Altilium} alt="" style={{ width: "100%" }} />
            </Link>
          </div>
          <div className="more-projects__div2">
            <Link to="/project/ombhu">
            <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Ombhu</div>
              <img src={Ombhu} alt="" style={{ width: "100%" }} />
            </Link>
            <Link to="/project/menova">
            <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>Menova</div>
              <img src={Menova} alt="" style={{ width: "100%" }} />
            </Link>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default MeriBachat

const ProdInfoHero = () => {
  return (
    <div className="project-details__container">
      <div className="project-details__title light-mode__color1">MeriBachat</div>
      <div className="project-details__desc light-mode__color1">One stop-shop for all your additional savings!</div>
      <div className="project-details__logo-cont meri-bachat-bgc">
        <div className="project-details__logo-cont__top-left">
          <svg width="447" height="364" viewBox="0 0 447 364" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_721_1345)">
              <path
                d="M331.787 171.365C392.864 206.628 392.865 263.797 331.786 299.058C270.704 334.321 171.676 334.32 110.596 299.058C49.516 263.797 49.5145 206.627 110.595 171.365C171.674 136.104 270.707 136.104 331.787 171.365Z"
                fill="#FFE108"
              />
              <path
                d="M131.168 287.182C81.4499 258.48 81.4498 211.945 131.168 183.242C180.886 154.54 261.495 154.54 311.213 183.242C360.93 211.944 360.93 258.481 311.213 287.182C261.495 315.885 180.885 315.884 131.168 287.182Z"
                fill="#EEBA04"
              />
              <path
                d="M239.136 258.571L205.132 239.034L216.44 264.773L210.543 268.177L166.766 262.022L199.962 281.186L187.685 288.274L131.146 255.634L141.97 249.386L198.267 257.453L183.97 225.139L194.712 218.937L251.412 251.484L239.136 258.571ZM276.942 202.8C281.196 201.525 285.45 201.059 289.704 201.401C293.904 201.712 297.753 202.878 301.254 204.899C306.208 207.758 308.093 211.084 306.908 214.877C305.723 218.608 301.442 222.602 294.066 226.86L264.827 243.74L208.288 211.1L235.911 195.153C242.803 191.174 249.399 188.89 255.7 188.299C262.053 187.677 267.492 188.672 272.016 191.283C274.762 192.868 276.539 194.671 277.346 196.692C278.208 198.681 278.073 200.717 276.942 202.8ZM231.145 209.282L244.472 216.975L257.477 209.468C260.708 207.603 262.593 205.862 263.131 204.246C263.669 202.629 262.834 201.184 260.626 199.909C258.419 198.635 255.942 198.168 253.196 198.51C250.396 198.821 247.381 199.909 244.15 201.774L231.145 209.282ZM283.241 221.731C286.688 219.742 288.708 217.924 289.299 216.276C289.946 214.597 289.085 213.074 286.716 211.706C282.031 209.002 276.216 209.655 269.269 213.665L254.004 222.478L267.976 230.544L283.241 221.731Z"
                fill="#FFF8DF"
              />
            </g>
            <g clipPath="url(#clip1_721_1345)">
              <path
                d="M333.125 117.887C394.202 153.149 394.203 210.319 333.123 245.58C272.042 280.843 173.013 280.841 111.934 245.58C50.8539 210.319 50.8523 153.148 111.933 117.887C173.012 82.6254 272.045 82.6252 333.125 117.887Z"
                fill="#FFE108"
              />
              <path
                d="M132.506 233.704C82.7877 205.002 82.7877 158.466 132.506 129.764C182.224 101.062 262.833 101.062 312.551 129.764C362.268 158.465 362.268 205.002 312.551 233.704C262.833 262.406 182.223 262.406 132.506 233.704Z"
                fill="#EEBA04"
              />
              <path
                d="M240.473 205.093L206.469 185.556L217.777 211.295L211.881 214.698L168.104 208.543L201.3 227.708L189.023 234.795L132.484 202.155L143.307 195.907L199.605 203.974L185.308 171.66L196.05 165.459L252.75 198.005L240.473 205.093ZM278.28 149.322C282.534 148.047 286.788 147.581 291.041 147.923C295.242 148.233 299.091 149.4 302.592 151.42C307.545 154.28 309.431 157.606 308.246 161.398C307.061 165.129 302.78 169.123 295.403 173.382L266.165 190.261L209.626 157.622L237.249 141.675C244.141 137.696 250.737 135.411 257.038 134.82C263.391 134.199 268.83 135.193 273.353 137.804C276.1 139.39 277.877 141.193 278.683 143.214C279.546 145.203 279.411 147.239 278.28 149.322ZM232.483 155.803L245.81 163.497L258.815 155.989C262.045 154.124 263.93 152.383 264.469 150.767C265.007 149.151 264.172 147.705 261.964 146.431C259.757 145.156 257.28 144.69 254.534 145.032C251.734 145.343 248.719 146.431 245.488 148.296L232.483 155.803ZM284.579 168.253C288.025 166.263 290.045 164.445 290.637 162.797C291.284 161.119 290.423 159.595 288.054 158.228C283.369 155.523 277.553 156.176 270.607 160.187L255.341 168.999L269.314 177.066L284.579 168.253Z"
                fill="#FFF8DF"
              />
            </g>
            <g clipPath="url(#clip2_721_1345)">
              <path
                d="M334.459 64.4082C395.537 99.6707 395.538 156.84 334.458 192.102C273.377 227.364 174.348 227.363 113.269 192.102C52.1888 156.84 52.1873 99.6699 113.268 64.4082C174.347 29.1469 273.38 29.1468 334.459 64.4082Z"
                fill="#FFE108"
              />
              <path
                d="M133.841 180.226C84.1227 151.523 84.1227 104.988 133.841 76.2855C183.559 47.5834 264.168 47.5832 313.886 76.2855C363.603 104.987 363.603 151.524 313.886 180.225C264.168 208.928 183.558 208.927 133.841 180.226Z"
                fill="#EEBA04"
              />
              <path
                d="M241.808 151.614L207.804 132.077L219.112 157.816L213.216 161.22L169.439 155.065L202.635 174.229L190.358 181.317L133.819 148.677L144.642 142.429L200.939 150.496L186.643 118.182L197.385 111.98L254.085 144.527L241.808 151.614ZM279.614 95.8435C283.869 94.5684 288.123 94.1023 292.376 94.4445C296.577 94.7549 300.426 95.921 303.927 97.9418C308.88 100.802 310.766 104.127 309.58 107.92C308.396 111.651 304.115 115.645 296.738 119.903L267.5 136.783L210.961 104.143L238.584 88.1964C245.476 84.2173 252.072 81.9327 258.372 81.3419C264.726 80.7204 270.165 81.7147 274.688 84.3259C277.435 85.9112 279.212 87.7141 280.018 89.7352C280.88 91.7244 280.746 93.7601 279.614 95.8435ZM233.818 102.325L247.145 110.018L260.15 102.511C263.38 100.646 265.265 98.9049 265.804 97.2887C266.342 95.6724 265.507 94.227 263.299 92.9525C261.092 91.678 258.615 91.2116 255.869 91.5534C253.069 91.8641 250.054 92.9522 246.823 94.8172L233.818 102.325ZM285.914 114.774C289.36 112.785 291.38 110.967 291.972 109.319C292.619 107.64 291.758 106.117 289.389 104.749C284.704 102.045 278.888 102.698 271.942 106.708L256.676 115.521L270.649 123.587L285.914 114.774Z"
                fill="#FFF8DF"
              />
            </g>
            <defs>
              <clipPath id="clip0_721_1345">
                <rect
                  width="256.526"
                  height="256.526"
                  fill="white"
                  transform="matrix(0.866044 -0.499967 0.866044 0.499967 0 235.211)"
                />
              </clipPath>
              <clipPath id="clip1_721_1345">
                <rect
                  width="256.526"
                  height="256.526"
                  fill="white"
                  transform="matrix(0.866044 -0.499967 0.866044 0.499967 1.33789 181.733)"
                />
              </clipPath>
              <clipPath id="clip2_721_1345">
                <rect
                  width="256.526"
                  height="256.526"
                  fill="white"
                  transform="matrix(0.866044 -0.499967 0.866044 0.499967 2.67285 128.255)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="project-details__logo-cont__logo">
          <svg width="458" height="458" viewBox="0 0 458 458" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M458 229.001C457.995 355.473 355.471 458 228.999 458C102.522 458 0 355.473 0 229.001C0 102.528 102.525 0 228.999 0C355.471 0 458 102.528 458 229.001Z"
              fill="#FFE108"
            />
            <path
              d="M42 228.5C42 125.499 125.499 42 228.5 42C331.501 42 415 125.499 415 228.5C415 331.498 331.498 415 228.5 415C125.499 415 42 331.498 42 228.5Z"
              fill="#EEBA04"
            />
            <path
              d="M201.494 287L201.327 216.8L166.888 274.632H154.683L120.412 218.304V287H95V170H117.402L161.204 242.708L204.336 170H226.571L226.905 287H201.494ZM340.6 226.16C347.29 228.277 352.527 231.843 356.316 236.857C360.107 241.76 362 247.833 362 255.076C362 265.327 357.989 273.239 349.963 278.81C342.05 284.271 330.459 287 315.19 287H254.671V170H311.846C326.112 170 337.034 172.73 344.613 178.19C352.303 183.65 356.15 191.06 356.15 200.42C356.15 206.103 354.757 211.173 351.969 215.63C349.295 220.087 345.506 223.597 340.6 226.16ZM281.586 190.392V217.97H308.504C315.19 217.97 320.262 216.8 323.716 214.46C327.171 212.12 328.898 208.666 328.898 204.097C328.898 199.529 327.171 196.13 323.716 193.901C320.262 191.561 315.19 190.392 308.504 190.392H281.586ZM313.183 266.608C320.316 266.608 325.666 265.439 329.232 263.098C332.911 260.759 334.75 257.137 334.75 252.235C334.75 242.54 327.561 237.694 313.183 237.694H281.586V266.608H313.183Z"
              fill="#FFF8DF"
            />
          </svg>
        </div>
        <div className="project-details__logo-cont__bot-right">
          <img src={MbHero2} alt="" />
        </div>
      </div>
    </div>
  )
}
