import { HiPencilSquare } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const month = currentDateTime.toLocaleString("en-US", { month: "long" });
  const day = currentDateTime.toLocaleString("en-US", { day: "2-digit" });
  const year = currentDateTime.getFullYear();
  const hour = currentDateTime.getHours()
  const minute = currentDateTime.getMinutes()
  return (
    <div className="todo">
      <div className="todo-header">
        <p
          onClick={() => {
            toggleComplete(task.id);
          }}
          className={`${task.completed ? "completed" : null}`}
        >
          {task.task}
        </p>
        <div className="task-manager">
          <HiPencilSquare
            className="pencil"
            onClick={() => editTodo(task.id)}
          />
          <FaTrash className="trash" onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
      <div className="todo-date">
        <p>
          {day}-{month.slice(0, 3)}-{year} / {hour}:{minute}
        </p>
      </div>
    </div>
  );
}
