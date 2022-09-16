import React from 'react'

import './review-card.scss'

const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <img src={props.img} alt={props.name} className="review-card__profile-pic" />
      <div className="review-card__name light-mode__color1">{props.name}</div>
      <div className="review-card__designation light-mode__color2">{props.designation}</div>
      <svg
        width="39"
        height="32"
        viewBox="0 0 39 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.596 0C7.24355 2.56733 0 12.2865 0 21.4556C0 27.6905 4.12608 32 9.16906 32C14.3037 32 18.3381 27.6905 18.3381 21.4556C11.7364 18.3381 8.52722 13.8453 8.52722 9.6275C8.52722 5.86819 11.2779 2.38395 16.596 0.733522V0ZM36.6762 0C27.3238 2.56733 20.0802 12.2865 20.0802 21.4556C20.0802 27.6905 24.2063 32 29.2493 32C34.384 32 38.4183 27.6905 38.4183 21.4556C31.8166 18.3381 28.6075 13.8453 28.6075 9.6275C28.6075 5.86819 31.3582 2.38395 36.6762 0.733522V0Z"
          fill="#676767"
        />
      </svg>
      <div className="review-card__review light-mode__color2">{props.review}</div>
    </div>
  )
}

export default ReviewCard
