import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const FlashcardSetView = ({ results }) => {
  return (
    <ListGroup>
       {results.map((sets, title, id) => {

        <ListGroupItem key={id}>
         {sets.title} Choose One: {title}
        </ListGroupItem>
      })
       }
    </ListGroup>
  )
}

export default FlashcardSetView

