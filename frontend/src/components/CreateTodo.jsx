import { useState } from "react";

const CreateTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col gap-10 justify-between items-center pt-28 text-xl">
      <h1 className="text-4xl font-bold">Create Todo</h1>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="title"
          className="p-3"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="description"
          className="p-3"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button
          onClick={() => {
            fetch("https://todo-mern-heuy.vercel.app/todos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: title,
                description: description,
              }),
            }).then(async function (res) {
              const json = await res.json();
            });
          }}
          className="bg-yellow-300 p-2 rounded font-bold text-amber-700"
        >
          Add a todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
