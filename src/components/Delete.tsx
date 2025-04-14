import { MdOutlineDelete } from "react-icons/md";

type DeleteProps = {
  id: number,
  handleDeleteTasks: (id: number) => void
}

export default function Delete({id, handleDeleteTasks}: DeleteProps) {
    return (
        <button
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteTasks(id);
        }}>
        <MdOutlineDelete className="text-red-600 cursor-pointer" />
      </button>

    )
}