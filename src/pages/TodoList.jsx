import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  //Get input Value
  const handleChange = (e) => {
    const newTask = e.target.value;
    setTask(newTask);
  };
  //Delete task
  const handleDelete = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
    localStorage.setItem("Tasks", JSON.stringify(updateTodo));
  };

  //Set edit State
  const handleEdit = (id, task) => {
    setEditTaskId(id);
    setEditedTask(task);
  };

  //Save Edit
  const handleSaveEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: editedTask } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("Tasks", JSON.stringify(updatedTodos));
    setEditTaskId(null);
  };

  //Toggle/Untoggle Complete
  const handleComplete = (id) => {
    const completedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(completedTodo);
    localStorage.setItem("Tasks", JSON.stringify(completedTodo));
  };

  //Clear All
  const handleClearAll = () => {
    localStorage.clear();
    setTodos([]);
  };

  //Store the task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("Please enter a task");
    } else {
      const newTodo = { id: crypto.randomUUID(), task };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      //Store to local storage
      localStorage.setItem("Tasks", JSON.stringify(newTodos));
      setTask("");
    }
  };

  // Get data from localstorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("Tasks");
    if (storedTasks) {
      setTodos(JSON.parse(storedTasks));
    }
  }, []);
  return (
    <motion.div
      className="form main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Link
          to="/"
          type="button"
          className="closeBtn closeBtnStyles"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </Link>
        <h2 className="font-title text-center text-2xl ">
          What are your tasks? 📝
        </h2>

        <div className="flex  rounded-xl  bg-neutral-200 mt-2 mb-8">
          <input
            className="w-full  outline-none p-4 font-title   placeholder:text-gray-600 bg-neutral-200   text-gray-900 rounded-lg block text-xl"
            type="text"
            id="addTask"
            name="addTask"
            placeholder="Add your task!"
            value={task}
            onChange={handleChange}
          />
          <button
            className="border-none outline-none  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center  font-title "
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 ">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={
              todo.completed
                ? "flex bg-gradient-to-br from-purple-600/50 to-blue-500/50 opacity-50 p-4 rounded-lg hover:scale-105 transition-all duration-500 text-black text-lg"
                : "flex  p-4 rounded-lg hover:scale-105 transition-all duration-500 bg-neutral-200 text-lg"
            }
          >
            {editTaskId === todo.id ? (
              <input
                className=" border-2 border-black outline-none rounded-lg bg-transparent flex-1 font-title"
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <p
                onClick={() => handleComplete(todo.id)}
                className={
                  todo.completed
                    ? "flex  items-center flex-1 line-through font-title truncate"
                    : "flex-1 flex  items-center font-title truncate "
                }
              >
                {todo.task}
              </p>
            )}

            {editTaskId === todo.id ? (
              <button onClick={() => handleSaveEdit(todo.id)}>
                <div style={{ color: "#057a55", opacity: "70%" }}>
                  <FaCheck className="w-6 h-6 ml-4" />
                </div>
              </button>
            ) : (
              <div className="flex gap-4 items-center">
                <button
                  className="w-6 h-6"
                  onClick={() => handleEdit(todo.id, todo.task)}
                >
                  <FaEdit className="w-6 h-6" />
                </button>
                <button onClick={() => handleDelete(todo.id)}>
                  <div style={{ color: "#E02424", opacity: "70%" }}>
                    <MdDelete className="w-6 h-6" />
                  </div>
                </button>
              </div>
            )}
          </div>
        ))}
        {todos.length > 1 ? (
          <button
            onClick={handleClearAll}
            className=" mx-auto my-0 logInBtn signBtn group"
          >
            <span className=" signSpan font-title text-center">Clear all</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

export default TodoList;
