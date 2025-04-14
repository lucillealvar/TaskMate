import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { useTasksContext } from "../lib/hooks";

export default function Header() {
  const { totalNumberOfTasks, numberOfCompletedTasks } = useTasksContext();
  return (
    <header className="flex justify-between items-center px-[24px] col-[1/3] row-[1/2] bg-[#f0fbfc] border-b border-black/[0.08] overflow-hidden">
      <PiDotsThreeOutlineThin className="text-[75px]" />
      <p className="text-[20px]">
        <b>{numberOfCompletedTasks}</b>/{totalNumberOfTasks}Tasks Completed
      </p>
    </header>
  );
}
