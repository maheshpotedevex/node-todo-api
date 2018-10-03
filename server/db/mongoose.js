const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Built in promise library.
//mongoose.connect('mongodb://localhost:27017/TodoAppMongoose', { useNewUrlParser: true });
mongoose.connect('mongodb://maheshpote:mlabtodo@1@ds121593.mlab.com:21593/todoapp', { useNewUrlParser: true });

module.exports = { mongoose };