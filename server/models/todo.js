var mongoose = require('mongoose');
// Creating a model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        dafault: false
    },
    completedAt: {
        type: Number,
        dafault: null
    }
});

module.exports = { Todo };