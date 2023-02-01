import { images } from "../../../constants";
import "./Card.scss";

export const Card = ({
  category, hours, lastWeek, image
}) => {

  return (
    <div className='card'>
      <img className="card-img" src={image || images.work} alt="work" />
      <div className='card-info'>
        <div className='card-info__item card-info__item-1'>
          <h3 className='card-info__category'>{category || 'Work'}</h3>
          <img className='card-info__menu' src={images.ellipsis} alt='menu' />
        </div>
        <div className='card-info__item card-info__item-2'>
          <p className='card-info__hours'>{hours || '32hrs'}</p>
          <p className='card-info__last'>{lastWeek || 'Last week - 36hrs'}</p>
        </div>
      </div>
    </div>
  )
}
