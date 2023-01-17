import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useCallback, useContext, useEffect } from 'react'
import { ServiceAutomation, ServiceCloud, ServiceDevelopment, ServiceUiUx } from '../../assets/images'
import { ServiceCard } from '../../components/service-card/ServiceCard'
import Target from '../../components/targets/target'
import { DarkModeContext } from '../../context/darkModeContext'

export default function FourthSection({ isMobile }) {
  const {darkMode} = useContext(DarkModeContext)

  const onMouseEnterCallBack = useCallback((e) => {
    gsap.to('#cursor', {
      borderColor: '#fff',
    })
  }, [])
  const onMouseLeaveCallBack = useCallback((e) => {
    gsap.to('#cursor', {
      borderColor: '#373737',
    })
  }, [])

  useEffect(() => {
    const timeline = gsap.timeline()
      .set('#services-wrench', {
        transformOrigin: '27px 14px',
        delay: 0,
        rotate: '0deg',
        duration: 0
      })
      .to('#services-wrench', {
        rotate: '-50deg',
        ease: 'power0.in',
        duration: 0.3
      }, 0)
      .to('#services-wrench', {
        rotate: '30deg',
        duration: 0.7,
        ease: 'power2.out',
      }, 0.4)
      .to('#services-wrench', {
        rotate: '-50deg',
        duration: .5,
        ease: 'power2.in',
      }, 1.2)
      .to('#services-wrench', {
        rotate: '0deg',
        duration: .5,
        ease: 'power2.out',
      }, 1.8)

    const scrollTrigger = ScrollTrigger.create({
      markers: false,
      id: 'fourth-section-animation',
      trigger: '.fourth-section',
      start: isMobile ? '10% 90%' : '45% 50%',
      animation: timeline,
      once: true
    })
    return () => {
      scrollTrigger.kill()
    }
  }, [isMobile])


  return (
    <>
      <div
        id={'#fourth-section'}
        className="fourth-section index-section index-section__fourth-section"
        onMouseEnter={onMouseEnterCallBack}
        onMouseLeave={onMouseLeaveCallBack}
        style={{ backgroundColor: `${!darkMode ? "black" : "transparent"}`}}
      >
        <div className='fourth-section__right'>
          {/* <div className="fourth-section__icon">
            <svg
              width={isMobile ? "70" : "320"}
              height={isMobile ? "70" : "235"}
              viewBox="0 0 282 300"
            >
              <path
                style={{ fill: "#b1df5d" }}
                d="m 280.77177,177.43924 -66.535,-38.414 c 1.69,-14.17 -5.327,-30.122 -19.59,-37.274 -14.605,-8.432613 -31.929,-6.534113 -44.292,3.637 l 30.833,17.802 -13.117,22.719 -32.456,-18.739 c -2.627,15.794 4.391,31.746 19.339,41.458 14.605,8.432 30.649,6.877 42.076,-1.672 l 66.534,38.413 c 3.246,1.874 7.085,0.845 7.679,-2.057 l 9.369,-16.228 c 2.811,-4.869 1.782,-8.708 0.16,-9.645 z"
                id="services-wrench"
              />
              <path
                style={{ fill: "#b1df5d" }}
                d="m 19.208962,66.455037 c -7.5445,-28.156795 9.32,-57.366895 37.4767,-64.911495 28.1567,-7.54457 57.367108,9.3199 64.911108,37.4766 7.545,28.156795 -9.32,57.366895 -37.476308,64.911108 -28.1567,7.545 -57.3669,-9.319513 -64.9115,-37.476213 z"
                id="path834" />
              <path
                style={{ fill: "#b1df5d" }}
                d="m 149.95077,196.03125 -140.783648,37.723 -6.8587,-25.597 c -7.54457,-28.156 32.35724,-63.539 88.67074,-78.629 6.3993,-1.714 11.518608,-3.086 18.260608,-3.521 -1.782,8.708 -1.004,16.73 1.397,25.689 5.487,20.478 20.869,36.932 39.314,44.335 z"
                id="path2-3" />
            </svg>
          </div> */}
          <div className="fourth-section__middle">
            <div className="fourth-section__middle__title">
              <span className='heading heading-2 heading-gradient'>
                Our Services
              </span>
            </div>
            <div className="fourth-section__middle__body index-text-body">
              We specialize in designing, planning, building and maintaining robust, secure, high-quality applications and services. Well documented code and well timed delivery is our priority. With us, you can build Website, Mobile Applications, UI/UX Designs, ML/AI models, Microservices, and everything that resembles anything to do with tech. We have it all.
            </div>
          </div>
        </div>

        <div className={'fourth-section__left'}>
          <Target>
            <ServiceCard image={ServiceUiUx} text={'UI/UX Design'} link='/services#design'/>
          </Target>
          <Target>
            <ServiceCard color={'pink'} image={ServiceDevelopment} text={'Development'} link='/services#development'/>
          </Target>
          <Target>
            <ServiceCard color={'yellow'} image={ServiceCloud} text={'Cloud Applications'} link='/services#cloud-application'/>
          </Target>
          <Target>
            <ServiceCard color={'blue'} image={ServiceAutomation} text={'Automation and AI'} link='/services#automation-ai'/>
          </Target>
        </div>
      </div>
    </>
  )
}