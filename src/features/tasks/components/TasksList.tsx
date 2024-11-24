import { InfiniteData } from "@tanstack/react-query";
import styled from "styled-components";

import { TaskResponse } from "../interfaces/Task";
import { TaskPages } from "../interfaces/TaskPages";
import Task from "./Task";

const StyledTaskList = styled.div`
  margin-top: 2rem;
`;

interface TaskListProps {
  paginatedTasks?: InfiniteData<TaskPages>;
  selectedTask: TaskResponse | null;
  onTaskSelect: (task: TaskResponse) => void;
}

function TasksList({
  paginatedTasks,
  selectedTask,
  onTaskSelect,
}: TaskListProps) {
  const tasks: TaskResponse[] | undefined = paginatedTasks?.pages.flatMap(
    (page) => page.results,
  );

  return (
    <StyledTaskList>
      {tasks?.map((task) => (
        <Task
          key={task.id}
          task={task}
          onClick={() => onTaskSelect(task)}
          {...(selectedTask &&
            selectedTask.id === task.id && {
              style: { backgroundColor: "var(--light-cyan)" },
            })}
        />
      ))}
    </StyledTaskList>
  );
}

export default TasksList;
