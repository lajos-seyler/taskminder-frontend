import { PropsWithChildren } from "react";
import Form from "react-bootstrap/Form";

import ValidationErrors from "../interfaces/ValidationErrors";

interface FormFeedbackProps extends PropsWithChildren {
  errors: ValidationErrors;
  fieldName?: string;
  className?: string;
}

function FormFeedback({ errors, fieldName, className }: FormFeedbackProps) {
  const hasFieldError = fieldName && errors?.[fieldName]?.length > 0;
  const fieldErrorMessage = hasFieldError ? errors?.[fieldName]?.[0] : "";

  const hasGlobalError = !fieldName && errors?.detail;
  const globalErrorMessage = hasGlobalError ? errors.detail : "";

  const errorMessage = fieldErrorMessage || globalErrorMessage;

  if (!errorMessage) return null;

  return (
    <Form.Control.Feedback type="invalid" className={className}>
      {errorMessage}
    </Form.Control.Feedback>
  );
}

export default FormFeedback;
