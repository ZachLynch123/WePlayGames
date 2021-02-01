import React from 'react';
import Friend from './Friend';
import friendListData from './data'
import steamApiKey from '../keys/keys.js'

const friendsListEndpoint = `/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=76561198036778665&relationship=friend`;

export default class FriendList extends React.Component {

    
    render() {
        return (
        <div>
          {this.props.friends.map(data => {
          return <Friend friend={data.steamid.toString()} />
          })}
        </div>
        ) 

    }
}
