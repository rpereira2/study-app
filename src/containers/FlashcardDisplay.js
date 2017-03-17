import React, {Component} from 'react'
import FlashcardDisplayView from '../components/FlashcardDisplayView'
import { connect } from 'react-redux'
import { showCard, getResultsFromApi} from '../actions'


class FlashcardDisplay extends Component {
  componentWillMount(){
      this.props.getCards();
    }
  render() {
    return(
      <div>
        <FlashcardDisplayView {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  
    isFlipped: state.cards.isFlipped,
    results: state.cards.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCard: () => {
      return dispatch(showCard())
    },
    getCards: () => {
      return dispatch(getResultsFromApi())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(FlashcardDisplay)
