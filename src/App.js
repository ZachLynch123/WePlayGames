import logo from './logo.svg';
import './App.css';
import steamApiKey from './keys/keys.js'

const friendsListEndpoint = `/ISteamUser/GetFriendList/v0001/?key=${steamApiKey}&steamid=76561198036778665&relationship=friend`;

const gameListEndpoint = `/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=76561198036778665&include_appinfo=1&format=json`


function App() {
  
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
  getGameInfo()


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
