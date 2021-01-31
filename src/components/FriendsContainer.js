import React from "react";
import FriendList from "./FriendList";

class FriendsContainer extends React.Component {
  render() {
    let listOfAllFriends = this.props.listOfFriends.data[0]
    return (
      <div className="friends-container">
        <FriendList friends={listOfAllFriends.data}/>
        
      </div>
    );
  }
}
export default FriendsContainer;