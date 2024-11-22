import api from "../../../utils/api";
import { TaskInput } from "../interfaces/Task";
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
