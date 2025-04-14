import { useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import TaskList from "./TaskList";

export type Tasks = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function App() {
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

  const handleDeletTasks = (id: number) => {
    setTasks((prev) => prev.filter((tasks) => tasks.id !== id));
  };

  return (
    <div className="flex justify-center items-center font-love bg-teal-200 h-screen w-screen flex-col">
      <Banner />
      <main className="relative bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header
          totalNumberOfTasks={totalNumberOfTasks}
          numberOfCompletedTasks={numberOfCompletedTasks}
        />
        <TaskList
          tasks={tasks}
          handleToggleTasks={handleToggleTasks}
          handleDeleteTasks={handleDeletTasks}
        />
        <SideBar handleAddTasks={handleAddTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
