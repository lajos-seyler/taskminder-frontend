import { InfiniteData } from "@tanstack/react-query";
import styled from "styled-components";

import TaskType from "../interfaces/Task";
import { TaskPages } from "../interfaces/TaskPages";
import Task from "./Task";

const StyledTaskList = styled.div`
  margin-top: 2rem;
`;

interface TaskListProps {
  paginatedTasks?: InfiniteData<TaskPages>;
}

function TasksList({ paginatedTasks }: TaskListProps) {
  const tasks: TaskType[] | undefined = paginatedTasks?.pages.flatMap(
    (page) => page.results,
  );
  return (
    <StyledTaskList>
      {tasks?.map((task) => <Task key={task.id} task={task} />)}
    </StyledTaskList>
  );
}

export default TasksList;
