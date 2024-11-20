import styled from "styled-components";

import Task from "./Task";

const StyledTaskList = styled.div`
  margin-top: 2rem;
`;

function TasksList() {
  return (
    <StyledTaskList>
      <Task title="Task 1" tags={["important", "work"]} />
      <Task title="Task 2" />
      <Task title="Task 3" />
    </StyledTaskList>
  );
}

export default TasksList;
