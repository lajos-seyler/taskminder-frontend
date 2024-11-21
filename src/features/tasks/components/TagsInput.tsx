import { Dispatch, useCallback } from "react";
import { ReactTags, Tag } from "react-tag-autocomplete";

interface TagsInputProps {
  tags: Tag[];
  setTags: Dispatch<React.SetStateAction<Tag[]>>;
}

function TagsInput({ tags, setTags }: TagsInputProps) {
  const suggestions: Tag[] = [];

  const onAdd = useCallback(
    (newTag: Tag) => {
      setTags([...tags, newTag]);
    },
    [tags, setTags],
  );

  const onDelete = useCallback(
    (tagIndex: number) => {
      setTags(tags.filter((_, i) => i !== tagIndex));
    },
    [tags, setTags],
  );

  return (
    <ReactTags
      selected={tags}
      suggestions={suggestions}
      onAdd={onAdd}
      onDelete={onDelete}
      allowNew={true}
    />
  );
}

export default TagsInput;
