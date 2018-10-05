var express = require('express');
var bodyParser = require('body-parser');

const { ObjectID } = require('mongodb');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;
//const port = 3000;

// Tirdparty middleware
app.use(bodyParser.json());

// Post request (routes)
app.post('/todos', (req, res) => {
    // console.log(req.body); // where the body get store by body parser.
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err); // Http status 400 is bad request
    });
});

// Get request
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(err);
    });
});

// GET /todos/id

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //res.send(req.params);
    // Validate ID using isValid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todos) => {
        if (!todos) {
            return res.status(404).send();
        }
        // Success
        res.send({ todos });
    }).catch((e) => {
        res.status(404).send();
    });

});

// DElete query
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }
    Todo.findByIdAndDelete(id).then((todo) => {
        if (!todo) {
            return res.status(400).send();
        }
        res.send({ todo });
    }).catch((er) => {
        res.status(400).send(err);
    });

});


// Localhost configuration Note heroku configure later.
app.listen(port, () => {
    console.log(`Started up at the port ${port}`);
});

// Expert server.js using app module

module.exports = { app };