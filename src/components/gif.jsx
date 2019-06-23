import React, { Component } from 'react'

class Gif extends Component {
  constructor (props) {
    super(props)
  }

  handleClick = () => {
    this.props.selectGif(this.props.id);
  }

  render () {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.webp`
    return <img src={src} alt="" className="gif" onClick={this.handleClick}/>
  }
}

export default Gif
