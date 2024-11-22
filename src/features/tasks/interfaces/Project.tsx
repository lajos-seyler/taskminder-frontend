import Folder from "./Folder";

export default interface Project {
  id: number;
  name: string;
  folder?: Folder;
}
