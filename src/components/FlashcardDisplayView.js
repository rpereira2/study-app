import React from 'react'
import FlipCard from 'react-flipcard'
import { Panel } from 'react-bootstrap'




const FlashcardDisplayView = ({ isFlipped, showCard }) => {
    return (
      <div>
        <Panel>
          <FlipCard
            disabled={true}
            isFlipped={isFlipped}

          >
            <div>

            <div>Front</div>
              <button type="button" onClick={showCard}>Show back</button>
              <div><small>(manual flip)</small></div>

            </div>
            <div>
            <div>Back</div>
              <button type="button" onClick={showCard}>Show front</button>
            </div>
          </FlipCard>

          </Panel>
        </div>
      );
}



export default FlashcardDisplayView
