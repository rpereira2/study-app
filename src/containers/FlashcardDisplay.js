import FlashcardDisplayView from '../components/FlashcardDisplayView'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    card: state.cards.card
  }
}

export default connect(mapStateToProps)(FlashcardDisplayView)


/* Where does this go? ES5 to ES6


const onCardClick = () => {
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
    },
    
    render: function() {
        return <Card text={this.state[this.state.selected]}
                     onClick={this.onCardClick} />;
    }
});*/