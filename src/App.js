require("dotenv").config();
const spotifyWebApi = require('spotify-web-api-node');
const express = require('express');

//storing spotify credentials 
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

//spotify credentials
const SpotifyApi = new spotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: "http://localhost:52330/index.html"
})

const app = express();

app.get('/login', (req, res) => {
  res.redirect(SpotifyApi.createAuthorizeURL(scopes));
});





function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
