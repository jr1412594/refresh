import React, { Component } from 'react'

import TvShowContainer from './components/TvShowContainer.js'


const baseUrl = ' https://api.tvmaze.com/shows'

export default class App extends Component {


  state = {
    tvShows: [],
    count: 0
  }
  
  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(result => this.setState({tvShows: result}))
  }

  handleClick = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render(){

      return (
      <div className='App'>
        <h1>hello</h1>
        <div>
            <button onClick={this.handleClick}>Press Me</button>
            <h1>{this.state.count}</h1>
        </div>
        <TvShowContainer tvShows={this.state.tvShows}/>
      </div>
    )
  }
}


