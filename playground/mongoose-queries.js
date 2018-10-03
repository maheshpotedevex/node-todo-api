const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./.././server/models/todo');
const { User } = require('./.././server/models/user');

//var id = '5bb200a65ab7a7076cf5fac4980011';
var id = '5baf0d1962f326176ce3ec67';
if (!ObjectID.isValid(id)) {
    console.log('Id not valid.');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Find Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Find One:', todo);
// });

// Todo.findById({
//     _id: id
// }).then((tobyid) => {
//     if (!tobyid) {
//         return console.log("Id not found");
//     }
//     console.log('Find by id:', tobyid);
// }).catch((err) => console.log(err));

User.findById({
    _id: id
}).then((users) => {
    if (!users) {
        return console.log("User not found");
    }
    console.log('User Found: ', users);
});