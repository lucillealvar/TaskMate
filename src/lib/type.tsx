
export type Tasks = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TasksContextProviderProps = {
  children: React.ReactNode;
}

export type ToDosContext = {
  tasks: Tasks[];
  totalNumberOfTasks: number;
  numberOfCompletedTasks: number;
  handleAddTasks: (taskText: string) => void;
  handleToggleTasks: (id: number) => void;
  handleDeleteTasks: (id: number) => void;
}

export type DeleteProps = {
  id: number;
  onDelete: (id: number) => void;
}

export type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

