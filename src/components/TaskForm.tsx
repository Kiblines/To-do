import styled from "styled-components";
import Task from "../types/task";
import useNewId from "../hooks/useNewId";

//TaskForm : Ce composant permettra à l'utilisateur de créer une nouvelle tâche en saisissant les détails requis.
//Il affichera un formulaire avec des champs tels que le titre, la description, la date d'échéance, etc.
//Lorsque le formulaire est soumis, il déclenchera une fonction pour ajouter la nouvelle tâche à la liste.

type TaskFormProps = {
  onCreateTask: (task: Task) => void;
};

function TaskForm(props: TaskFormProps) {
  const firstId = 0;
  const getNewId = useNewId(firstId);
  const [task, setTask] = useState({ id: firstId, name: "" });

  const handleTaskChange = (e:)
}

export default TaskForm;
