import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const FlashcardSetView = ({ results }) => {
  console.log(results)
 return (
   <ListGroup>
      <h4> Choose a Set of Flashcards: </h4>
      {results.map((set, index) => {
        return  <ListGroupItem key ={index}>
                {set.title}
              </ListGroupItem>
      })}
</ListGroup>
 )
}

export default FlashcardSetView

