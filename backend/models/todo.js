import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://sarvee:WDQzJBCrRa4GJArB@cluster0.5atlv5m.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

export const todo = mongoose.model("todos", todoSchema);
