import { Badge } from "react-bootstrap";
import { BsCalendarDateFill, BsFillTagsFill } from "react-icons/bs";
import styled from "styled-components";

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
  title: string;
  tags?: string[];
  text?: [];
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return;

  return (
    <StyledTags>
      <BsFillTagsFill />
      {tags?.map((tag) => <Badge style={{ margin: "0 0.15rem" }}>{tag}</Badge>)}
    </StyledTags>
  );
}

function Task({ title, tags, text }: TaskProps) {
  return (
    <StyledTask>
      <StyledTaskTitle>{title}</StyledTaskTitle>
      <StyledTaskDetails>
        <Tags tags={tags} />
        <BsCalendarDateFill />
        <span style={{ marginLeft: "0.5rem" }}>Due</span>
      </StyledTaskDetails>
      <div>{text}</div>
    </StyledTask>
  );
}

export default Task;
