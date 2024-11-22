import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Tag } from "react-tag-autocomplete";
import styled from "styled-components";

import ValidationErrors from "../../../interfaces/ValidationErrors";
import Button from "../../../ui/Button";
import FormFeedback from "../../../ui/FormFeedback";
import { errorValidationState } from "../../../utils/errorValidationState";
import useCreateTask from "../hooks/useCreateTask";
import useTags from "../hooks/useTags";
import Task from "../interfaces/Task";
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

const StyledFormFeedback = styled(FormFeedback)`
  display: block;
  margin-bottom: 1rem;
  text-align: center;
`;

interface AddTaskFormProps {
  onSaveNewTask: () => void;
  onCancel: () => void;
}

function AddTaskForm({ onSaveNewTask, onCancel }: AddTaskFormProps) {
  const { data: tagPages } = useTags();
  const tags: Tag[] | undefined = tagPages?.pages
    .flatMap((page) => page.results)
    .map((tag) => {
      return { label: tag.name, value: tag.id };
    });
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [globalError, setGlobalError] = useState<string>("");
  const { register, handleSubmit } = useForm<Task>();

  const queryClient = useQueryClient();

  const createTask = useCreateTask({
    onSuccess: () => {
      onSaveNewTask();
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      if (error.status !== 400) {
        setGlobalError("Something went wrong. Please try again later.");
      }
    },
  });

  const createTaskErrors: ValidationErrors = (createTask.error as AxiosError)
    ?.response?.data as ValidationErrors;

  const onSubmit: SubmitHandler<Task> = function (data) {
    const tags = selectedTags.map((tag) => tag.value) as number[];
    createTask.mutate({ ...data, tags: tags });
  };

  return (
    <>
      <StyledAddTaskForm onSubmit={handleSubmit(onSubmit)}>
        <h3>Create Task</h3>
        <hr />
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            {...register("title")}
            {...errorValidationState(createTaskErrors, "title")}
          />
          <FormFeedback errors={createTaskErrors} fieldName="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("text")} />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="project">
          <Form.Label>Project</Form.Label>
          <Form.Control type="text" {...register("project")} />
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
        <StyledFormFeedback
          errors={{ ...createTaskErrors, detail: [globalError] }}
        />
        <StyledFormButtonsDiv>
          <Button variant="error" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </StyledFormButtonsDiv>
      </StyledAddTaskForm>
    </>
  );
}

export default AddTaskForm;
