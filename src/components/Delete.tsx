import { MdOutlineDelete } from "react-icons/md";
import { DeleteProps } from "../lib/type";


export default function Delete({id, onDelete}: DeleteProps) {
    return (
        <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}>
        <MdOutlineDelete className="text-red-600 cursor-pointer" />
      </button>

    )
}