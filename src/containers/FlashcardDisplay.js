import FlashcardDisplayView from '../components/FlashcardDisplayView'
import { connect } from 'react-redux'
import showCard from '../actions'

const mapStateToProps = (state) => {
  return {
    card: state.cards.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCard: (card) => {
      return dispatch(showCard(card))
    }
  }
}


/*const onCardClick = () => {
        switch (this.state.selected == {term}) {
            this.setState({
                selected: {term}
            });
        }
        case {
             (this.state.selected == {definition}) {
                this.setState({
                    selected: {definition}
                });
            }
        }
    },*/
    
    
    
    
export default connect(mapStateToProps)(FlashcardDisplayView)


