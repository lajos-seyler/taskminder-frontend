import Tag from "./Tag";

export default interface Task {
  id: number;
  title: string;
  text: string;
  folder: number;
  project: number | null;
}

export interface TaskInput extends Task {
  tags: number[];
}

export interface TaskResponse extends Task {
  tags: Array<Tag>;
}
