import React from 'react'
import FlipCard from 'react-flipcard'
// import { Panel } from 'react-bootstrap'

const FlashcardDisplayView = ( {getCards, isFlipped, results, showCard} ) => {
  console.log('results prop equals', results)
    return (
      <div>
      {results.map((result, index) => (
        <div className="box" key={index}>
            <FlipCard
              disabled={false}
              flipped={isFlipped}
            >
              <div>

              <div>{result.term}</div>
                { /*<button type="button" onClick={showCard}>Show Definition</button>*/ }


              </div>
              <div>
              <div>{result.definition}</div>
                { /*<button type="button" onClick={showCard}>Show Term</button>*/ }
              </div>
            </FlipCard>
          </div>
        ))}
        </div>
      );
}

export default FlashcardDisplayView
