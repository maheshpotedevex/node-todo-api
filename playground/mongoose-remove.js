const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./.././server/models/todo');
const { User } = require('./.././server/models/user');

// .remove() is deprecated so update one is deleteMany, deleteOne
// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndDelete
Todo.findOneAndDelete({ _id: '5bb5a56bcd4a8f00157d26e7' }).then((doc) => {
    console.log(doc);
});
//Todo.findByIdAndDelete
// Todo.findByIdAndDelete('5bb5a568cd4a8f00157d26e6').then((doc) => {
//     console.log(doc);
// });