import { Dispatch, SetStateAction, useCallback } from "react";
import { ReactTags, Tag } from "react-tag-autocomplete";

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
  const onAdd = useCallback(
    (newTag: Tag) => {
      setSelectedTags([...selectedTags, newTag]);
    },
    [selectedTags, setSelectedTags],
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
