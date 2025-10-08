import RestaurantCard from "./RestaurantCard";
import data from '../utils/mockData'
import { useState } from "react";

const Body = () => {

  let [restaurantList , setRestaurantList] = useState(data.cards[0].card.card.gridElements.infoWithStyle.restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = restaurantList.filter(ele => ele.info.avgRating > 4.1)
          console.log(restaurantList)
          setRestaurantList(filteredList)
        }}> 
          Top Rated Restaurant 
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map(ele => {
          return <RestaurantCard 
          key={ele.info.id} 
          resName={ele.info.name} 
          cuisine={ele.info.cuisines.join(", ")}
          cloudinaryImageId={ele.info.cloudinaryImageId}
          avgRatingString={ele.info.avgRatingString}
          deliveryTime={ele.info.sla.deliveryTime}
          />
        })}
      </div>
    </div>
  )
}

export default Body