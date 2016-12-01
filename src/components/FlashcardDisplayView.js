import React from 'react'
import { Panel } from 'react-bootstrap'


const FlashcardDisplayView = ({ card }) => {
    return (
        <Panel>
            <Card text={this.state[this.state.selected]}
                     onClick={this.onCardClick} />
        </Panel>
    )
}


export default FlashcardDisplayView

