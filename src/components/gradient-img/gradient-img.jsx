import React from 'react'

const GradientImg = ({imgUrl}) => {
  return <div style={{background: `linear-gradient(180deg, rgba(55, 55, 55, 0) 41.71%, #1C1B20 100%), url(${imgUrl}), #C4C4C4`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}} />
}

export default GradientImg
