import { useState } from "react";
import { Form } from "react-bootstrap";
import { Tag } from "react-tag-autocomplete";
import styled from "styled-components";

import Button from "../../../ui/Button";
import TagsInput from "./TagsInput";

const StyledAddTaskForm = styled(Form)`
  width: 100%;
  align-self: flex-start;
  margin: 1.5rem;
`;

const StyledFormButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface AddTaskFormProps {
  onSaveNewTask: () => void;
  onCancel: () => void;
}

function AddTaskForm({ onSaveNewTask, onCancel }: AddTaskFormProps) {
  const [tags, setTags] = useState<Tag[]>([]);

  const handleSubmit = function () {
    onSaveNewTask();
  };

  return (
    <>
      <StyledAddTaskForm>
        <h3>Create Task</h3>
        <hr />
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} />
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
      </StyledAddTaskForm>
    </>
  );
}

export default AddTaskForm;
