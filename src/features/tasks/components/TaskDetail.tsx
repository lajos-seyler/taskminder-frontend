import styled from "styled-components";

import { TaskResponse } from "../interfaces/Task";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";

const StyledTaskDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid gray;
`;

interface TaskDetailProps {
  selectedTask: TaskResponse | null;
  isAddingNew: boolean;
  onSaveNewTask: () => void;
  onCancel: () => void;
}

function TaskDetail({
  selectedTask,
  isAddingNew,
  onSaveNewTask,
  onCancel,
}: TaskDetailProps) {
  return (
    <StyledTaskDetail>
      {isAddingNew && (
        <AddTaskForm onSaveNewTask={onSaveNewTask} onCancel={onCancel} />
      )}
      {selectedTask && (
        <EditTaskForm
          onSaveNewTask={onSaveNewTask}
          onCancel={onCancel}
          task={selectedTask}
        />
      )}
      {!isAddingNew && !selectedTask && <>No item(s) selected</>}
    </StyledTaskDetail>
  );
  return;
}

export default TaskDetail;
