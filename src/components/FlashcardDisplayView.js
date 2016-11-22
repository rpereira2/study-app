import React from 'react'
import { Grid, Row, Col, } from 'react-bootstrap'


const FlashcardDisplayView = ({ card }) => {
    return (
        <Grid>
            {card.map((id, term, definition) =>
                <Row key={id}>
                    <Col md={12}>
                        <div onClick={card.onClick}>
                        {card.text}
                        </div>
                    </Col>
                </Row>
            )}
        </Grid>
    )
}

export default FlashcardDisplayView

