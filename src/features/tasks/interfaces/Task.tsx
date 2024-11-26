import Occurrence from "./Occurrence";
import Project from "./Project";
import Tag from "./Tag";

interface RruleParamsBase {
  freq: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
  interval: number;
}

interface RruleParamsWithCount extends RruleParamsBase {
  count: number;
}

interface RruleParamsWithUntil extends RruleParamsBase {
  until: Date;
}

type RruleParams = RruleParamsWithCount | RruleParamsWithUntil;

export default interface Task {
  id: number;
  title: string;
  text: string;
  folder: number;
  start_time?: string;
  end_time?: string;
  rrule_params?: RruleParams;
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
