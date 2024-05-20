import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { todo } from "./models/todo.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Get Route
app.get("/todos", async (req, res) => {
  const todos = await todo.find();

  res.json({
    todos,
  });
});

// Post Route
app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  // Zod Validation
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    return res.status(411).json({
      message: "You Send the wrong inputs",
    });
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
  });
});

// Put Route
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload)
    return res.status(411).json({
      message: "You send a wrong inputs",
    });

  await todo.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("server running in port 3000");
});
