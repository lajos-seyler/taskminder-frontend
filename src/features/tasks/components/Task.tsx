import { Badge } from "react-bootstrap";
import { BsCalendarDateFill, BsFillTagsFill } from "react-icons/bs";
import styled from "styled-components";

import Tag from "../interfaces/Tag";
import TaskType from "../interfaces/Task";

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 6rem;
  margin-bottom: 1rem;
  border: 1px solid var(--dark-blue);
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const StyledTaskTitle = styled.span`
  font-size: 110%;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const StyledTaskDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const StyledTags = styled.span`
  margin-right: 1rem;
`;

interface TaskProps {
  task: TaskType;
}

function Tags({ tags }: { tags?: Tag[] }) {
  if (!tags?.length) return;

  return (
    <StyledTags>
      <BsFillTagsFill />
      {tags?.map((tag) => (
        <Badge key={tag.id} style={{ margin: "0 0.15rem" }}>
          {tag.name}
        </Badge>
      ))}
    </StyledTags>
  );
}

function Task({ task }: TaskProps) {
  return (
    <StyledTask>
      <StyledTaskTitle>{task.title}</StyledTaskTitle>
      <StyledTaskDetails>
        <Tags tags={task.tags} />
        <BsCalendarDateFill />
        <span style={{ marginLeft: "0.5rem" }}>Due</span>
      </StyledTaskDetails>
      <div>{task.text}</div>
    </StyledTask>
  );
}

export default Task;
