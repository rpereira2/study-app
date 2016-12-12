import React from 'react'
import FlipCard from 'react-flipcard'
import { Panel } from 'react-bootstrap'



const FlashcardDisplayView = ({ card }) => {
    return (
        <Panel>
          <FlipCard
            disabled={true}
            flipped={this.state.isFlipped}
            onFlip={this.handleOnFlip}
            onKeyDown={this.handleKeyDown}
          >
          <div>
            <div>Front</div>
              <button type="button" onClick={this.showBack}>Show back</button>
              <div><small>(manual flip)</small></div>
            </div>
          <div>
            <div>Back</div>
              <button type="button" ref="backButton" onClick={this.showFront}>Show front</button>
              </div>
          </FlipCard>
          </div>
          </Panel>
      );
}

export default FlashcardDisplayView
