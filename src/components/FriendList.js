import React from 'react';
import Friend from './Friend';

export default class FriendList extends React.Component {
    
    render() {
        const friends = [
            {username: 'thanh',
            profilePic: ''
            },
            {username: 'Guillermo',
            profilePic: ''
            },
            {username: 'Zach',
            profilePic: ''
            },
            {username: 'Justin',
            profilePic: ''
            }
        ]
        return(
            <div className="friend">
                {props.friends.map( friends => 
                    <Friend 
                        username={friends.username}
                        profilePic={friends.profilePic}
                    />
                )}
            </div>
        )

    }
}
