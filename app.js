const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "react working"
);

console.log(heading);

const div = React.createElement("div", {}, "this is div");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// if you want to add 2 childs, pass array in react createElement
// pass as many childs as you want
// React.createElement("element type", {}, []);