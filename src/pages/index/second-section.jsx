import React from 'react'
import { useEffect } from 'react'
import { ExclamationMark } from '../../assets/images'
import { Bulb } from '../../components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function SecondSection() {
  useEffect(() => {

    const SecondSectionTimeline = gsap.timeline({
    }).fromTo(".best.typewriter-chars", {
      autoAlpha: 0,
      display: '',
    }, {
      opacity: 1,
      autoAlpha: 1,
      display: 'block',
      delay: 1,
      duration: 0.02,
      stagger: 0.15
    }).fromTo(".second-section__text-body", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.inout'
    })
    const exclamationMarkAnimation = gsap.from(".second-section__mark", {
      scale: 0,
      rotation: 360 * 100
    })
    const bulbRevealAnimation = gsap.fromTo('.second-section__bulb', {
      opacity: 0,
      top: 200,
      position: 'relative',
    }, {
      opacity: 1,
      duration: 2,
      autoAlpha: 1,
      top: 0,
      position: 'relative',
    })
    const bulbAnimationInitial = gsap.fromTo('.second-section__bulb .bulb__main-stroke', {
      strokeDashoffset: 2000,
      strokeDasharray: 2000,
    }, {
      strokeDashoffset: 0,
      duration: 1,
      strokeDasharray: 2000,
    })
    const bulbAnimationInitial2 = gsap.fromTo('.second-section__bulb .bulb__main-stroke', {
      strokeDashoffset: 0,
      strokeDasharray: 2000,
    }, {
      strokeDashoffset: -2000,
      duration: 1,
      strokeDasharray: 2000,
    })
    // const mainStroke = gsap.set('.second-section__bulb .bulb__main-stroke', { strokeDashoffset: 2000 })
    SecondSectionTimeline.add(exclamationMarkAnimation, 0)
    SecondSectionTimeline.add(bulbRevealAnimation, 0)
    SecondSectionTimeline.add(bulbAnimationInitial, 0)
    SecondSectionTimeline.add(bulbAnimationInitial2, 1)


    const scrollTrigger = ScrollTrigger.create({
      showMarker: false,
      id: 'second-section-animation',
      trigger: '.index__second-section',
      start: 'top center',
      animation: SecondSectionTimeline
    })

    const bulbAnimation = gsap.timeline({

    })
      .fromTo(".second-section__bulb .bulb__main-stroke", {
        strokeDashoffset: 2000,
        strokeDasharray: 2000,
      }, {
        strokeDashoffset: 0,
        strokeDasharray: 2000,
        direction: 'forward',
        delay: 0.5,
        scrollTrigger: {
          markers: false,
          id: 'bulb-grow-animation',
          trigger: '.second-section__bulb',
          endTrigger: '.second-section__bulb',
          scrub: 2,
          start: 'top center',
          end: 'center center'
        }
      }).fromTo(".second-section__bulb .bulb__main-stroke", {
        strokeDashoffset: 0,
        strokeDasharray: 2000,
      }, {
        strokeDashoffset: -2000,
        strokeDasharray: 2000,
        delay: 0.5,
        scrollTrigger: {
          markers: false,
          id: 'bulb-vanish-animation',
          trigger: '.second-section__bulb',
          endTrigger: '.second-section__bulb',
          scrub: 2,
          start: 'center center',
          end: 'bottom center'
        }
      })
    return () => {
      scrollTrigger.kill()
      bulbAnimation.kill()
    }
  })
  return (
    <>
      <div className="index-section index__second-section second-section">
        <div className="second-section__mark">
          <img src={ExclamationMark} alt="Exclamation mark" />
        </div>
        <div className="second-section__text">
          <div className='second-section__text-title'>
            <div className='second-section__text-title__first-line'>
              <svg width="99" height="33" viewBox="0 0 99 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='best typewriter-chars' d="M16.6761 14.972C21.0761 14.84 29.3481 14.136 29.3481 8.32797C29.3481 1.24397 19.7121 1.19998 12.0561 1.19998H0.352051V1.41998H4.26805V31.78H0.352051V32H16.2801C26.0041 32 31.3721 28.7 31.3721 23.2C31.3721 16.204 21.3401 15.06 16.6761 15.016V14.972ZM14.4761 1.41998C19.1841 1.41998 20.2841 3.88398 20.2841 8.06398C20.2841 12.728 18.9201 14.928 14.6081 14.928H13.3321V1.41998H14.4761ZM16.2801 31.78C13.4641 31.78 13.3321 30.724 13.3321 26.544V15.148H14.6081C20.4601 15.148 21.3401 18.228 21.3401 23.2C21.3401 28.964 19.8881 31.78 16.2801 31.78Z" fill="url(#paint0_linear_220_4)" />
                <path className='best typewriter-chars' d="M56.6456 23.684C55.1056 26.544 52.0696 27.38 49.7816 27.38C45.4696 27.38 42.1256 24.212 41.8616 17.964H56.5576C57.6136 12.376 53.9616 8.50397 46.3056 8.50397C38.6056 8.50397 33.5896 13.652 33.5896 20.868C33.5896 28.084 38.8696 32.396 44.8976 32.396C51.0136 32.396 54.8856 28.48 56.8216 23.816L56.6456 23.684ZM46.3056 8.72398C49.7376 8.72398 49.1216 14.928 48.7256 17.656H41.8616C41.8616 17.524 41.8616 17.348 41.8616 17.216C41.8616 14.268 42.5216 8.72398 46.3056 8.72398Z" fill="url(#paint1_linear_220_4)" />
                <path className='best typewriter-chars' d="M65.9564 11.98C65.9564 10.176 67.6724 8.72398 70.7964 8.72398C74.1844 8.72398 78.0564 10.748 79.2444 16.38H79.4204L78.9804 8.59198L76.4724 9.60398C74.8884 9.03198 72.7324 8.54798 70.7964 8.54798C65.3844 8.54798 59.5324 10.572 59.5324 15.984C59.5324 24.652 75.5044 24.124 75.5044 28.92C75.5044 31.384 72.6444 32.176 69.8284 32.176C66.6604 32.176 60.8964 30.46 59.7084 22.892H59.5324L60.0164 32.308L63.0084 31.208C65.8244 32.044 68.0684 32.396 69.8284 32.396C76.0764 32.396 81.6204 30.02 81.6204 24.388C81.6204 15.72 65.9564 17.04 65.9564 12.024V11.98Z" fill="url(#paint2_linear_220_4)" />
                <path className='best typewriter-chars' d="M92.2681 32.352C96.844 32.352 98.6481 30.372 98.6481 26.324H98.4281C98.4281 27.776 98.164 30.372 96.1841 30.372C94.3801 30.372 94.1161 28.612 94.1161 25.62V9.07598H98.6481V8.85598H94.1161V0.0999756H93.8961C93.7201 2.29998 93.0161 5.29198 91.8721 6.96398C90.0241 8.32798 87.1641 8.85598 83.7761 8.85598H82.7641V9.07598H85.9761V26.06C85.9761 30.504 88.3081 32.352 92.2681 32.352Z" fill="url(#paint3_linear_220_4)" />
                <defs>
                  <linearGradient id="paint0_linear_220_4" x1="-0.654762" y1="1.75" x2="27.1076" y2="1.81859" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5EDEAA" />
                    <stop offset="0.546875" stopColor="#4DE0AB" />
                    <stop offset="1" stopColor="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_220_4" x1="-0.654762" y1="1.75" x2="27.1076" y2="1.81859" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5EDEAA" />
                    <stop offset="0.546875" stopColor="#4DE0AB" />
                    <stop offset="1" stopColor="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_220_4" x1="-0.654762" y1="1.75" x2="27.1076" y2="1.81859" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5EDEAA" />
                    <stop offset="0.546875" stopColor="#4DE0AB" />
                    <stop offset="1" stopColor="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_220_4" x1="-0.654762" y1="1.75" x2="27.1076" y2="1.81859" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5EDEAA" />
                    <stop offset="0.546875" stopColor="#4DE0AB" />
                    <stop offset="1" stopColor="#B1DF5D" />
                  </linearGradient>
                </defs>
              </svg>
              <svg width="236" height="36" viewBox="0 0 236 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='best typewriter-chars' d="M6.424 14.74C6.424 12.936 8.14 11.484 11.264 11.484C14.652 11.484 18.524 13.508 19.712 19.14H19.888L19.448 11.352L16.94 12.364C15.356 11.792 13.2 11.308 11.264 11.308C5.852 11.308 0 13.332 0 18.744C0 27.412 15.972 26.884 15.972 31.68C15.972 34.144 13.112 34.936 10.296 34.936C7.128 34.936 1.364 33.22 0.176 25.652H0L0.484 35.068L3.476 33.968C6.292 34.804 8.536 35.156 10.296 35.156C16.544 35.156 22.088 32.78 22.088 27.148C22.088 18.48 6.424 19.8 6.424 14.784V14.74Z" fill="#373737" />
                <path className='best typewriter-chars' d="M37.3505 11.264C30.1345 11.264 24.5025 16.148 24.5025 23.188C24.5025 30.228 30.1345 35.112 37.3505 35.112C44.5665 35.112 50.1985 30.228 50.1985 23.188C50.1985 16.148 44.5665 11.264 37.3505 11.264ZM37.3505 34.892C33.9185 34.892 33.4785 29.92 33.4785 23.188C33.4785 16.896 33.9185 11.484 37.3505 11.484C40.7825 11.484 41.2225 16.896 41.2225 23.188C41.2225 29.92 40.7825 34.892 37.3505 34.892Z" fill="#373737" />
                <path className='best typewriter-chars' d="M62.1235 0L50.4635 0.704V0.923999L53.9835 0.747998V34.54H50.5515V34.76H65.5555V34.54H62.1235V0Z" fill="#373737" />
                <path className='best typewriter-chars' d="M92.2054 11.352L80.5014 12.056V12.276L84.0214 12.1V27.852C83.4934 32.12 81.8654 33.748 80.0614 33.748C77.3774 33.748 77.3774 30.58 77.3774 28.908V11.352L65.7174 12.056V12.276L69.2374 12.1V27.984C69.2374 31.328 70.4694 35.112 76.4534 35.112C81.1614 35.112 83.4054 33.088 84.0654 28.82L84.0214 34.804H95.1534V34.584H92.1614L92.2054 11.352Z" fill="#373737" />
                <path className='best typewriter-chars' d="M104.536 35.112C109.112 35.112 110.916 33.132 110.916 29.084H110.696C110.696 30.536 110.432 33.132 108.452 33.132C106.648 33.132 106.384 31.372 106.384 28.38V11.836H110.916V11.616H106.384V2.86H106.164C105.988 5.06 105.284 8.052 104.14 9.724C102.292 11.088 99.4324 11.616 96.0444 11.616H95.0324V11.836H98.2444V28.82C98.2444 33.264 100.576 35.112 104.536 35.112Z" fill="#373737" />
                <path className='best typewriter-chars' d="M117.93 9.812C120.658 9.812 122.858 7.612 122.858 4.884C122.858 2.156 120.658 0 117.93 0C115.246 0 113.046 2.2 113.046 4.884C113.046 7.612 115.246 9.812 117.93 9.812ZM122.022 16.236L122.11 11.352L110.362 12.056V12.276L113.838 12.1V34.54H110.406V34.76H125.454V34.54H122.022V16.236Z" fill="#373737" />
                <path className='best typewriter-chars' d="M140.003 11.264C132.787 11.264 127.155 16.148 127.155 23.188C127.155 30.228 132.787 35.112 140.003 35.112C147.219 35.112 152.851 30.228 152.851 23.188C152.851 16.148 147.219 11.264 140.003 11.264ZM140.003 34.892C136.571 34.892 136.131 29.92 136.131 23.188C136.131 16.896 136.571 11.484 140.003 11.484C143.435 11.484 143.875 16.896 143.875 23.188C143.875 29.92 143.435 34.892 140.003 34.892Z" fill="#373737" />
                <path className='best typewriter-chars' d="M180.463 18.392C180.463 13.552 177.735 11.308 173.907 11.308C170.387 11.308 166.603 12.848 165.591 18.48V18.436L165.723 11.352L153.975 12.056V12.276L157.495 12.1V34.54H154.063V34.76H168.187V34.54H165.635V19.184C166.383 14.872 168.363 12.892 170.211 12.892C172.279 12.892 172.279 14.96 172.279 16.192V34.584H169.771V34.804H183.895V34.584H180.463V18.392Z" fill="#373737" />
                <path className='best typewriter-chars' d="M202.935 35.112C207.511 35.112 209.315 33.132 209.315 29.084H209.095C209.095 30.536 208.831 33.132 206.851 33.132C205.047 33.132 204.783 31.372 204.783 28.38V11.836H209.315V11.616H204.783V2.86H204.563C204.387 5.06 203.683 8.052 202.539 9.724C200.691 11.088 197.831 11.616 194.443 11.616H193.431V11.836H196.643V28.82C196.643 33.264 198.975 35.112 202.935 35.112Z" fill="#373737" />
                <path className='best typewriter-chars' d="M222.89 11.264C215.674 11.264 210.042 16.148 210.042 23.188C210.042 30.228 215.674 35.112 222.89 35.112C230.106 35.112 235.738 30.228 235.738 23.188C235.738 16.148 230.106 11.264 222.89 11.264ZM222.89 34.892C219.458 34.892 219.018 29.92 219.018 23.188C219.018 16.896 219.458 11.484 222.89 11.484C226.322 11.484 226.762 16.896 226.762 23.188C226.762 29.92 226.322 34.892 222.89 34.892Z" fill="#373737" />
              </svg>
            </div>
            <div className='second-section__text-title__second-line'>
              <svg width="323" height="46" viewBox="0 0 323 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='best typewriter-chars' d="M21.648 11.836H26.532L19.404 26.268L12.364 11.836H16.06V11.616H0V11.836H3.124L14.916 35.376C12.188 41.404 9.68 43.956 7.744 43.956C6.908 43.956 6.16 43.56 6.16 42.372C6.16 41.052 7.436 40.128 8.712 39.688C8.58 36.916 6.996 35.64 4.796 35.64C2.288 35.64 0.264 37.752 0.264 40.172C0.264 42.284 1.584 45.012 5.368 45.012C10.736 45.012 13.112 39.6 15.092 35.64L26.84 11.836H30.14V11.616H21.648V11.836Z" fill="#373737" />
                <path className='best typewriter-chars' d="M40.4157 11.264C33.1997 11.264 27.5677 16.148 27.5677 23.188C27.5677 30.228 33.1997 35.112 40.4157 35.112C47.6317 35.112 53.2637 30.228 53.2637 23.188C53.2637 16.148 47.6317 11.264 40.4157 11.264ZM40.4157 34.892C36.9837 34.892 36.5437 29.92 36.5437 23.188C36.5437 16.896 36.9837 11.484 40.4157 11.484C43.8477 11.484 44.2877 16.896 44.2877 23.188C44.2877 29.92 43.8477 34.892 40.4157 34.892Z" fill="#373737" />
                <path className='best typewriter-chars' d="M80.2316 11.352L68.5276 12.056V12.276L72.0476 12.1V27.852C71.5196 32.12 69.8916 33.748 68.0876 33.748C65.4036 33.748 65.4036 30.58 65.4036 28.908V11.352L53.7436 12.056V12.276L57.2636 12.1V27.984C57.2636 31.328 58.4956 35.112 64.4796 35.112C69.1876 35.112 71.4316 33.088 72.0916 28.82L72.0476 34.804H83.1796V34.584H80.1876L80.2316 11.352Z" fill="#373737" />
                <path className='best typewriter-chars' d="M101.715 11.264C98.6346 11.264 95.2026 13.332 94.2346 18.48V18.436L94.3666 11.352L82.6186 12.056V12.276L86.1386 12.1V34.54H82.7066V34.76H98.1506V34.54H94.2786V19.184C95.0266 14.872 97.1826 12.76 98.9426 12.76C100.131 12.76 100.791 13.684 100.791 15.136C100.791 16.676 99.9106 17.776 98.5906 18.216C98.7226 20.724 100.527 21.912 102.507 21.912C105.367 21.912 107.391 19.668 107.391 16.72C107.391 13.464 104.971 11.308 101.715 11.308V11.264Z" fill="#373737" />
                <path className='best typewriter-chars' d="M136.616 11.264C133.228 11.264 129.796 13.156 128.696 18.26L128.828 11.352L117.08 12.056V12.276L120.6 12.1V44.44H117.168V44.66H133.052V44.44H128.74V30.316C129.268 33.44 130.72 35.112 134.284 35.112C139.872 35.112 144.8 30.492 144.8 22.176C144.8 15.268 141.368 11.264 136.616 11.264ZM131.952 34.144C129.928 34.144 128.74 31.592 128.74 28.248V19.052C129.444 15.18 131.336 12.936 133.096 12.936C135.384 12.936 135.824 15.576 135.824 21.736C135.824 29.04 135.164 34.188 131.952 34.188V34.144Z" fill="#373737" />
                <path className='best typewriter-chars' d="M165.093 11.264C162.013 11.264 158.581 13.332 157.613 18.48V18.436L157.745 11.352L145.997 12.056V12.276L149.517 12.1V34.54H146.085V34.76H161.529V34.54H157.657V19.184C158.405 14.872 160.561 12.76 162.321 12.76C163.509 12.76 164.169 13.684 164.169 15.136C164.169 16.676 163.29 17.776 161.969 18.216C162.102 20.724 163.906 21.912 165.885 21.912C168.745 21.912 170.77 19.668 170.77 16.72C170.77 13.464 168.349 11.308 165.093 11.308V11.264Z" fill="#373737" />
                <path className='best typewriter-chars' d="M185.006 11.264C177.79 11.264 172.158 16.148 172.158 23.188C172.158 30.228 177.79 35.112 185.006 35.112C192.222 35.112 197.854 30.228 197.854 23.188C197.854 16.148 192.222 11.264 185.006 11.264ZM185.006 34.892C181.574 34.892 181.134 29.92 181.134 23.188C181.134 16.896 181.574 11.484 185.006 11.484C188.438 11.484 188.878 16.896 188.878 23.188C188.878 29.92 188.438 34.892 185.006 34.892Z" fill="#373737" />
                <path className='best typewriter-chars' d="M217.133 11.264C213.701 11.264 210.269 13.156 209.169 18.26L209.301 0L197.553 0.704V0.923999L201.073 0.747998V35.068L205.605 32.12C208.333 34.54 210.929 35.112 212.733 35.112C220.169 35.112 225.273 29.568 225.273 21.824C225.273 15.224 221.841 11.264 217.133 11.264ZM212.733 34.892C209.257 34.892 209.213 30.712 209.213 27.72V19.052C209.917 15.18 211.809 12.892 213.569 12.892C215.901 12.892 216.297 16.148 216.297 22.924C216.297 31.768 215.593 34.892 212.733 34.892Z" fill="#373737" />
                <path className='best typewriter-chars' d="M237.279 0L225.619 0.704V0.923999L229.139 0.747998V34.54H225.707V34.76H240.711V34.54H237.279V0Z" fill="#373737" />
                <path className='best typewriter-chars' d="M264.565 26.444C263.025 29.304 259.989 30.14 257.701 30.14C253.389 30.14 250.045 26.972 249.781 20.724H264.477C265.533 15.136 261.881 11.264 254.225 11.264C246.525 11.264 241.509 16.412 241.509 23.628C241.509 30.844 246.789 35.156 252.817 35.156C258.933 35.156 262.805 31.24 264.741 26.576L264.565 26.444ZM254.225 11.484C257.657 11.484 257.041 17.688 256.645 20.416H249.781C249.781 20.284 249.781 20.108 249.781 19.976C249.781 17.028 250.441 11.484 254.225 11.484Z" fill="#373737" />
                <path className='best typewriter-chars' d="M306.193 18.392C306.193 13.552 303.685 11.308 299.681 11.308C296.381 11.308 292.729 12.804 291.673 18.26C291.629 13.508 289.121 11.308 285.161 11.308C281.861 11.308 278.165 12.848 277.153 18.48V18.436L277.285 11.352L265.537 12.056V12.276L269.057 12.1V34.54H265.625V34.76H279.617V34.54H277.197V19.184C277.945 14.872 279.793 12.848 281.685 12.848C283.621 12.848 283.533 14.872 283.533 16.192V34.54H281.157V34.76H294.093V34.54H291.717V19.184C292.465 14.872 294.313 12.892 296.161 12.892C298.141 12.892 298.053 14.872 298.053 16.192V34.584H295.633V34.804H309.625V34.584H306.193V18.392Z" fill="#373737" />
                <path className='best typewriter-chars' d="M317.273 24.112C317.361 16.94 322.597 14.74 322.597 9.9C322.597 7.216 320.793 4.884 317.185 2.42C313.577 4.884 311.773 7.216 311.773 9.9C311.773 14.74 317.009 16.94 317.097 24.112H317.273ZM317.185 35.112C319.693 35.112 321.805 33.176 321.805 30.712C321.805 28.292 319.737 26.312 317.185 26.312C314.633 26.312 312.565 28.292 312.565 30.712C312.565 33.132 314.633 35.112 317.185 35.112Z" fill="#373737" />
              </svg>
            </div>
          </div>
          <div className='second-section__text-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus amet, commodo condimentum integer. Something about consultation!
          </div>
        </div>
        <div className='second-section__bulb'>
          <Bulb className='best typewriter-chars' />
        </div>
      </div>
    </>
  )
}