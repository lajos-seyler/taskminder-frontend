import styled from "styled-components";

import Button from "../../../ui/Button";

const StyledTasksToolbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  margin: 2rem 0 1rem;
  padding-right: 1rem;
`;

function TasksToolbar() {
  return (
    <StyledTasksToolbar>
      <Button type="button" variant="primary">
        Add
      </Button>
    </StyledTasksToolbar>
  );
}

export default TasksToolbar;
