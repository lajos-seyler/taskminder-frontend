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
  const createTag = useCreateTag({
    onSuccess: (data) =>
      setSelectedTags([...selectedTags, { value: data.id, label: data.name }]),
  });

  const onAdd = useCallback(
    (newTag: Tag) => {
      createTag.mutate({ name: newTag.label });
    },
    [createTag],
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
