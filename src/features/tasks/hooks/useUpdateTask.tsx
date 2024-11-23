import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { updateTask } from "../services/tasks";

interface UseUpdateTaskProps {
  onSuccess?: () => void;
  onError?: (error: AxiosError) => void;
}

export const useUpdateTask = ({ onSuccess, onError }: UseUpdateTaskProps) =>
  useMutation({
    mutationFn: updateTask,
    onSuccess,
    onError,
  });
