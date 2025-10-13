import ShimmerLoader from "./ShimmerDiv";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();

  if (resInfo === null) return <ShimmerLoader />;

  return (
    <div className="menu">
      <h1> Name of the restaurant {name}</h1>
      <h2>Menu Items</h2>
      <ul className="menu-item-container text-center">
        {resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
          .filter(
            (ele) =>
              ele.card.card["@type"] ==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          .map((ele, ind) => {
            return <RestaurantMenuCategory key={ind} title={ele} />;
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
