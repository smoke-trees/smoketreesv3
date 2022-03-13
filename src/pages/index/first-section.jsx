import React, { useEffect } from 'react'
import gsap from 'gsap'
import Target from '../../components/targets/target'
import { ChevronDown } from '../../assets/images'

export function FirstSection() {
  useEffect(() => {
    const buildBetterAnimation = gsap.timeline({
    }).fromTo(".build-better.typewriter-char", {
      autoAlpha: 0,
      display: '',
    }, {
      opacity: 1,
      autoAlpha: 1,
      display: 'block',
      delay: 1,
      duration: 0.02,
      stagger: 0.15
    }).fromTo('.build-better__underline', {
      opacity: 0
    }, { opacity: 1, duration: 0.5, ease: 'power3.inout' })
      .from('.explore__text, .explore__arrow', {
        opacity: 0,
        y: -20,
      })

    const ease = 'power3.inout'
    const transformOrigin = '21.3% 39.79%'

    const stAnimation1 = gsap.timeline()
      .from('#st', {
        opacity: 0,
        y: 60,
        ease: 'bounce.out',
        delay: 1,
        duration: 1.2,
      })

    const stAnimation = gsap.timeline({
    })
      .from('.st__t', {
        ease,
        transformOrigin,
        rotation: 0,
        delay: 1.04,
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: 10
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: -2
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.6,
        rotation: 5
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: 2
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1
      })
      .to('.st__t', {
        ease,
        duration: 0.8,
        transformOrigin,
        rotation: 0
      })
    const stAnimationReanimate = gsap.timeline({
      paused: true
    }).pause()
      .from('.st__t', {
        ease,
        transformOrigin,
        rotation: 0,
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: 10
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.5,
        rotation: -2
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.6,
        rotation: 5
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: 2
      })
      .to('.st__t', {
        ease,
        transformOrigin,
        duration: 0.8,
        rotation: -1
      })
      .to('.st__t', {
        ease,
        duration: 0.8,
        transformOrigin,
        rotation: 0
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
    const st = document.getElementById('st')
    st.addEventListener('mouseenter', eventListener)
    // .repeat(-1)
    return () => {
      buildBetterAnimation.kill()
      st.removeEventListener('mouseenter', eventListener)
      stAnimation.kill()
    }
  }, [])
  return (
    <div className="index-section index__first-section">
      <div className="build-better-container" style={{ position: 'relative', display: 'flex', flexFlow: 'column wrap', gap: '10px' }} >
        <svg width="355" height="105" viewBox="0 0 355 105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="build-better typewriter-char" d="M48.601 52.793C61.701 52.4 86.329 50.304 86.329 33.012C86.329 11.921 57.64 11.79 34.846 11.79H0V12.445H11.659V102.835H0V103.49H47.422C76.373 103.49 92.355 93.665 92.355 77.29C92.355 56.461 62.487 53.055 48.601 52.924V52.793ZM42.051 12.445C56.068 12.445 59.343 19.781 59.343 32.226C59.343 46.112 55.282 52.662 42.444 52.662H38.645V12.445H42.051ZM47.422 102.835C39.038 102.835 38.645 99.691 38.645 87.246V53.317H42.444C59.867 53.317 62.487 62.487 62.487 77.29C62.487 94.451 58.164 102.835 47.422 102.835Z" fill="#373737" />
          <path className="build-better typewriter-char" d="M173.365 33.798L138.519 35.894V36.549L148.999 36.025V82.923C147.427 95.63 142.58 100.477 137.209 100.477C129.218 100.477 129.218 91.045 129.218 86.067V33.798L94.5032 35.894V36.549L104.983 36.025V83.316C104.983 93.272 108.651 104.538 126.467 104.538C140.484 104.538 147.165 98.512 149.13 85.805L148.999 103.621H182.142V102.966H173.234L173.365 33.798Z" fill="#373737" />
          <path className="build-better typewriter-char" d="M203.004 29.213C211.126 29.213 217.676 22.663 217.676 14.541C217.676 6.419 211.126 0 203.004 0C195.013 0 188.463 6.55 188.463 14.541C188.463 22.663 195.013 29.213 203.004 29.213ZM215.187 48.339L215.449 33.798L180.472 35.894V36.549L190.821 36.025V102.835H180.603V103.49H225.405V102.835H215.187V48.339Z" fill="#373737" />
          <path className="build-better typewriter-char" d="M260.73 0L226.015 2.096V2.751L236.495 2.227V102.835H226.277V103.49H270.948V102.835H260.73V0Z" fill="#373737" />
          <path className="build-better typewriter-char" d="M345.375 0L310.267 2.096V2.751L320.747 2.227L321.14 46.505C319.437 37.073 312.101 33.667 304.896 33.667C288.259 33.667 273.325 47.291 273.325 70.74C273.325 92.355 285.77 104.669 301.883 104.669C313.018 104.669 319.306 98.643 321.14 88.425H321.271L321.14 103.621H354.283V102.966H345.244L345.375 0ZM309.481 101.787C302.669 101.787 299.918 93.272 299.918 69.823C299.918 43.099 303.324 35.501 309.874 35.501C315.507 35.501 321.009 41.789 321.009 50.959V85.281C320.616 94.32 315.114 101.787 309.481 101.787Z" fill="#373737" />
        </svg>
        <svg width="438" height="97" viewBox="0 0 438 97" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="build-better typewriter-char" d="M48.601 44.278C61.701 43.885 86.329 41.789 86.329 24.497C86.329 3.406 57.64 3.275 34.846 3.275H0V3.93H11.659V94.32H0V94.975H47.422C76.373 94.975 92.355 85.15 92.355 68.775C92.355 47.946 62.487 44.54 48.601 44.409V44.278ZM42.051 3.93C56.068 3.93 59.343 11.266 59.343 23.711C59.343 37.597 55.282 44.147 42.444 44.147H38.645V3.93H42.051ZM47.422 94.32C39.038 94.32 38.645 91.176 38.645 78.731V44.802H42.444C59.867 44.802 62.487 53.972 62.487 68.775C62.487 85.936 58.164 94.32 47.422 94.32Z" fill="url(#paint0_linear_1_3)" />
          <path className="build-better typewriter-char" d="M167.601 70.216C163.016 78.731 153.977 81.22 147.165 81.22C134.327 81.22 124.371 71.788 123.585 53.186H167.339C170.483 36.549 159.61 25.021 136.816 25.021C113.891 25.021 98.9572 40.348 98.9572 61.832C98.9572 83.316 114.677 96.154 132.624 96.154C150.833 96.154 162.361 84.495 168.125 70.609L167.601 70.216ZM136.816 25.676C147.034 25.676 145.2 44.147 144.021 52.269H123.585C123.585 51.876 123.585 51.352 123.585 50.959C123.585 42.182 125.55 25.676 136.816 25.676Z" fill="url(#paint1_linear_1_3)" />
          <path className="build-better typewriter-char" d="M200.099 96.023C213.723 96.023 219.094 90.128 219.094 78.076H218.439C218.439 82.399 217.653 90.128 211.758 90.128C206.387 90.128 205.601 84.888 205.601 75.98V26.724H219.094V26.069H205.601V0H204.946C204.422 6.55 202.326 15.458 198.92 20.436C193.418 24.497 184.903 26.069 174.816 26.069H171.803V26.724H181.366V77.29C181.366 90.521 188.309 96.023 200.099 96.023Z" fill="url(#paint2_linear_1_3)" />
          <path className="build-better typewriter-char" d="M247.05 96.023C260.674 96.023 266.045 90.128 266.045 78.076H265.39C265.39 82.399 264.604 90.128 258.709 90.128C253.338 90.128 252.552 84.888 252.552 75.98V26.724H266.045V26.069H252.552V0H251.897C251.373 6.55 249.277 15.458 245.871 20.436C240.369 24.497 231.854 26.069 221.767 26.069H218.754V26.724H228.317V77.29C228.317 90.521 235.26 96.023 247.05 96.023Z" fill="url(#paint3_linear_1_3)" />
          <path className="build-better typewriter-char" d="M336.852 70.216C332.267 78.731 323.228 81.22 316.416 81.22C303.578 81.22 293.622 71.788 292.836 53.186H336.59C339.734 36.549 328.861 25.021 306.067 25.021C283.142 25.021 268.208 40.348 268.208 61.832C268.208 83.316 283.928 96.154 301.875 96.154C320.084 96.154 331.612 84.495 337.376 70.609L336.852 70.216ZM306.067 25.676C316.285 25.676 314.451 44.147 313.272 52.269H292.836C292.836 51.876 292.836 51.352 292.836 50.959C292.836 42.182 294.801 25.676 306.067 25.676Z" fill="url(#paint4_linear_1_3)" />
          <path className="build-better typewriter-char" d="M396.598 25.021C387.428 25.021 377.21 31.178 374.328 46.505V46.374L374.721 25.283L339.744 27.379V28.034L350.224 27.51V94.32H340.006V94.975H385.987V94.32H374.459V48.601C376.686 35.763 383.105 29.475 388.345 29.475C391.882 29.475 393.847 32.226 393.847 36.549C393.847 41.134 391.227 44.409 387.297 45.719C387.69 53.186 393.061 56.723 398.956 56.723C407.471 56.723 413.497 50.042 413.497 41.265C413.497 31.571 406.292 25.152 396.598 25.152V25.021Z" fill="url(#paint5_linear_1_3)" />
          <path className="build-better typewriter-char" d="M422.86 96.023C430.72 96.023 437.27 89.997 437.27 82.268C437.27 74.67 430.851 68.513 422.86 68.513C414.869 68.513 408.45 74.67 408.45 82.268C408.45 89.866 414.869 96.023 422.86 96.023Z" fill="url(#paint6_linear_1_3)" />
          <defs>
            <linearGradient id="paint0_linear_1_3" x1="-1.048" y1="55.975" x2="442.952" y2="55.975" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60DDA8" />
              <stop offset="0.5" stopColor="#3BE0B9" />
              <stop offset="1" stopColor="#B4DE5A" />
            </linearGradient>
            <linearGradient id="paint1_linear_1_3" x1="-1.048" y1="55.975" x2="442.952" y2="55.975" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60DDA8" />
              <stop offset="0.5" stopColor="#3BE0B9" />
              <stop offset="1" stopColor="#B4DE5A" />
            </linearGradient>
            <linearGradient id="paint2_linear_1_3" x1="-1.048" y1="55.975" x2="442.952" y2="55.975" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60DDA8" />
              <stop offset="0.5" stopColor="#3BE0B9" />
              <stop offset="1" stopColor="#B4DE5A" />
            </linearGradient>
            <linearGradient id="paint3_linear_1_3" x1="-1.048" y1="55.975" x2="442.952" y2="55.975" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60DDA8" />
              <stop offset="0.5" stopColor="#3BE0B9" />
              <stop offset="1" stopColor="#B4DE5A" />
            </linearGradient>
            <linearGradient id="paint4_linear_1_3" x1="-1.048" y1="55.975" x2="442.952" y2="55.975" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60DDA8" />
              <stop offset="0.5" stopColor="#3BE0B9" />
              <stop offset="1" stopColor="#B4DE5A" />
            </linearGradient>
            <linearGradient id="paint5_linear_1_3" x1="-1.048" y1="55.975" x2="442.952" y2="55.975" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60DDA8" />
              <stop offset="0.5" stopColor="#3BE0B9" />
              <stop offset="1" stopColor="#B4DE5A" />
            </linearGradient>
            <linearGradient id="paint6_linear_1_3" x1="-1.048" y1="55.975" x2="442.952" y2="55.975" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60DDA8" />
              <stop offset="0.5" stopColor="#3BE0B9" />
              <stop offset="1" stopColor="#B4DE5A" />
            </linearGradient>
          </defs>
          <div>
          </div>
        </svg>
        <div className="build-better__underline">
          Building what you ideate
        </div>
      </div>
      <div className="st-right" >
        <svg id='st' width="443" height="622" viewBox="0 0 443 622" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M170.018 19.797C134.182 14.9311 111.974 30.8405 108.839 53.9276L108.763 54.4907C100.047 118.684 282.025 126.189 266.963 237.119C258.754 297.576 209.782 322.641 151.909 323.408L149.933 318.864C169.941 316.141 186.076 306.608 188.93 285.592C197.264 224.215 13.1283 206.094 28.1906 95.1636C37.595 25.9025 108.242 9.11496 170.324 17.5446C192.532 20.5601 216.423 30.1123 233.599 39.8998L264.128 30.8549L255.642 131.209L253.623 130.935C249.782 57.0075 208.882 25.0741 170.018 19.797Z" fill="url(#paint0_linear_206_6)" />
          <path className="st__t" d="M371.152 540.2C422.276 510.633 429.614 476.816 403.411 431.509L400.953 432.931C410.352 449.182 424.206 479.943 402.086 492.737C381.931 504.393 367.589 486.4 348.222 452.913L241.131 267.746L291.763 238.463L290.339 236.001L239.707 265.284L183.029 167.283L180.571 168.705C192.845 194.465 204.348 232.501 202.39 258.607C190.573 285.814 162.038 310.203 124.187 332.094L78.7786 357.038L80.2027 359.5L150.19 320.341L260.128 510.433C288.895 560.172 326.91 565.788 371.152 540.2Z" fill="black" />
          <path d="M19.2057 185.274C19.6826 283.977 82.8208 314.916 119.162 319.851C129.842 321.301 140.729 321.651 150.672 320.329L152.514 324.843C141.515 324.967 130.197 324.216 118.779 322.666C98.59 319.925 73.4603 311.925 42.6101 296.84L6.37672 306.257L17.1868 185L19.2057 185.274Z" fill="url(#paint1_linear_206_6)" />
          <defs>
            <linearGradient id="paint0_linear_206_6" x1="163.172" y1="12.5" x2="138.656" y2="278.643" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5EDEAA" />
              <stop offset="0.546875" stopColor="#4DE0AB" />
              <stop offset="1" stopColor="#B1DF5D" />
            </linearGradient>
            <linearGradient id="paint1_linear_206_6" x1="123.672" y1="6.96065e-06" x2="89.9224" y2="327.541" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5EDEAA" />
              <stop offset="0.546875" stopColor="#4DE0AB" />
              <stop offset="1" stopColor="#B1DF5D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="explore">
        <Target>
          <div className="explore__text"> Explore</div>
          <div className="explore__arrow"><img src={ChevronDown} alt="more" /></div>
        </Target>
      </div>
    </div>
  )
}