import { useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useCallback } from "react";
import { ReactTags, Tag } from "react-tag-autocomplete";

import useCreateTag from "../hooks/useCreateTag";

interface TagsInputProps {
  tags?: Tag[];
  selectedTags: Tag[];
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
}

function TagsInput({
  tags = [],
  selectedTags,
  setSelectedTags,
}: TagsInputProps) {
  const queryClient = useQueryClient();

  const createTag = useCreateTag({
    onSuccess: (data) => {
      setSelectedTags([...selectedTags, { value: data.id, label: data.name }]);
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });

  const onAdd = useCallback(
    (newTag: Tag) => {
      const isNewTag = !tags.includes(newTag);
      if (isNewTag) {
        createTag.mutate({ name: newTag.label });
      } else {
        setSelectedTags([...selectedTags, newTag]);
      }
    },
    [tags, createTag, selectedTags, setSelectedTags],
  );

  const onDelete = useCallback(
    (tagIndex: number) => {
      setSelectedTags(selectedTags.filter((_, i) => i !== tagIndex));
    },
    [selectedTags, setSelectedTags],
  );

  return (
    <ReactTags
      selected={selectedTags}
      suggestions={tags}
      allowNew={true}
      onAdd={onAdd}
      onDelete={onDelete}
    />
  );
}

export default TagsInput;
