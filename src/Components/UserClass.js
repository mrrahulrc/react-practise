import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "surat",
      },
    };

    // console.log("constructor ", this.props);
  }

  async componentDidMount() {
    // console.log("component did mount", this.props);
    const data = await fetch("https://api.github.com/users/mrrahulrc");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log("gets called after the new state is rendered");
  }

  componentWillUnmount() {
    console.log("when the component is unmounted");
  }

  render() {
    // console.log("render", this.props);
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @mrrahulrc</h2>
      </div>
    );
  }
}

export default UserClass;
