import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "react-bootstrap";

import Button from "../../../ui/Button";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { TaskResponse } from "../interfaces/Task";

interface DeleteTaskModalProps {
  show: boolean;
  handleClose: () => void;
  task: TaskResponse;
}

export default function DeleteTaskModal({
  show,
  handleClose,
  task,
}: DeleteTaskModalProps) {
  const queryClient = useQueryClient();

  const deleteTaskMutation = useDeleteTask({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleDelete = () => {
    deleteTaskMutation.mutate(task.id);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete the following task?</p>
        <p>{task.title}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="error" onClick={handleDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
