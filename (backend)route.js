const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

router.post('/', async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text,
    });
    await newTodo.save();
    res.json(newTodo);
});

module.exports = router;
