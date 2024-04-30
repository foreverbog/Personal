import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been successfully submitted.", {
      duration: 3000,
      className:
        "font-title text-xs bg-primary-light  dark:bg-white/60 dark:text-primary-dark",
    });
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <motion.div
      className="form main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="font-title text-center text-xl m-4 dark:text-white/60">
        Leave your feedback!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center justify-center"
      >
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email adress"
          required
          className="loginInput"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Enter your message"
          required
          className="loginInput"
        ></textarea>
        <button className="createBtn font-title w-1/2 mt-4">Send</button>
      </form>
    </motion.div>
  );
};

export default Contact;
