const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Built in promise library.
// Remote MongoDB url by mlab 
const mlaburl = `MONGOLAB_URI: mongodb://maheshpote:mlab789@ds121593.mlab.com:21593/todoapp`;
const localhost = `mongodb://maheshpote:mlabtodo@1@ds121593.mlab.com:21593/todoapp`;
mongoose.connect(mlaburl, { useNewUrlParser: true });
//mongoose.connect('mongodb://maheshpote:mlabtodo@1@ds121593.mlab.com:21593/todoapp', { useNewUrlParser: true });

module.exports = { mongoose };