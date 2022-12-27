import React from "react"
import PeopleCard from "../../components/people-card/peopleCard"
import "./about.scss"
import Abhijay from "../../assets/images/Abhijay.png"
import Anshuman from "../../assets/images/Anshuman.png"
import Pranjal from "../../assets/images/Pranjal.png"

const AboutSectionThree = () => {
  return (
    <div className="about__third-section">
      <div>
        <div className="about__third-section__heading">People</div>
        <div className="peopleCard-Container">
          <PeopleCard img={Abhijay} name="Abhijay Kishore" position="Partner" />
          <PeopleCard img={Anshuman} name="Anshuman Chhapolia" position="Partner" />
          <PeopleCard img={Pranjal} name="Pranjal Srivastava" position="Partner" />
        </div>
      </div>
    </div>
  )
}

export default AboutSectionThree
