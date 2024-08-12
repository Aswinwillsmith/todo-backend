//Express
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
// mongoose.connect("mongodb");
// let todos = [];
app.post("/todos", (req, res) => {
  const { title, desc } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    desc,
  };
  todos.push(newTodo);
  console.log(todos);
  res.status(201).json(newTodo);
});
app.get("/todos", (req, res) => {
  res.json(todos);
  console.log(todos);
});
const port = 3000;
app.listen(port, () => {
  console.log("server running in " + port);
});
