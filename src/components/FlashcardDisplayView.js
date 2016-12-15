import React from 'react'
import FlipCard from 'react-flipcard'
import { Panel } from 'react-bootstrap'

const FlashcardDisplayView = ( {getCards, isFlipped, results, showCard} ) => {
  console.log('results prop equals', results)
    return (
      <div>
      {results.map((result, index) => (
        <Panel key={index}>
            <FlipCard
              disabled={true}
              flipped={isFlipped}
            >
              <div>

              <div>{result.term}</div>
                <button type="button" onClick={showCard}>Show Definition</button>
                <div><small>(manual flip)</small></div>

              </div>
              <div>
              <div>{result.definition}</div>
                <button type="button" onClick={showCard}>Show Term</button>
              </div>
            </FlipCard>
          </Panel>
        ))}
        </div>
      );
}

export default FlashcardDisplayView
