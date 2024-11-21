import api from "../../../utils/api";
import { TaskPages } from "../interfaces/TaskPages";

export default async function getTasks({
  pageParam,
}: {
  pageParam: { limit: number; offset: number };
}): Promise<TaskPages> {
  const response = await api.get(
    `api/tasks/?limit=${pageParam.limit}&offset=${pageParam.offset}`,
  );
  return response.data;
}
