import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { createTask } from "../services/tasks";

interface useCreateTaskProps {
  onSuccess: () => void;
  onError: (error: AxiosError) => void;
}

const useCreateTask = ({ onSuccess, onError }: useCreateTaskProps) =>
  useMutation({
    mutationFn: createTask,
    onSuccess,
    onError,
  });

export default useCreateTask;
