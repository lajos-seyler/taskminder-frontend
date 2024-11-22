import api from "../../../utils/api";
import { TagPages } from "../interfaces/TagPages";

export async function getTags({
  pageParam,
}: {
  pageParam: { limit: number; offset: number };
}): Promise<TagPages> {
  const response = await api.get(
    `api/tags/?limit=${pageParam.limit}&offset=${pageParam.offset}`,
  );
  return response.data;
}

export async function createTag(tag: { name: string }) {
  const response = await api.post("api/tags/", tag);
  return response.data;
}
