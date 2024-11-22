import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import TaskDetail from "../features/tasks/components/TaskDetail";
import TasksList from "../features/tasks/components/TasksList";
import TasksToolbar from "../features/tasks/components/TasksToolbar";
import useTasks from "../features/tasks/hooks/useTasks";
import Task from "../features/tasks/interfaces/Task";
import Button from "../ui/Button";
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
  const { data: tasks, fetchNextPage, hasNextPage } = useTasks();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);

  const handleAddNewClick = () => {
    setSelectedTask(null);
    setIsAddingNew(true);
  };

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
    setIsAddingNew(false);
  };

  const handleSaveNewTask = () => {
    setIsAddingNew(false);
    setSelectedTask(null);
  };

  return (
    <StyledContainer fluid>
      <StyledRow>
        <ScrollableCol md="12" lg="8" xl="9">
          <PageHeader>Tasks</PageHeader>
          <TasksToolbar onAddClick={handleAddNewClick} />
          <TasksList paginatedTasks={tasks} onTaskSelect={handleTaskSelect} />
          {hasNextPage && <Button onClick={fetchNextPage}>Load more</Button>}
        </ScrollableCol>

        <ScrollableCol md="12" lg="4" xl="3">
          <TaskDetail
            selectedTask={selectedTask}
            isAddingNew={isAddingNew}
            onSaveNewTask={handleSaveNewTask}
            onCancel={() => {
              setIsAddingNew(false);
              setSelectedTask(null);
            }}
            {...(selectedTask && { task: selectedTask })}
          />
        </ScrollableCol>
      </StyledRow>
    </StyledContainer>
  );
}

export default Tasks;
