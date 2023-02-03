import { images } from "../../../constants";
import "./Card.scss";

export const Card = ({
  hour: { category, hours, lastWeek, color, icon}
}) => {  

  return (
    <div className='card' style={{backgroundColor: color}}>
      <img className="card-img" src={images[icon]} alt="work" />
      <div className='card-info'>
        <div className='card-info__item card-info__item-1'>
          <h3 className='card-info__category'>{category || 'Work'}</h3>
          <img className='card-info__menu' src={images.ellipsis} alt='menu' />
        </div>
        <div className='card-info__item card-info__item-2'>
          <p className='card-info__hours'>{hours}hrs</p>
          <p className='card-info__last'>Last week - {lastWeek}hrs</p>
        </div>
      </div>
    </div>
  )
}
