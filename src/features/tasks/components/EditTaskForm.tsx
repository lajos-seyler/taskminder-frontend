import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Tag } from "react-tag-autocomplete";
import styled from "styled-components";

import Button from "../../../ui/Button";
import Task from "../interfaces/Task";
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
  task?: Task;
}

function EditTaskForm({ onSaveNewTask, onCancel, task }: EditTaskFormProps) {
  const [tags, setTags] = useState<Tag[]>([]);

  const { register, reset } = useForm<Task>({
    defaultValues: {
      title: task?.title,
      text: task?.text,
    },
  });

  useEffect(() => {
    reset({ ...task });
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
          <TagsInput tags={tags} setTags={setTags} />
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
