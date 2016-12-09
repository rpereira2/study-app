import FlashcardSetView from '../components/FlashcardSetView'
import { connect } from 'react-redux'
import getSets from '../actions'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    results: state.sets.results
    
  }
}




export default connect(mapStateToProps)(FlashcardSetView)

