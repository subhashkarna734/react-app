import {CDN_URL} from '../utils/constants';
const RestaurentCard = (props) => {
    const {data} = props;
  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img src={
           CDN_URL +
            data.info.cloudinaryImageId
          } />
      </div>

      <div className="card-content">
        <h3>{data.info.Info}</h3>

        <div className="rating-time">
          <span className="rating">{data.info.avgRating}</span>
          <span>{data.info.deliveryTime}</span>
        </div>

        <p className="cuisine">{data.info.cuisines}</p>
        <p className="location">{data.info.locality}</p>
      </div>
    </div>
  );
};

export default RestaurentCard;