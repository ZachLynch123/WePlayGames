import React from 'react';
import UserBox from "./UserBox";
import FriendsContainer from "./FriendsContainer";
import SearchBarContainer from "./SearchBarContainer"
// import steamApiKey from './keys/keys.js'

class App extends React.Component {
   
    render() {
        return (
          <div>
            <UserBox /> 
            <FriendsContainer />
            <SearchBarContainer />
          </div>
        );
      }
}


export default App;
