import React, { Component } from 'react'
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifsList from './gifs_list.jsx'
import giphy from 'giphy-api'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Tg6VJM99mE2XVfB5jE"
    }
  }

  search = (query) => {
    giphy('EPba0a4a7zJ6mDpzKNlkTgF4nxwLEaAK').search({
        q: query,
        rating: 'g'
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search}/>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <div className="gif-list">
          <GifsList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    </div>
  }
}

export default App
