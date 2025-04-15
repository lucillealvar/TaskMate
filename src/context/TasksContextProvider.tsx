import { createContext, useEffect, useState } from "react";
import { Tasks, TasksContextProviderProps, ToDosContext } from "../lib/type";

export const TasksContext = createContext<ToDosContext | null>(null);

const getInitialTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    return JSON.parse(savedTasks);
  } else {
    return [];
  }
};

export default function TasksContextProvider({
  children,
}: TasksContextProviderProps) {
  // state
  const [tasks, setTasks] = useState<Tasks[]>(getInitialTasks);

  // derived state
  const totalNumberOfTasks = tasks.length;
  const numberOfCompletedTasks = tasks.filter(
    (task) => task.isCompleted
  ).length;

  // event handlers
  const handleAddTasks = (taskText: string) => {
    if (tasks.length >= 10) {
      alert("You've reach the limit");
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
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
