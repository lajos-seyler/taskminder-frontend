import Tag from "./Tag";

export default interface Task {
  id: number;
  title: string;
  text: string;
  folder: number;
  project: number;
  tags: Array<Tag> | number[];
}
