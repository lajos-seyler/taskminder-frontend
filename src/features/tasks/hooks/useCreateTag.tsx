import { useMutation } from "@tanstack/react-query";

import Tag from "../interfaces/Tag";
import { createTag } from "../services/tags";

interface useCreateTagProps {
  onSuccess?: (data: Tag) => void;
  onError?: () => void;
}

const useCreateTag = ({ onSuccess, onError }: useCreateTagProps = {}) =>
  useMutation({
    mutationFn: createTag,
    onSuccess: (data) => {
      if (typeof onSuccess === "function") onSuccess(data);
    },
    onError,
  });

export default useCreateTag;
