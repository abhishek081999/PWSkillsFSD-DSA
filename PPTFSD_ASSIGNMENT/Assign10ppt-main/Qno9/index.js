const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

// Endpoint to get all todos
app.get('/', (req, res) => {
  res.json(todos);
});

// Middleware to validate mandatory input (task) for creating a todo
const validateTodoInput = (req, res, next) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: 'Validation failed. Task is mandatory.' });
  }
  next();
};

// Endpoint to create a new todo
app.post('/add', validateTodoInput, (req, res) => {
  const { task } = req.body;
  const newTodo = { id: Date.now().toString(), task };
  todos.push(newTodo);
  res.json({ message: 'Todo created successfully.', data: todos });
});

// Endpoint to update a todo by id
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found.' });
  }
  todos[todoIndex].task = task;
  res.json({ message: 'Todo updated successfully.', data: todos });
});

// Endpoint to delete a todo by id
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found.' });
  }
  todos.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted successfully.', data: todos });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
