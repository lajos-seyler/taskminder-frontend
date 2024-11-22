import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getNextPageParam } from "../../../utils/getNextPageParam";
import { ProjectPages } from "../interfaces/ProjectPages";
import { getProjects } from "../services/projects";

const useProjects = () =>
  useInfiniteQuery<
    ProjectPages,
    AxiosError,
    InfiniteData<ProjectPages>,
    string[],
    { limit: number; offset: number }
  >({
    queryKey: ["projects"],
    queryFn: getProjects,
    initialPageParam: { limit: 25, offset: 0 },
    getNextPageParam: (lastPage) => getNextPageParam(lastPage),
  });

export default useProjects;
