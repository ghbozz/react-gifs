import React, { Component } from 'react'
import Gif from './gif.jsx'

class GifsList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/> )
  }
}

export default GifsList
