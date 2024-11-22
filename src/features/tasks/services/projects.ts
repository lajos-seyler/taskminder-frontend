import api from "../../../utils/api";
import { ProjectPages } from "../interfaces/ProjectPages";

export async function getProjects({
  pageParam,
}: {
  pageParam: { limit: number; offset: number };
}): Promise<ProjectPages> {
  const response = await api.get(
    `api/projects/?limit=${pageParam.limit}&offset=${pageParam.offset}`,
  );
  return response.data;
}

export async function createProject(project: { name: string }) {
  const response = await api.post("api/projects/", project);
  return response.data;
}
