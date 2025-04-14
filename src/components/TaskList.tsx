import { Tasks } from "./App";
import Delete from "./Delete";

type TasksListProps = {
  tasks: Tasks[],
  handleToggleTasks: (id: number) => void,
  handleDeleteTasks: (id: number) => void,
}
export default function TaskList({ tasks, handleToggleTasks, handleDeleteTasks }: TasksListProps) {

  return (
    <ul>
      {tasks.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start Adding Tasks
        </li>
      )}
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-8 h-[50px] text-[16px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            handleToggleTasks(task.id)
          }}>
          <span
            className={`${task.isCompleted ? "line-through text-[#ccc]" : ""}`}>
            {task.text}
          </span>
          <Delete id={task.id} handleDeleteTasks={handleDeleteTasks}/>
        </li>
      ))}
    </ul>
  );
}
