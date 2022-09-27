import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import { ExclamationMark } from '../../assets/images'
import { Bulb } from '../../components'

export function SecondSection({ isMobile }) {
  const headingDelay = 0
  const headingDuration = 0.01
  const headingStagger = 0.02
  useEffect(() => {
    const SecondSectionTimeline = gsap.timeline({
    }).fromTo(".best.typewriter-chars", {
      autoAlpha: 0,
      display: '',
    }, {
      opacity: 1,
      autoAlpha: 1,
      display: 'inline',
      delay: headingDelay,
      duration: headingDuration,
      stagger: headingStagger
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
      duration: 1,
      autoAlpha: 1,
      top: 0,
      position: 'relative',
    })
    const bulbAnimationInitial = gsap.fromTo('.second-section__bulb .bulb__main-stroke', {
      strokeDashoffset: 2000,
      strokeDasharray: 2000,
    }, {
      strokeDashoffset: 0,
      duration: 1.5,
      strokeDasharray: 2000,
    })
    const bulbAnimationInitial2 = gsap.fromTo('.second-section__bulb .bulb__main-stroke', {
      strokeDashoffset: 0,
      strokeDasharray: 2000,
    }, {
      strokeDashoffset: -2000,
      duration: 1.5,
      strokeDasharray: 2000,
    })
    // const mainStroke = gsap.set('.second-section__bulb .bulb__main-stroke', { strokeDashoffset: 2000 })
    SecondSectionTimeline.add(exclamationMarkAnimation, 0)
    SecondSectionTimeline.add(bulbRevealAnimation, 0)
    SecondSectionTimeline.add(bulbAnimationInitial, 0)
    SecondSectionTimeline.add(bulbAnimationInitial2, 1)


    const scrollTrigger = ScrollTrigger.create({
      markers: false,
      id: 'second-section-animation',
      trigger: '.index__second-section',
      start: 'top center',
      animation: SecondSectionTimeline,
      end: 'bottom center',
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
              <span className='heading-2 heading'>
                <span className='typewriter-chars best'>L</span>
                <span className='typewriter-chars best'>e</span>
                <span className='typewriter-chars best'>a</span>
                <span className='typewriter-chars best'>v</span>
                <span className='typewriter-chars best'>e</span>
                &nbsp;
                <span className='typewriter-chars best'>b</span>
                <span className='typewriter-chars best'>u</span>
                <span className='typewriter-chars best'>i</span>
                <span className='typewriter-chars best'>l</span>
                <span className='typewriter-chars best'>d</span>
                <span className='typewriter-chars best'>i</span>
                <span className='typewriter-chars best'>n</span>
                <span className='typewriter-chars best'>g</span>
              </span>
              <br />
              <span className='heading-2 heading-gradient heading'>
                <span className='typewriter-chars best'>E</span>
                <span className='typewriter-chars best'>x</span>
                <span className='typewriter-chars best'>c</span>
                <span className='typewriter-chars best'>e</span>
                <span className='typewriter-chars best'>p</span>
                <span className='typewriter-chars best'>t</span>
                <span className='typewriter-chars best'>i</span>
                <span className='typewriter-chars best'>o</span>
                <span className='typewriter-chars best'>n</span>
                <span className='typewriter-chars best'>a</span>
                <span className='typewriter-chars best'>l</span>
              </span>
              &nbsp;
              &nbsp;
              <span className='heading-2 heading'>
                <span className='typewriter-chars best'>p</span>
                <span className='typewriter-chars best'>r</span>
                <span className='typewriter-chars best'>o</span>
                <span className='typewriter-chars best'>d</span>
                <span className='typewriter-chars best'>u</span>
                <span className='typewriter-chars best'>c</span>
                <span className='typewriter-chars best'>t</span>
                <span className='typewriter-chars best'>s</span>
                <br />
                <span className='typewriter-chars best'>t</span>
                <span className='typewriter-chars best'>o</span>
                &nbsp;
                <span className='typewriter-chars best'>u</span>
                <span className='typewriter-chars best'>s</span>
              </span>
            </div>
          </div>
          <div className='second-section__text-body index-text-body'>
            With cutting-edge technologies and unprecedented quality of code, we make designing tech products look easy.
          </div>
        </div>
        <div className='second-section__bulb'>
          <Bulb isMobile={isMobile} className='best typewriter-chars' />
        </div>
      </div>
    </>
  )
}