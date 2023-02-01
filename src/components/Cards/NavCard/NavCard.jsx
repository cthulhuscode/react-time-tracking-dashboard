import React from 'react'
import { images } from '../../../constants'

export const NavCard = () => {
  return (
    <div className='navcard'>
      <div className='navcard-header'>
        <img className='navcard-header__img' src={images.jeremy} alt="Jeremy" />
        <div className='navcard-header__info'>
          <p className='navcard-header__report'>Report for</p>
          <h2 className='navcard-header__name'>Jeremy Robson</h2>
        </div>
      </div>

      <ul className='navcard-options'>
        <li className='navcard-options__option navcard-options__option--active'>Daily</li>
        <li className='navcard-options__option'>Weekly</li>
        <li className='navcard-options__option'>Monthly</li>
      </ul>
    </div>
  )
}
