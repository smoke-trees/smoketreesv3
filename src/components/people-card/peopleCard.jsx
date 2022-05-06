import React, {useContext} from 'react'
import {DarkModeContext} from '../../context/darkModeContext';
import './peopleCard.scss'

const PeopleCard = ( props ) => {
      const {darkMode} = useContext(DarkModeContext)

  return (
    <div className='peopleCard'>
      <img src={ props.img } className='peopleCard__img' alt="" />
      <div>
        <div className={`peopleCard__name ${!darkMode ? 'light-mode__color1' : 'dark-mode__color1'}`}>{props.name}</div>
        <div className={`peopleCard__position ${!darkMode ? 'light-mode__color2' : 'dark-mode__color2'}`}>{props.position}</div>
      </div>
    </div>
  )
}

export default PeopleCard
