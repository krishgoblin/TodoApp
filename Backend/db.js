const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:AlaVT6erHxR4su0q@cluster0.88idb2s.mongodb.net/Todo-app');

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = new mongoose.model('todos', TodoSchema);

module.exports = {
    todo: todo,
}