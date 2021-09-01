import React, { Component } from 'react'

import TvShowContainer from './components/TvShowContainer.js'


const baseUrl = ' https://api.tvmaze.com/shows'

export default class App extends Component {


  state = {
    tvShows: [],
    count: 0,
    search: ""
  }
  
  componentDidMount() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(result => this.setState({tvShows: result}))
  }

  handleClick = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  // searchFilter = () => {
  //   console.log('in my search', this.state.tvShows)
  //   return this.state.tvShows.filter(tvShow => {
  //     tvShow.title === "Under The Dome"
  //   })
  // }

  render(){

      return (
      <div className='App'>
        <h1>hello</h1>
        <lable>Search: </lable>
        <input type='text'/>
        <div>
            <button onClick={this.handleClick}>Press Me</button>
            <h1>{this.state.count}</h1>
        </div>
        <TvShowContainer tvShows={this.state.tvShows}/>
        {/* <TvShowContainer tvShows={this.searchFilter()}/> */}
      </div>
    )
  }
}


