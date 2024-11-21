import { useMutation } from "@tanstack/react-query";

import { createTask } from "../services/tasks";

interface useCreateTaskProps {
  onSuccess: () => void;
  onError: () => void;
}

const useCreateTask = ({ onSuccess, onError }: useCreateTaskProps) =>
  useMutation({
    mutationFn: createTask,
    onSuccess,
    onError,
  });

export default useCreateTask;
