import React, { useContext } from "react"
import ReviewCard from "../../components/review-card/review-card"

import "./clients.scss"

const ClientsSectionTwo = () => {

  return (
    <div className="clients__section-two">
      <div className="clients__section-two__column1">
        <ReviewCard
          name="Jane Doe"
          designation="Co-Founder"
          img="//unsplash.it/100/100"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, in pretium semper egestas."
        />
        <ReviewCard
          name="Jane Doe"
          designation="Co-Founder"
          img="//unsplash.it/100/100"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod quis cursus massa ac duis ultrices purus in. Purus, lacinia quam pellentesque nisi sed tortor, dolor sit id. Nisl fringilla aliquet lectus pellentesque tortor, aliquet curabitur sed."
        />
      </div>
      <div className="clients__section-two__column2">
        <ReviewCard
          name="Jane Doe"
          designation="Co-Founder"
          img="//unsplash.it/100/100"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ReviewCard
          name="Jane Doe"
          designation="Co-Founder"
          img="//unsplash.it/100/100"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sit faucibus nunc mattis pulvinar amet amet curabitur. Fermentum, ipsum maecenas nisi ut."
        />
      </div>
      <div className="clients__section-two__column3">
        <ReviewCard
          name="Jane Doe"
          designation="Co-Founder"
          img="//unsplash.it/100/100"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod quis cursus massa ac duis ultrices purus in. Purus, lacinia quam pellentesque nisi sed tortor, dolor sit id. Nisl fringilla aliquet lectus pellentesque tortor, aliquet curabitur sed."
        />
        <ReviewCard
          name="Jane Doe"
          designation="Co-Founder"
          img="//unsplash.it/100/100"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  )
}

export default ClientsSectionTwo
