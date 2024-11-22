import Tag from "./Tag";

export interface TagPages {
  count: number;
  next: string | null;
  previous: string | null;
  results: Tag[];
}
