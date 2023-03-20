import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import '../SearchBar/SearchBar.css'
import SearchResults from '../SearchResults/SearchResults.js';
import '../SearchResults/SearchResults.css'
import Playlist from '../Playlist/Playlist.js';
import '../Playlist/Playlist.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ],
      
      playlistName: 'feelgood',

      playlistTracks: [
        {name: 'name5', artist: 'artist5', album: 'album5', id: 5},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(existingTracks => existingTracks.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks})
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let index = tracks.indexOf(track);
    tracks.splice(index, 1);
    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }
  
  render() {  
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  } 
}

export default App;