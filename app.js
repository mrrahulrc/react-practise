import React from "react";
import ReactDOM from "react-dom/client";
 
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "react working "
);

console.log(heading);
// this is jsx element
const jsxHeading = <h1>react working via jsx</h1>

// this is functional component
const Header = () => <div>this is Header</div>

const Footer = () => <div>this is footer</div>

const Page = () => {
  return (
    <>
      <Header />
      <div>
        Page content goes here
      </div>
      <Footer />
    </>
  )
}

const div = React.createElement("div", {}, "this is div");

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<Page/>)

// if you want to add 2 childs, pass array in react createElement
// pass as many childs as you want
// React.createElement("element type", {}, []);