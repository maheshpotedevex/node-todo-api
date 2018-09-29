var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

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

// Localhost configuration Note heroku configure later.
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// Expert server.js using app module

module.exports = { app };