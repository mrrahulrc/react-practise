import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerLoader from "./ShimmerDiv";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    let json = await data.json();
    console.log(json);

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
            <RestaurantCard
              key={ele.info.id}
              resName={ele.info.name}
              cuisine={ele.info.cuisines.join(", ")}
              cloudinaryImageId={ele.info.cloudinaryImageId}
              avgRatingString={ele.info.avgRatingString}
              deliveryTime={ele.info.sla.deliveryTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
