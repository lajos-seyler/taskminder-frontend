import { TaskResponse } from "./Task";

export interface TaskPages {
  count: number;
  next: string | null;
  previous: string | null;
  results: TaskResponse[];
}
