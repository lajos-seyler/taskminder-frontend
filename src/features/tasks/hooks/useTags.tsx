import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getNextPageParam } from "../../../utils/getNextPageParam";
import { TagPages } from "../interfaces/TagPages";
import { getTags } from "../services/tags";

const useTags = () =>
  useInfiniteQuery<
    TagPages,
    AxiosError,
    InfiniteData<TagPages>,
    string[],
    { limit: number; offset: number }
  >({
    queryKey: ["tags"],
    queryFn: getTags,
    initialPageParam: { limit: 25, offset: 0 },
    getNextPageParam: (lastPage) => getNextPageParam(lastPage),
  });

export default useTags;
