import { combineReducers } from 'redux'
import cards from './cards'
import sets from './sets'

const reducers = combineReducers({
  cards,
  sets
})

export default reducers