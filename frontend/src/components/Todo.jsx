const Todo = ({ todo }) => {
  return (
    <div className="flex flex-col gap-10 pt-4 bg-purple-500 text-yellow-300 rounded-md p-2 w-72 justify-center items-center text-2xl font-semibold">
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <button
        className="bg-purple-800 w-full h-full p-4 rounded-md text-white hover:bg-purple-700"
        onClick={() => {
          fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: todo._id,
            }),
          });
        }}
      >
        {" "}
        {todo.completed ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default Todo;
