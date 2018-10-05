const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Built in promise library.
// Remote MongoDB url by mlab 
//const mlaburl = `MONGOLAB_URI:mongodb://maheshpote:mlab789@ds121593.mlab.com:21593/todoapp`;
const localhost = `mongodb://127.0.0.1:27017/TodoAppMongoose`;
mongoose.connect(localhost, { useNewUrlParser: true });
//mongoose.connect('mongodb://localhost:27017/TodoAppMongoose', { useNewUrlParser: true });
module.exports = { mongoose };