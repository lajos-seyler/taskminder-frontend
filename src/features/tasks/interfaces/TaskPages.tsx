import Task from "./Task";

export interface TaskPages {
  count: number;
  next: string | null;
  previous: string | null;
  results: Task[];
}
