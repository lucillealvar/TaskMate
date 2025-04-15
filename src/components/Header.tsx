import { useTasksContext } from "../lib/hooks";

export default function Header() {
  const { totalNumberOfTasks, numberOfCompletedTasks } = useTasksContext();
  return (
    <header className="flex justify-center items-center px-[24px] 
    col-span-full min-h-[50px]  bg-[#f0fbfc] border-b border-black/[0.08] overflow-hidden">
      <p className="text-[20px]">
        <b>{numberOfCompletedTasks}</b>/{totalNumberOfTasks}Tasks Completed
      </p>
    </header>
  );
}
