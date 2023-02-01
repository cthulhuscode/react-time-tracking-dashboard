import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../../constants'
import { changeFreq } from '../../../store/slices/timeSlice';
import "./NavCard.scss";

export const NavCard = () => {
  const freq = useSelector(state => state.time.freq);
  const dispatch = useDispatch();  

  const handleFreqClick = (e) => {
    const choseFreq = e.target.id;
    
    dispatch(changeFreq(choseFreq));
  }

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
        <li          
          className={`navcard-options__option 
            ${ freq === "daily" && 'navcard-options__option--active'}`
          } 
          id="daily"
          onClick={handleFreqClick}
        >
          Daily
        </li>


        <li 
          className={`navcard-options__option 
            ${ freq === "weekly" && 'navcard-options__option--active'}`
          } 
          id="weekly"
          onClick={handleFreqClick}
        >
          Weekly
        </li>


        <li 
          className={`navcard-options__option 
            ${ freq === "monthly" && 'navcard-options__option--active'}`
          } 
          id="monthly"
          onClick={handleFreqClick}
        >
          Monthly
        </li>
      </ul>
    </div>
  )
}
