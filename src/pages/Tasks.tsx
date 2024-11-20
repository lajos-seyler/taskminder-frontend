import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import TaskDetail from "../features/tasks/components/TaskDetail";
import TasksList from "../features/tasks/components/TasksList";
import TasksToolbar from "../features/tasks/components/TasksToolbar";
import PageHeader from "../ui/PageHeader";

const StyledContainer = styled(Container)`
  height: 100%;
`;

const StyledRow = styled(Row)`
  height: 100%;
`;

function Tasks() {
  return (
    <StyledContainer fluid>
      <StyledRow>
        <Col md="12" lg="8" xl="9">
          <PageHeader>Tasks</PageHeader>
          <TasksToolbar />
          <TasksList />
        </Col>
        <Col md="12" lg="4" xl="3">
          <TaskDetail />
        </Col>
      </StyledRow>
    </StyledContainer>
  );
}

export default Tasks;
