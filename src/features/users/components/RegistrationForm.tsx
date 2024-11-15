import { AxiosError } from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import ValidationErrors from "../../../interfaces/ValidationErrors";
import FormFeedback from "../../../ui/FormFeedback";
import { errorValidationState } from "../../../utils/errorValidationState";
import useRegister from "../hooks/useRegister";
import RegistrationFormInputs from "../interfaces/RegistrationFormInputs";

const StyledRegistrationForm = styled(Form)`
  padding: 1rem;
`;

const StyledSubmitButton = styled(Button)`
  margin-top: 1rem;

  color: var(--dark-blue);
  background-color: var(--light-green);
  border-color: var(--dark-blue);

  &:hover {
    color: var(--light-green);
    background-color: var(--dark-blue);
    border-color: var(--light-green);
  }
`;

function RegistrationForm() {
  const { register, handleSubmit } = useForm<RegistrationFormInputs>();

  const mutation = useRegister();

  const registrationErrors: ValidationErrors = (mutation.error as AxiosError)
    ?.response?.data as ValidationErrors;

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {},
      onError: (error) => {
        const response = (error as AxiosError).response;
        if (response?.status === 400) {
          const validationErrors = response.data as ValidationErrors;
          console.log(validationErrors);
        }
      },
    });
  };

  return (
    <StyledRegistrationForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              {...register("username")}
              {...errorValidationState(registrationErrors, "username")}
            />
            <FormFeedback errors={registrationErrors} fieldName="username" />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              {...errorValidationState(registrationErrors, "password")}
            />
            <FormFeedback errors={registrationErrors} fieldName="password" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...register("email")}
          {...errorValidationState(registrationErrors, "email")}
        />
        <FormFeedback errors={registrationErrors} fieldName="email" />
      </Form.Group>

      <Row>
        <Col xs={12} sm={6}>
          <Form.Group as={Col} className="mb-3" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              {...register("first_name")}
              {...errorValidationState(registrationErrors, "first_name")}
            />
            <FormFeedback errors={registrationErrors} fieldName="first_name" />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group as={Col} className="mb-3" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              {...register("last_name")}
              {...errorValidationState(registrationErrors, "last_name")}
            />
            <FormFeedback errors={registrationErrors} fieldName="last_name" />
          </Form.Group>
        </Col>
      </Row>

      <StyledSubmitButton type="submit">Register</StyledSubmitButton>
    </StyledRegistrationForm>
  );
}

export default RegistrationForm;
