import { motion } from "framer-motion";
import { useState } from "react";
const AddToDo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  //Get input Value
  const handleChange = (e) => {
    const newTask = e.target.value;
    setTask(newTask);
  };
  //Store the task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("Please enter a task");
    } else {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  return (
    <motion.div
      className="form main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="addTask">Add Task</label>
        <div className="flex  rounded-xl ">
          <input
            className="loginInput border-none flex-1 bg-transparent p-4 outline-none"
            type="text"
            id="addTask"
            name="addTask"
            placeholder="Add your task"
            value={task}
            onChange={handleChange}
          />
          <button
            className="border-none outline-none bg-blue-200 rounded-xl p-4 m-0"
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
      <div className="flex flex-col">
        {todos.map((todo) => (
          <div key={crypto.randomUUID()} className="flex">
            <p className="flex-1">{todo}</p>

            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AddToDo;
