import styled from "styled-components";

const StyledTaskDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-left: 1px solid gray;
`;

function TaskDetail() {
  return <StyledTaskDetail>No item(s) selected</StyledTaskDetail>;
}

export default TaskDetail;
