import { PropsWithChildren } from "react";
import Form from "react-bootstrap/Form";

import ValidationErrors from "../interfaces/ValidationErrors";

interface FormFeedbackProps extends PropsWithChildren {
  errors: ValidationErrors;
  fieldName: string;
}

function FormFeedback({ errors, fieldName }: FormFeedbackProps) {
  const hasError = errors?.[fieldName]?.length > 0;
  const errorMessage = hasError ? errors?.[fieldName]?.[0] : "";

  if (!hasError) return;

  return (
    <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
  );
}

export default FormFeedback;
