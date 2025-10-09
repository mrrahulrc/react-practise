import { useEffect, useState } from "react";
import { RESTAURANT_MENU_DETAILS } from "./constants";
import { useParams } from "react-router";

const useRestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    let menu = await fetch(`${RESTAURANT_MENU_DETAILS}${resId}`);
    let menuJson = await menu.json();

    setResInfo(menuJson?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
