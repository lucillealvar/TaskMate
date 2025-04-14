import { useContext } from "react";
import { TasksContext } from "../context/TasksContextProvider";

export function useTasksContext () {
    const context = useContext(TasksContext);
    if(!context) {
        throw new Error("Forgot to add provider");
    }
    return context;
}