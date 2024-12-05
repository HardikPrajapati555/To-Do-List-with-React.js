import PropTypes from "prop-types";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-2 border-b"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="mr-2"
            />
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
            >
              {task.task}
            </span>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired, 
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired, 
  toggleTaskCompletion: PropTypes.func.isRequired, 
};

export default TaskList;
