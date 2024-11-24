import api from "../../../utils/api";
import { TaskInput, TaskResponse } from "../interfaces/Task";
import { TaskPages } from "../interfaces/TaskPages";

export async function getTasks({
  pageParam,
}: {
  pageParam: { limit: number; offset: number };
}): Promise<TaskPages> {
  const response = await api.get(
    `api/tasks/?limit=${pageParam.limit}&offset=${pageParam.offset}`,
  );
  return response.data;
}

export async function createTask(task: TaskInput) {
  const response = await api.post("/api/tasks/", task);
  return response.data;
}

export async function updateTask({
  data,
  taskId,
}: {
  data: TaskInput;
  taskId: number;
}): Promise<TaskResponse> {
  return await api.patch(`/api/tasks/${taskId}/`, data);
}

export async function deleteTask(taskId: number) {
  return await api.delete(`/api/tasks/${taskId}/`);
}
