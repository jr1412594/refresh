import React, { Component } from 'react'

import TvShowContainer from './components/TvShowContainer.js'


const baseUrl = ' https://api.tvmaze.com/shows'

export default class App extends Component {


  state = {
    tvShows: [],
  }
  
  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(result => this.setState({tvShows: result}))
  }

  render(){

      return (
      <div className='App'>
        <h1>hello</h1>
        <TvShowContainer tvShows={this.state.tvShows}/>
      </div>
    )
  }
}


