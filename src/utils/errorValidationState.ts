import ValidationErrors from "../interfaces/ValidationErrors";

export const errorValidationState: (
  errors: ValidationErrors,
  fieldName: string,
) => {
  isValid?: boolean;
  isInvalid?: boolean;
} = (errors, fieldName) => {
  if (!errors) return {};
  const hasError = errors?.[fieldName]?.length > 0;

  if (!hasError) return {};

  return { isInvalid: true, isValid: false };
};
