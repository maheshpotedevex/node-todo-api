const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Built in promise library.
mongoose.connect('mongodb://localhost:27017/TodoAppMongoose', { useNewUrlParser: true });

module.exports = { mongoose };