import FlashcardDisplayView from '../components/FlashcardDisplayView'
import { connect } from 'react-redux'
import { showCard } from '../actions'



const mapStateToProps = (state) => {
  return {
    isFlipped: state.cards.isFlipped
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCard: () => {
      return dispatch(showCard())
    }
  }
}






export default connect(mapStateToProps)(FlashcardDisplayView)
