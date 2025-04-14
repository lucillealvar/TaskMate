import { PiDotsThreeOutlineThin } from "react-icons/pi";

type HeaderProps = {
  totalNumberOfTasks: string;
  numberOfCompletedTasks: string;
};

export default function Header({
  totalNumberOfTasks,
  numberOfCompletedTasks,
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-[24px] col-[1/3] row-[1/2] bg-[#f0fbfc] border-b border-black/[0.08] overflow-hidden">
      <PiDotsThreeOutlineThin className="text-[75px]" />
      <p className="text-[20px]">
        <b>{numberOfCompletedTasks}</b>/{totalNumberOfTasks}Tasks Completed
      </p>
    </header>
  );
}
