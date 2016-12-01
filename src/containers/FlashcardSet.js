import FlashcardSetView from '../components/FlashcardSetView'
import { connect } from 'react-redux'
import getSets from '../actions'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    results: state.sets.results.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSets: (title) => {
      return dispatch(getSets(title))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetView)

