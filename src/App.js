import logo from './logo.svg';
import './App.css';
import steamApiKey from './keys/keys.js'

const friendsListEndpoint = `/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=76561198036778665&relationship=friend`;

const gameListEndpoint = `/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=76561198036778665&include_appinfo=1&format=json`;

const incompleteUserEndpoint = `/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=76561197963729309`


function App() {
  // gets users's friends list based on the steamID entered in friendsListEndpoint url
  function getFriendList(){
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
  // gets list of user's games 
  function getGameInfo() {
    fetch(gameListEndpoint, {
      crossDomain: true, 
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson);
    })
  }

  // get's user
  function getPlayerSummaries(userid){
    console.log(userid);
    const userEndpoint = incompleteUserEndpoint
    fetch(userEndpoint, {
      crossDomain: true, 
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(json => {
      console.log(json.response.players[0].personaname);
    })
  }

  getPlayerSummaries(76561197963729309);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
