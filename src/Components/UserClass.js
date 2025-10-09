import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @mrrahulrc</h2>
      </div>
    );
  }
}

export default UserClass;
