import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

export const todo = mongoose.model("todos", todoSchema);
