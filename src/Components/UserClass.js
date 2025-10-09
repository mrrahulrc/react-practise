import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>{count}</h1>
        <button
          // if the state dependency is huge object
          //  you only need to pass updated dependency
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increment
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @mrrahulrc</h2>
      </div>
    );
  }
}

export default UserClass;
