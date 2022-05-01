import React from 'react'
import { Navbar } from '../../components'
import './project-name.scss'
import MoreProjects from '../../components/more-projects/more-projects';
import GradientImg from '../../components/gradient-img/gradient-img';

export const ProjectName = () => {
  return (
    <div>
      <Navbar />
      <ProjectNameSectionOne />
      <ProjectNameSectionTwo />
      <ProjectNameSectionThree />
      <MoreProjects img1='//unsplash.it/577/801' img2='//unsplash.it/577/1040' img3='//unsplash.it/577/580' img4='//unsplash.it/577/379' />
    </div>
  )
}

export const ProjectNameSectionOne = () => {
  return (
    <div className="project-section-one">
      <div className="project-section-one__heading about__first-section__heading light-mode__color1">Lorem ipsum dolor sit amet</div>
      <div className="project-section-one__img"><GradientImg imgUrl='//unsplash.it/1210/735' /></div>
      <div className="project-section-one__para light-mode__color1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui hendrerit leo dictumst feugiat quis arcu integer morbi.
      </div>
    </div>
  )
}

export const ProjectNameSectionTwo = () => {
  return (
    <div className="project-section-two">
      <div className="project-section-two__heading light-mode__color1">THE PRODUCT</div>
      <div>
        <div className="project__second-section__heading light-mode__color1">Lorem ipsum dolor sit amet</div>
        <div className="project__second-section__dash" />
        <div className="project__second-section__para light-mode__color1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui hendrerit leo dictumst feugiat quis arcu integer morbi.</div>
      </div>
      <div className="project-section-two__container">
        <div className="project-section-two__card1">
          <div className="project-section-two__card-img"><GradientImg imgUrl='//unsplash.it/582/822' /></div>
          <div className="project__second-section__para project-section-two__card-data light-mode__color1">Lorem ipsum dolor sit amet, consectetur</div>
        </div>
        <div className="project-section-two__card2">
          <div className="project-section-two__card-img"><GradientImg imgUrl='//unsplash.it/582/822' /></div>
          <div className="project__second-section__para project-section-two__card-data light-mode__color1">Lorem ipsum dolor sit amet, consectetur</div>
        </div>
      </div>
    </div>
  )
}

export const ProjectNameSectionThree = () => {
  return (
    <div className="project-section-three">
      <div className='project-section-three__cont'>
        <div className="project-section-three__card1"><GradientImg imgUrl='//unsplash.it/582/822' /></div>
        <div className="project-section-three__card-cont">
          <div className="project-section-three__card2"><GradientImg imgUrl='//unsplash.it/340/419' /></div>
          <div className="project-section-three__card2"><GradientImg imgUrl='//unsplash.it/340/419' /></div>
          <div className="project-section-three__card4"><GradientImg imgUrl='//unsplash.it/703/380' /></div>
        </div>
      </div>
    </div>
  )
}
