const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // Todos Update
    /* db.collection('Todos').findOneAndUpdate({
         _id: new ObjectID('5badd7d899d1b540da447b05')
     }, {
         $set: {
             completed: true
         }
     }, {
         returnOriginal: false
     }).then((result) => {
         console.log(result);
     }, (err) => {
         console.log('Unable to update.');
     }); */

    // Challenge
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bacbcb66b5a0049c8460c53')
    }, {
        $set: {
            name: 'Mahesh Marathe'
        },
        $inc: {
            age: 1
        }

    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unbale to update the data.');
    });

    //db.close();
});