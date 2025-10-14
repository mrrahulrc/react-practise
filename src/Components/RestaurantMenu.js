import ShimmerLoader from "./ShimmerDiv";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <ShimmerLoader />;

  return (
    <div className="menu">
      <ul className="menu-item-container text-center">
        {resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
          .filter(
            (ele) =>
              ele.card.card["@type"] ==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          .map((ele, ind) => {
            return (
              <RestaurantMenuCategory
                showIndex={showIndex == ind}
                setShowIndex={setShowIndex}
                key={ind}
                title={ele}
                index={ind}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
