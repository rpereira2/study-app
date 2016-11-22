import FlashcardSetView from '../components/FlashcardSetView'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  console.log(state)
  return {
    title: state.sets.title
  }
}

export default connect(mapStateToProps)(FlashcardSetView)