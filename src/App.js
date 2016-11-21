import React, { Component } from 'react'
import './App.css'
import SearchBar from './containers/SearchBar'
import Loader from './containers/Loader'
import FlashcardSet from './containers/FlashcardSet'
import FlashcardDisplay from './containers/FlashcardDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Loader />
        <FlashcardSet />
        <FlashcardDisplay />
      </div>
    );
  }
}

export default App