import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
