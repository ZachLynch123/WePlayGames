import React from "react";
import FriendList from "./FriendList";
import steamApiKey from '../keys/keys'

class FriendsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }


  componentDidMount() {
    fetch(`/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=76561198036778665&relationship=friend`, {
      crossDomain: true, 
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(resJson => {
      this.setState({data: resJson.friendslist.friends});
    })
  }

  render() {
    return (
      <div className="friends-container">
        <FriendList friends={this.state.data}/>
        
      </div>
    );
  }
}
export default FriendsContainer;