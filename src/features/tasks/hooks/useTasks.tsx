import { useInfiniteQuery } from "@tanstack/react-query";

import { getNextPageParam } from "../../../utils/getNextPageParam";
import getTasks from "../services/tasks";

const useTasks = (query: string = "") =>
  useInfiniteQuery({
    queryKey: ["tasks", query],
    queryFn: getTasks,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => getNextPageParam(lastPage),
  });

export default useTasks;
