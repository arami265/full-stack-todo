const express = require("express");
const router = express.Router();

// Import Todo model
const Todo = require("../../models/Todo");

// @route GET api/todos
// @desc Gets all todos
// @access Public
router.get("/", (req, res) => {
  Todo.find()
    .sort({ date: 1 })
    .then(todos => res.json(todos));
});

// @route POST api/todos
// @desc Create a todo item
// @access Public
router.post("/", (req, res) => {
  const newTodo = new Todo({
    name: req.body.name
  });

  newTodo.save().then(todo => res.json(todo));
});

// @route DELETE api/todos/:id
// @desc Delete a todo item
// @access Public
router.delete("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
