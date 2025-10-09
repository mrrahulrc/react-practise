import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerLoader from "./ShimmerDiv";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");

  const [restaurantList, filteredRestaurantList] = useRestaurantList();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>looks like you are offline, check your internet connection</h1>;
  }

  return restaurantList.length === 0 ? (
    <ShimmerLoader />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              console.log(searchValue);
              console.log(restaurantList[0].info.name);
              const filteredList = restaurantList.filter((ele) =>
                ele.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );

              setFilteredRestaurantList(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (ele) => ele.info.avgRating > 4.1
            );
            console.log(restaurantList);
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((ele) => {
          return (
            <Link key={ele.info.id} to={`/restaurants/${ele.info.id}`}>
              <RestaurantCard
                key={ele.info.id}
                resName={ele.info.name}
                cuisine={ele.info.cuisines.join(", ")}
                cloudinaryImageId={ele.info.cloudinaryImageId}
                avgRatingString={ele.info.avgRatingString}
                deliveryTime={ele.info.sla.deliveryTime}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
