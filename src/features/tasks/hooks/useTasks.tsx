import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getNextPageParam } from "../../../utils/getNextPageParam";
import { TaskPages } from "../interfaces/TaskPages";
import getTasks from "../services/tasks";

const useTasks = () =>
  useInfiniteQuery<
    TaskPages,
    AxiosError,
    InfiniteData<TaskPages>,
    string[],
    { limit: number; offset: number }
  >({
    queryKey: ["tasks"],
    queryFn: getTasks,
    initialPageParam: { limit: 25, offset: 0 },
    getNextPageParam: (lastPage) => getNextPageParam(lastPage),
  });

export default useTasks;
