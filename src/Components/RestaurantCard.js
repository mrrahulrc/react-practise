import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, resName, cuisine, avgRatingString, deliveryTime } =
    props;

  return (
    <div className="res-card">
      <img className="res-img" src={`${CDN_URL}${cloudinaryImageId}`}></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{deliveryTime} min delievery</h4>
    </div>
  );
};

export default RestaurantCard;
