import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import TaskDetail from "../features/tasks/components/TaskDetail";
import TasksList from "../features/tasks/components/TasksList";
import TasksToolbar from "../features/tasks/components/TasksToolbar";
import useTasks from "../features/tasks/hooks/useTasks";
import PageHeader from "../ui/PageHeader";

const StyledContainer = styled(Container)`
  height: 100%;
  overflow-y: hidden;
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

const ScrollableCol = styled(Col)`
  height: 100%;
  overflow-y: scroll;
`;

function Tasks() {
  const { data: tasks } = useTasks();

  return (
    <StyledContainer fluid>
      <StyledRow>
        <ScrollableCol md="12" lg="8" xl="9">
          <PageHeader>Tasks</PageHeader>
          <TasksToolbar />
          <TasksList paginatedTasks={tasks} />
        </ScrollableCol>
        <ScrollableCol md="12" lg="4" xl="3">
          <TaskDetail />
        </ScrollableCol>
      </StyledRow>
    </StyledContainer>
  );
}

export default Tasks;
