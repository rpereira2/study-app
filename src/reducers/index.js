import { combineReducers } from 'redux'
import searchResults from './searchResults'
import cards from './cards'

const reducers = combineReducers({
  searchResults,
  cards
})

export default reducers