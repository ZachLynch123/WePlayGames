import React from "react";
import pikachu from "./funny-pikachu.png";

export default class UserBox extends React.Component {
  constructor() {
    super();
    this.state = {
      profilePic: `${pikachu}`,
      username: "COVID-Pikachu"
    }
  }

  render() {
    return (
      <div className="profile-box">
        <img src={ this.state.profilePic } alt="Pikachu staying safe" />
        <h3>{ this.state.username }</h3>
      </div>
    );
  }
}