import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { deleteTask } from "../services/tasks";

interface UseDeleteTaskProps {
  onSuccess?: () => void;
  onError?: (error: AxiosError) => void;
}

export const useDeleteTask = ({ onSuccess, onError }: UseDeleteTaskProps) =>
  useMutation({
    mutationFn: deleteTask,
    onSuccess,
    onError,
  });
