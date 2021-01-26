import React from "react";
// import FriendList from "./FriendList";
// import logo from "logo.svg";

class Friend extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     profilePic: ``,
  //     username: "TestUserName"
  //   }
  // }

  render() {
    return (
      <div className="friend-profile">
        <img src={ this.props.profilePic } alt="" />
        <h3> { this.props.username }</h3>
      </div>
    );
  }
}

export default Friend;