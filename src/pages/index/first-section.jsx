import gsap from "gsap"
import React, { useEffect, useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { ChevronDown } from "../../assets/images"
import Target from "../../components/targets/target"

export function FirstSection({ isMobile }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  const headingDelay = 1
  const headingDuration = 0.01
  const headingStagger = 0.1
  useEffect(() => {
    const buildBetterAnimation = gsap
      .timeline({})
      .fromTo(
        ".build-better.typewriter-char",
        {
          autoAlpha: 0,
          display: "",
        },
        {
          opacity: 1,
          autoAlpha: 1,
          display: "inline",
          delay: headingDelay,
          duration: headingDuration,
          stagger: headingStagger,
        }
      )
      .fromTo(
        ".build-better__underline",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.5, ease: "power3.inout" }
      )
      .from(".explore__text, .explore__arrow", {
        opacity: 0,
        y: -20,
      })

    const ease = "power3.inout"
    const transformOrigin = "21.3% 39.79%"

    // const stAnimation1 =
    gsap.timeline().from("#st", {
      opacity: 0,
      y: 60,
      ease: "bounce.out",
      delay: 1,
      duration: 1.2,
    })

    const stAnimation = gsap
      .timeline()
      .from(".st__t", {
        ease,
        transformOrigin,
        rotation: 0,
        delay: 1.04,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: 10,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: -2,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.6,
        rotation: 5,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: 2,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1,
      })
      .to(".st__t", {
        ease,
        duration: 0.8,
        transformOrigin,
        rotation: 0,
      })
    const stAnimationReanimate = gsap
      .timeline({
        paused: true,
      })
      .pause()
      .from(".st__t", {
        ease,
        transformOrigin,
        rotation: 0,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: 10,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: -2,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.6,
        rotation: 5,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: 2,
      })
      .to(".st__t", {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1,
      })
      .to(".st__t", {
        ease,
        duration: 0.8,
        transformOrigin,
        rotation: 0,
      })
    const a = function (stAnimation, stAnimation2) {
      return () => {
        if (stAnimation.isActive() || stAnimation2.isActive()) {
          return
        }
        stAnimation.restart()
      }
    }
    const eventListener = a(stAnimationReanimate, stAnimation)
    const st = document.getElementById("st")
    st.addEventListener("mouseenter", eventListener)
    // .repeat(-1)
    return () => {
      buildBetterAnimation.kill()
      st.removeEventListener("mouseenter", eventListener)
      stAnimation.kill()
    }
  }, [])

  return (
    <div className="index-section index__first-section">
      <div
        className="build-better-container"
        style={{ position: "relative", display: "flex", flexFlow: "column wrap" }}
      >
        <div className={`heading-black heading ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>
          <span className="typewriter-char build-better">B</span>
          <span className="typewriter-char build-better">u</span>
          <span className="typewriter-char build-better">i</span>
          <span className="typewriter-char build-better">l</span>
          <span className="typewriter-char build-better">d</span>
          <span className="typewriter-char build-better">i</span>
          <span className="typewriter-char build-better">n</span>
          <span className="typewriter-char build-better">g</span>
        </div>
        <div className="heading-gradient heading">
          <span className="typewriter-char build-better">P</span>
          <span className="typewriter-char build-better">r</span>
          <span className="typewriter-char build-better">o</span>
          <span className="typewriter-char build-better">d</span>
          <span className="typewriter-char build-better">u</span>
          <span className="typewriter-char build-better">c</span>
          <span className="typewriter-char build-better">t</span>
          <span className="typewriter-char build-better">s</span>
        </div>
        <div className={`build-better__underline ${darkMode ? "dark-mode__color2" : "light-mode__color2"}`}>
          Building what you ideate
        </div>
      </div>
      <div className="st-right">
        <svg
          id="st"
          width="443"
          height={isMobile ? "450" : "622"}
          viewBox="0 0 443 622"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleDarkMode}
        >
          <path
            d="M170.018 19.797C134.182 14.9311 111.974 30.8405 108.839 53.9276L108.763 54.4907C100.047 118.684 282.025 126.189 266.963 237.119C258.754 297.576 209.782 322.641 151.909 323.408L149.933 318.864C169.941 316.141 186.076 306.608 188.93 285.592C197.264 224.215 13.1283 206.094 28.1906 95.1636C37.595 25.9025 108.242 9.11496 170.324 17.5446C192.532 20.5601 216.423 30.1123 233.599 39.8998L264.128 30.8549L255.642 131.209L253.623 130.935C249.782 57.0075 208.882 25.0741 170.018 19.797Z"
            fill="url(#paint0_linear_206_6)"
          />
          <path
            className="st__t"
            d="M371.152 540.2C422.276 510.633 429.614 476.816 403.411 431.509L400.953 432.931C410.352 449.182 424.206 479.943 402.086 492.737C381.931 504.393 367.589 486.4 348.222 452.913L241.131 267.746L291.763 238.463L290.339 236.001L239.707 265.284L183.029 167.283L180.571 168.705C192.845 194.465 204.348 232.501 202.39 258.607C190.573 285.814 162.038 310.203 124.187 332.094L78.7786 357.038L80.2027 359.5L150.19 320.341L260.128 510.433C288.895 560.172 326.91 565.788 371.152 540.2Z"
            fill={darkMode ? '#f3f3f3' : '#000'}
          />
          <path
            d="M19.2057 185.274C19.6826 283.977 82.8208 314.916 119.162 319.851C129.842 321.301 140.729 321.651 150.672 320.329L152.514 324.843C141.515 324.967 130.197 324.216 118.779 322.666C98.59 319.925 73.4603 311.925 42.6101 296.84L6.37672 306.257L17.1868 185L19.2057 185.274Z"
            fill="url(#paint1_linear_206_6)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_206_6"
              x1="163.172"
              y1="12.5"
              x2="138.656"
              y2="278.643"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5EDEAA" />
              <stop offset="0.546875" stopColor="#4DE0AB" />
              <stop offset="1" stopColor="#B1DF5D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_206_6"
              x1="123.672"
              y1="6.96065e-06"
              x2="89.9224"
              y2="327.541"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5EDEAA" />
              <stop offset="0.546875" stopColor="#4DE0AB" />
              <stop offset="1" stopColor="#B1DF5D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
