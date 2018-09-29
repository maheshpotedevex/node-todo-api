const expect = require('expect');
const supertest = require('supertest');
const request = require('supertest');
// import server app
const { app } = require('./../server');
const { Todo } = require('./../models/todo');

// Create an array object of dummy todos
var todos = [{ text: "First test todo" }, { text: "Second test todo" }];

// life cycle method. This function is run before a test case. 
// database become empty before every request
beforeEach((done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done()); // Implicit invoke done fun.

});

describe('POST /todos', () => {

    // make test-cases describe('POST /todos', () => {
    it('Should create a new todo', (done) => {
        var text = "First test todo";

        //Make request passing to app , to make request on.
        request(app)
            .post('/todos')
            .send({ text })
            // Now make assertion 
            .expect(200)
            // Custome
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
            });

        // Fetch everyhing that collection
        Todo.find({ text }).then((todos) => {
            // console.log(todos.length);
            //console.log(toBe(1));
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
        }).catch((e) => done(e));
    });
    // TEst case Todo does not send bad data.
    it('Should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err) => done(err));

            });
    });
});

// New describe block
describe('GET /todos', () => {
    it('Should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});