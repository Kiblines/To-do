//  Ce composant sera responsable de l'affichage de la liste des tâches.
//Il itérera sur les données des tâches et rendra un composant TaskItem pour chaque tâche.

import styled from "styled-components";

const TaskListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function TaskList() {
  return <TaskListContainer></TaskListContainer>;
}
