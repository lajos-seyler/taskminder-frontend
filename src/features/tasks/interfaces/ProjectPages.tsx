import Project from "./Project";

export interface ProjectPages {
  count: number;
  next: string | null;
  previous: string | null;
  results: Project[];
}
