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

interface TaskToolbarProps {
  onAddClick: () => void;
}

function TasksToolbar({ onAddClick }: TaskToolbarProps) {
  return (
    <StyledTasksToolbar>
      <Button type="button" variant="primary" onClick={onAddClick}>
        Add
      </Button>
    </StyledTasksToolbar>
  );
}

export default TasksToolbar;
