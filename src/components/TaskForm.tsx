import styled from "styled-components";
import { Task } from "../types/task";
import useNewId from "../hooks/useNewId";
import { useState } from "react";

//TaskForm : Ce composant permettra à l'utilisateur de créer une nouvelle tâche en saisissant les détails requis.
//Il affichera un formulaire avec des champs tels que le titre, la description, la date d'échéance, etc.
//Lorsque le formulaire est soumis, il déclenchera une fonction pour ajouter la nouvelle tâche à la liste.

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  form {
    display: flex;
    align-items: center;
  }

  input {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;

type TaskFormProps = {
  onCreateTask: (task: Task) => void;
};

function TaskForm(props: TaskFormProps) {
  const firstId = 0;
  const getNewId = useNewId(firstId);
  const [task, setTask] = useState({ id: firstId, name: "" });

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTask({ ...task, name: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onCreateTask({ ...task, id: getNewId(), isCompleted: false });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleTaskChange} />
        <button type="submit">追加</button>
      </form>
    </FormContainer>
  );
}

export default TaskForm;
