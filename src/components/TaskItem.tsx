import { useState } from "react";
import { Task } from "../types/task";
import styled from "styled-components";

const Container = styled.div``;

// TaskItem : Ce composant représentera une tâche individuelle dans la liste.
//Il affichera les détails de la tâche, tels que le titre, la description, la date d'échéance, etc.
//Il peut également inclure des boutons d'édition et de suppression pour interagir avec la tâche.
type TaskProps = {
  task: Task;
  onDeleteTask: (task: Task) => void;
  onEditTask: (task: Task) => void;
};

function TaskItem(props: TaskProps) {
  const { task, onDeleteTask, onEditTask } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);

  return <Container></Container>;
}

export default TaskItem;
