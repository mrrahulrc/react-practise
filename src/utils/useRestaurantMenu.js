import { useEffect, useState } from "react";
import { RESTAURANT_MENU_DETAILS } from "./constants";
import { useParams } from "react-router";
import { restaurantMenu } from "./mockData";

const useRestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    // let menu = await fetch(
    //   // `${RESTAURANT_MENU_DETAILS}${resId}&catalog_qa=undefined&query=Burger&submitAction=ENTER`
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=618037&catalog_qa=undefined&query=Burger&submitAction=ENTER"
    // );
    // let menuJson = await menu.json();

    // setResInfo(menuJson?.data);
    setResInfo(restaurantMenu);
  };

  return resInfo;
};

export default useRestaurantMenu;
