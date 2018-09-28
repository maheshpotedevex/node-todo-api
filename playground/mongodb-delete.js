const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    /* db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
         console.log(result);
     }, (err) => {
         console.log('Does not deleted.');
     }); */
    // deleteOne
    /* db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
         console.log(result);
     }, (err) => {
         console.log('Does not deleted.');
     }); */
    // findOneAndDelete
    /* db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
         console.log(result);
     }, (err) => {
         console.log('Does not deleted.');
     });
     */
    // Challenge
    /* db.collection('Users').deleteMany({ name: 'Mahesh Pote' }); */

    // Delete by ID

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bacc02c22f74d25d41c9ff7')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    //db.close();
});