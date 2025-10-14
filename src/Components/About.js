import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <UserClass name="rahul chaudhari class component" location="surat" />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent did mount called");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About us page</h1>
        <h2>
          <UserContext.Consumer>
            {(data) => {
              console.log(data);
              return <h2>{data.loggedInUser}</h2>;
            }}
          </UserContext.Consumer>
        </h2>
        <UserClass name="rahul chaudhari " location="surat" />
      </div>
    );
  }
}

export default About;
