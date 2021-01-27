import React from 'react';
import Friend from './Friend';
import friendListData from './data'
import steamApiKey from '../keys/keys.js'

const friendsListEndpoint = `/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=76561198036778665&relationship=friend`;

export default class FriendList extends React.Component {

    

    getFriendList(){
        fetch(friendsListEndpoint, {
          crossDomain: true, 
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(resJson => {
          console.log(resJson);
        })
      }

      
    
    
    generateSearchedFriend = () => {
        console.log(friendListData)
    
        return friendListData.map((friend) => 
        
        <Friend 
            username={friend.username}
            profilePic={friend.profilePic}
        />

        )
    };
    
    render() {
        return (
        <div>
            {this.getFriendList()}
            {this.generateSearchedFriend()}
        </div>
        ) 

    }
}
