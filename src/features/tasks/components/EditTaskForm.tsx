import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Tag } from "react-tag-autocomplete";
import styled from "styled-components";

import Button from "../../../ui/Button";
import { TaskInput, TaskResponse } from "../interfaces/Task";
import { convertTaskResponseToInput } from "../utils/tasks";
import TagsInput from "./TagsInput";

const StyledEditTaskForm = styled(Form)`
  width: 100%;
  align-self: flex-start;
  margin: 1.5rem;
`;

const StyledFormButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface EditTaskFormProps {
  onSaveNewTask: () => void;
  onCancel: () => void;
  task?: TaskResponse;
}

function EditTaskForm({ onSaveNewTask, onCancel, task }: EditTaskFormProps) {
  const [tags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const { register, reset } = useForm<TaskInput>({
    defaultValues: {
      title: task?.title,
      text: task?.text,
    },
  });

  useEffect(() => {
    const taskTags = task?.tags.map((tag) => ({
      label: tag.name,
      value: tag.id,
    }));
    setSelectedTags(taskTags || []);
  }, [task]);

  useEffect(() => {
    if (task) reset(convertTaskResponseToInput(task));
  }, [task, reset]);

  const handleSubmit = function () {
    onSaveNewTask();
  };

  return (
    <>
      <StyledEditTaskForm>
        <h3>Update Task</h3>
        <hr />
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" {...register("title")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("text")} />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="project">
          <Form.Label>Project</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="tags">
          <Form.Label>Tags</Form.Label>
          <TagsInput
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </Form.Group>
        <hr />
        <StyledFormButtonsDiv>
          <Button variant="error" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save
          </Button>
        </StyledFormButtonsDiv>
      </StyledEditTaskForm>
    </>
  );
}

export default EditTaskForm;
