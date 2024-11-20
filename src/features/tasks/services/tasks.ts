import api from "../../../utils/api";
import { TaskPages } from "../interfaces/TaskPages";

export default async function getTasks(): Promise<TaskPages> {
  const response = await api.get("api/tasks");
  return response.data;
}
