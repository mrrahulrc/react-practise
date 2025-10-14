import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  const dispatch = useDispatch();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header flex justify-between items-center bg-red-100">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "online" : "offline"}</li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="px-4 font-bold">Cart - ({cart.length} items)</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
