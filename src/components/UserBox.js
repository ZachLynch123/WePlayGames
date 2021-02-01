import React from "react";
import pikachu from "./funny-pikachu.png";
import steamApiKey from '../keys/keys'

export default class UserBox extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }


  componentDidMount(){
    const userEndpoint = `/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=76561198036778665`
    fetch(userEndpoint, {
      crossDomain: true, 
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(json => {
      this.setState({data: json.response.players[0]})
    })
  }

  userInfo() {
    const user = this.state.data
    console.log(user.avatarmedium);
    if (user !== undefined) {
      return (
        <div className="profile-box">
          <img src={ `${user.avatarmedium}` } alt="no pic?" />
          <h3>{user.personaname}</h3>
        </div>
      );
    }
    else {
      return<h1>not returning anything</h1>
    }
     
  }
  

  render() {
    return (this.userInfo())
  }
}