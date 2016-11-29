import FlashcardSetView from '../components/FlashcardSetView'
import { connect } from 'react-redux'
import getSets from '../actions'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    term: state.sets.subject
  }
}

/*const mapDispatchToProps = (dispatch) => {
  return {
  
  }*/

export default connect(mapStateToProps)(FlashcardSetView)