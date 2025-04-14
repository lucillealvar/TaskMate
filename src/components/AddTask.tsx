import { useState } from "react";
import Button from "./Button";
import { useTasksContext } from "../lib/hooks";


export default function AddTask() {
  const [taskText, setTaskText] = useState("");
  const {handleAddTasks}= useTasksContext();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAddTasks(taskText);
      setTaskText("")
    }}>
      <label>
        Add Task
        <input
          type="text"
          className="h-[40px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full p-[16px]"
          value = {taskText}
          onChange = {(e) => {
            setTaskText(e.target.value)
          }}
        />
      </label>
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}
