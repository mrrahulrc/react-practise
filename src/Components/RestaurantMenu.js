import ShimmerLoader from "./ShimmerDiv";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();

  if (resInfo === null) return <ShimmerLoader />;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return (
    <div className="menu">
      <h1> Name of the restaurant {name}</h1>
      <h2>Menu Items</h2>
      <ul className="menu-item-container">
        {itemCards.map((ele) => {
          return (
            <li key={ele?.card?.info?.id} className="menu-item">
              <div className="menu-item-img">
                <img src={`${CDN_URL}${ele?.card?.info?.imageId}`}></img>
              </div>
              <div className="menu-item-description">
                <div className="menu-item-name">{ele?.card?.info?.name}</div>
                <div className="menu-item-price">{ele?.card?.info?.price}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
