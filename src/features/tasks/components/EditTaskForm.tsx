import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Tag } from "react-tag-autocomplete";
import styled from "styled-components";

import Button from "../../../ui/Button";
import useProjects from "../hooks/useProjects";
import useTags from "../hooks/useTags";
import { useUpdateTask } from "../hooks/useUpdateTask";
import ProjectOption from "../interfaces/ProjectOption";
import { TaskInput, TaskResponse } from "../interfaces/Task";
import { convertTaskResponseToInput } from "../utils/tasks";
import OccurrencesInput from "./OccurrencesInput";
import ProjectInput from "./ProjectInput";
import TagsInput from "./TagsInput";
import TimeRangeInput from "./TimeRangeInput";

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
  const { data: projectPages } = useProjects();
  const { data: tagPages } = useTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectOption | null>(
    null,
  );

  const [startDate, setStartDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [byweekday, setByweekday] = useState<number[]>([]);

  const queryClient = useQueryClient();

  const tags: Tag[] | undefined = tagPages?.pages
    .flatMap((page) => page.results)
    .map((tag) => {
      return { label: tag.name, value: tag.id };
    });

  const projects: ProjectOption[] | undefined = projectPages?.pages
    .flatMap((page) => page.results)
    .map((project) => {
      return {
        label: `${project?.folder?.name ? project.folder.name + "/" : ""}${project.name}`,
        value: project.id,
      };
    });

  const { register, reset, control, handleSubmit } = useForm<TaskInput>({
    defaultValues: {
      title: task?.title,
      text: task?.text,
      keep_occurrences: true,
    },
  });

  const updateTaskMutation = useUpdateTask({
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  useEffect(() => {
    const taskProject =
      task?.project && task.project.name !== null
        ? {
            label: task?.project.name,
            value: task?.project.id,
          }
        : null;
    setSelectedProject(taskProject);
  }, [task]);

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

  if (!task) return;

  const onSubmit: SubmitHandler<TaskInput> = function (data) {
    const tags = selectedTags.map((tag) => tag.value) as number[];

    const startDateTime = `${startDate} ${startTime}`;
    const endDateTime = `${endDate} ${endTime}`;

    const startDateTimeIsValid = moment(
      startDateTime,
      "YYYY-MM-DD HH:mm",
    ).isValid();
    const endDateTimeIsValid = moment(
      endDateTime,
      "YYYY-MM-DD HH:mm",
    ).isValid();

    const taskData = {
      ...data,
      tags: tags,
      project: selectedProject?.value || null,
    };

    if (startDateTimeIsValid && endDateTimeIsValid) {
      taskData["start_time"] = startDateTime;
      taskData["end_time"] = endDateTime;
    }
    if (data.rrule_params?.ends_on != "count") delete data.rrule_params?.count;
    if (data.rrule_params?.ends_on != "date") delete data.rrule_params?.until;

    if (typeof data.rrule_params?.interval === "string") {
      data.rrule_params.interval = parseInt(data.rrule_params.interval);
    }
    if (typeof data.rrule_params?.count === "string") {
      data.rrule_params.count = parseInt(data.rrule_params.count);
    }

    delete data.rrule_params?.ends_on;

    updateTaskMutation.mutate({
      data: taskData,
      taskId: task.id,
    });
    onSaveNewTask();
  };

  return (
    <>
      <StyledEditTaskForm onSubmit={handleSubmit(onSubmit)}>
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
          <Controller
            name="project"
            control={control}
            render={({ field }) => (
              <ProjectInput
                {...field}
                options={projects}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            )}
          />
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
        <TimeRangeInput
          setStartDate={setStartDate}
          setStartTime={setStartTime}
          setEndDate={setEndDate}
          setEndTime={setEndTime}
        />
        <OccurrencesInput
          register={register}
          byweekday={byweekday}
          setByweekday={setByweekday}
        />
        <hr />
        <StyledFormButtonsDiv>
          <Button variant="error" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </StyledFormButtonsDiv>
      </StyledEditTaskForm>
    </>
  );
}

export default EditTaskForm;
