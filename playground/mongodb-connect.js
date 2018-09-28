//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

/* Create unique object id using below statement
var obj = new ObjectID(); 
console.log(obj); 
*/

/* Destructuring 
var user = { name: 'Mahesh', age: 29 };
var { name } = user;
console.log(name);
*/

// Connect to database
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // const db = client.db('TodoApp');

    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    /* 
        db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert todo', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });
    */
    /*
     db.collection('Users').insertOne({
         name: 'Mahesh Pote',
         age: 29,
         location: 'mumbai'
     }, (err, result) => {
         if (err) {
             console.log('Unable to insert User', err);
         }
         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
     });
     */
    //   client.close();
});