import React from "react";
// import FriendList from "./FriendList";
// import logo from "logo.svg";
import steamApiKey from '../keys/keys'

export default class Friend extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }


  componentDidMount(){
    const userEndpoint = `/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=` + this.props.friend
    fetch(userEndpoint, {
      crossDomain: true, 
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(json => {
      this.setState({data: json.response.players[0]})
      console.log(this.state.data);
    })
  }
  
  render() {
    const friend = this.state.data
    return (
      <div className="friend-profile">
        <img id="profile_picture" src={`${friend.avatarmedium}`}></img>
        <p>{friend.personaname}</p>
      </div>
    );
  }
}
