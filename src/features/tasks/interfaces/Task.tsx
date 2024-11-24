import Occurrence from "./Occurrence";
import Project from "./Project";
import Tag from "./Tag";

export default interface Task {
  id: number;
  title: string;
  text: string;
  folder: number;
}

export interface TaskInput extends Task {
  project: number | null;
  tags: number[];
}

export interface TaskResponse extends Task {
  project: Project;
  tags: Array<Tag>;
  next_occurrence: Occurrence | null;
}
