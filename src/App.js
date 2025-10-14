import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("default from state");

  useEffect(() => {
    // make api call for authentication
    setTimeout(() => {
      const name = "Rahul chaudhari";
      setUserName(name);
    }, 2000);
  }, []);

  return (
    <Provider store={appStore}>
      {/* if we use context outside it will have the default user from the staticUserContext */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* render the partial section from the router config */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>this place will be filled</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute} />
);
