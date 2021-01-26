import React from 'react';
import Friend from './Friend';
import friendListData from './data'

export default class FriendList extends React.Component {
    
    
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
            {this.generateSearchedFriend()}
        </div>
        ) 

    }
}
