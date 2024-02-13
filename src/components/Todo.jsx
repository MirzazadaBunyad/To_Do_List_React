import { HiPencilSquare } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";

export default function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="Todo">
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <HiPencilSquare onClick={() => editTodo(task.id)} />
        <FaTrash onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}
