import React, { useEffect } from 'react'
import { Navbar } from '../../components'

const CommingSoon = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar />
      <div className="coming-soon__container">
        <div className="coming-soon__data">
          <div className="coming-soon__name light-mode__color1">{props.name}</div>
          <div className="coming-soon__desc light-mode__color1">{props.desc}</div>
        </div>
        <div className="coming-soon__text">COMING SOON</div>
      </div>
    </div>
  )
}

export default CommingSoon
