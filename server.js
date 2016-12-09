const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Card = require('./models/flashcards')

mongoose.connect('mongodb://<angiecrellin>:<Tex78620>@ds127998.mlab.com:27998/flashcardsapp')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080

app.post('/create-card', (req, res) => {
    let card = new Card()
    card.term = req.body.term
    card.definition = req.body.definition
})


/*Why not route folder with api.js file and this kind of thing. 
Then in server.js app.use('/api/, apiRoutes') and runServer function?

router.post('/cards', function(request, response) {
    if (!request.body.name) {
        return response.status(400).json({
            message: 'no data sent'
        });
    }
    Card.create({
        term: request.body.term,
        definition: request.body.definition,
    }, function(err, recipes) {
        if (err) {
            return response.status(500).json({
                message: 'Internal Server Error'
            });
        }
        response.status(201).json(recipes);
    });
});*/

app.listen(port);