import { TaskInput, TaskResponse } from "../interfaces/Task";

export const convertTaskResponseToInput = (task: TaskResponse): TaskInput => ({
  ...task,
  tags: task.tags.map((tag) => tag.id),
});
