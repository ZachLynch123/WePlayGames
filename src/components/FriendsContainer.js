import React from "react";
import FriendList from "./FriendList";

class FriendsContainer extends React.Component {
  render() {
    let listOfAllFriends = this.props.listOfFriends.data 
    return (
      <div className="friends-container">
        <FriendList friends={listOfAllFriends}/>
        
      </div>
    );
  }
}
export default FriendsContainer;