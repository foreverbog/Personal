import { motion } from "framer-motion";
const AddToDo = () => {
  return (
    <motion.div
      className="form main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form className="flex flex-col">
        <label htmlFor="addTask">Add Task</label>
        <div className="flex bg-red-500 rounded-xl ">
          <input
            className="border-none flex-1 bg-transparent p-4 outline-none"
            type="text"
            id="addTask"
            name="addTask"
            placeholder="Add your task"
          />
          <button
            className="border-none outline-none bg-blue-200 rounded-xl p-8 m-0"
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
      <div className="flex">
        <pc className="flex-1">Task 1</pc>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </motion.div>
  );
};

export default AddToDo;
