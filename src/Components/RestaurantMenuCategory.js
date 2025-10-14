import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuCategory = (props) => {
  const { showIndex, setShowIndex, index } = props;

  const [isDescriptionFisible, setDescriptionVisible] = useState(false);

  return (
    <div className="w-6/12 mx-auto">
      <div className="my-4 p-2 font-bold bg-gray-50 shadow-lg flex justify-between">
        <span className="font-bold text-lg">
          {props?.title?.card?.card?.title} (
          {props?.title?.card?.card?.itemCards.length})
        </span>
        <span
          className="cursor-pointer"
          onClick={() => {
            setShowIndex(showIndex ? null : index);
          }}
        >
          {showIndex ? "Hide " : "Show"} description
        </span>
      </div>
      <div className={"hey py-3 " + (showIndex ? "block" : "hidden")}>
        <ItemList itemCards={props?.title?.card?.card?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
