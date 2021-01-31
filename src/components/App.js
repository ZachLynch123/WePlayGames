import React from 'react';
import UserBox from "./UserBox";
import FriendsContainer from "./FriendsContainer";
import SearchBarContainer from "./SearchBarContainer"
import steamApiKey from '../keys/keys'
// import steamApiKey from './keys/keys.js'

class App extends React.Component {
  
  constructor() {
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
          <div>
            <UserBox /> 
            <FriendsContainer listOfFriends={this.state} />
            <SearchBarContainer />
          </div>
        );
      }
}


export default App;
