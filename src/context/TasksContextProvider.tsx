import { createContext, useState } from "react";
import { Tasks, TasksContextProviderProps, ToDosContext } from "../lib/type";

export const TasksContext = createContext<ToDosContext | null>(null);

export default function TasksContextProvider({
  children,
}: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const totalNumberOfTasks = tasks.length;
  const numberOfCompletedTasks = tasks.filter(
    (task) => task.isCompleted
  ).length;

  const handleAddTasks = (taskText: string) => {
    if (tasks.length >= 3) {
      alert("Login to add more");
      return;
    } else {
      setTasks((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: taskText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTasks = (id: number) => {
    setTasks(
      tasks.map((tasks) => {
        if (tasks.id === id) {
          return { ...tasks, isCompleted: !tasks.isCompleted };
        }
        return tasks;
      })
    );
  };

  const handleDeleteTasks = (id: number) => {
    setTasks((prev) => prev.filter((tasks) => tasks.id !== id));
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        totalNumberOfTasks,
        numberOfCompletedTasks,
        handleAddTasks,
        handleToggleTasks,
        handleDeleteTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
