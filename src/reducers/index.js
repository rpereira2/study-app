import { combineReducers } from 'redux'
import searchResults from './searchResults'
import cards from './cards'
import sets from './sets'

const reducers = combineReducers({
  searchResults,
  cards,
  sets
})

export default reducers