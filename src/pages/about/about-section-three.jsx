import React from "react"
import PeopleCard from "../../components/people-card/peopleCard"
import "./about.scss"

const AboutSectionThree = () => {
  return (
    <div className="about__third-section">
      <div>
        <div className="about__third-section__heading">People</div>
        <div className="peopleCard-Container">
          <PeopleCard img="//unsplash.it/349/463" name="Abhijay Kishore" position="Partner" />
          <PeopleCard img="//unsplash.it/349/463" name="Abhijay Kishore" position="Partner" />
          <PeopleCard img="//unsplash.it/349/463" name="Abhijay Kishore" position="Partner" />
        </div>
      </div>
    </div>
  )
}

export default AboutSectionThree
