import React from 'react'
import { Grid, Row, Col, } from 'react-bootstrap'

const FlashcardSetView = ({ title }) => {
  console.log(title)
  return (
    <Grid>
      // {title.map((title, id) =>
        <Row key={id}>
          <Col md={12}>
            <ul>
                <li>{title}</li>
            </ul>
          </Col>
        </Row>
      )}
    </Grid>
  )
}

export default FlashcardSetView