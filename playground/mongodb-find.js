const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // toArray returns promise, so use then fun here
    // Select Query
    /*  db.collection('Todos').find({
          _id: new ObjectID('5bacba51b26ca53910661e2b')
      }).toArray().then((docs) => {
          // Success
          console.log('Todos');
          console.log(JSON.stringify(docs, undefined, 2));
      }, (err) => {
          console.log('Unable to fetch todos', err);
      }); */

    // Count query
    /* db.collection('Todos').find({}).count().then((count) => {
         // Success
         console.log(`Todos Total Count ${count}`);
     }, (err) => {
         console.log('Unable to fetch todos', err);
     });
     */

    // Challlenge to fetch same name user from the collection users
    db.collection('Users').find({ name: 'Mahesh Pote' }).toArray().then((document) => {
        console.log('Users Details:');
        console.log(JSON.stringify(document, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users document');
    });

    // Count
    db.collection('Users').find({ name: 'Mahesh Pote' }).count().then((count) => {
        console.log('Users Details:');
        console.log(`Total Users Are : ${count}`);
    }, (err) => {
        console.log('Unable to fetch users document');
    });

    //db.close();
});