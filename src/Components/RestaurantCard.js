import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, resName, cuisine, avgRatingString, deliveryTime } =
    props;

  return (
    <div className="res-card p-4 m-4 w-[200px] bg-gray-200 rounded-lg">
      <img
        className="res-img rounded-lg"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3 className="font-bold py-2 text-xl">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{deliveryTime} min delievery</h4>
    </div>
  );
};

const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export { withPromotedLabel };

export default RestaurantCard;
