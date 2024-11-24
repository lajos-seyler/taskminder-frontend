import { CSSProperties, useState } from "react";
import { BsCalendarDateFill, BsFillTagsFill } from "react-icons/bs";
import styled from "styled-components";

import Badge from "../../../ui/Badge";
import Button from "../../../ui/Button";
import { formatDate } from "../../../utils/date";
import Tag from "../interfaces/Tag";
import { TaskResponse } from "../interfaces/Task";
import DeleteTaskModal from "./DeleteTaskModal";

const StyledTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 6rem;
  margin-bottom: 1rem;
  border: 1px solid var(--dark-blue);
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const StyledTaskDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const StyledTaskInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem auto;
`;

const StyledActions = styled.div`
  padding-right: 2rem;
`;

const StyledTaskTitle = styled.span`
  font-size: 110%;
  font-weight: 700;
`;

const StyledTags = styled.span`
  margin-right: 1rem;
`;

const StyledTag = styled(Badge)`
  margin: 0 0.15rem;
`;

interface TaskProps {
  task: TaskResponse;
  onClick: (task: TaskResponse) => void;
  style?: CSSProperties;
}

function Tags({ tags }: { tags?: Tag[] }) {
  if (!tags?.length) return;

  return (
    <StyledTags>
      <BsFillTagsFill />
      {tags?.map((tag) => <StyledTag key={tag.id}>{tag.name}</StyledTag>)}
    </StyledTags>
  );
}

function Task({ task, onClick, style }: TaskProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleClose = () => setShowDeleteModal(false);
  const handleShow = () => setShowDeleteModal(true);

  return (
    <>
      <StyledTask onClick={() => onClick(task)} style={style}>
        <StyledTaskDetails>
          <StyledTaskTitle>{task.title}</StyledTaskTitle>

          {(task.tags.length > 0 || task.next_occurrence) && (
            <StyledTaskInfo>
              {task.tags && <Tags tags={task.tags as Array<Tag>} />}
              {task.next_occurrence && (
                <div>
                  <BsCalendarDateFill />
                  <span style={{ marginLeft: "0.5rem" }}>
                    {formatDate(task.next_occurrence.start_time)}
                  </span>
                </div>
              )}
            </StyledTaskInfo>
          )}

          {task.text && <div>{task.text}</div>}
        </StyledTaskDetails>
        <StyledActions>
          <Button type="button" variant="error" onClick={handleShow}>
            Delete
          </Button>
        </StyledActions>
      </StyledTask>

      <DeleteTaskModal
        show={showDeleteModal}
        handleClose={handleClose}
        task={task}
      />
    </>
  );
}

export default Task;
