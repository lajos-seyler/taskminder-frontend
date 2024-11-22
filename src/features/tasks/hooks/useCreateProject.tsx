import { useMutation } from "@tanstack/react-query";

import Tag from "../interfaces/Tag";
import { createProject } from "../services/projects";

interface useCreateProjectProps {
  onSuccess?: (data: Tag) => void;
  onError?: () => void;
}

const useCreateProject = ({ onSuccess, onError }: useCreateProjectProps = {}) =>
  useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      if (typeof onSuccess === "function") onSuccess(data);
    },
    onError,
  });

export default useCreateProject;
