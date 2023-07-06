import TaskList from "../components/TaskList";
import TaskItem from "../components/TaskItem";
import { Task } from "../types/task";

c;

export default function ToDoListPage() {
  const DeleteTask = (task: Task) => {
    console.log(task);
  };

  const EditTask = (task: Task) => {
    console.log(task);
  };

  return <TaskItem OnDeleteTask={(Toto: Task) => {}}></TaskItem>;
}
