import { AxiosError } from "axios";
import { Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ValidationErrors from "../../../interfaces/ValidationErrors";
import Button from "../../../ui/Button";
import FormFeedback from "../../../ui/FormFeedback";
import { errorValidationState } from "../../../utils/errorValidationState";
import useAuthStore from "../hooks/useAuthStore";
import useLogin from "../hooks/useLogin";
import LoginFormInputs from "../interfaces/LoginFormInputs";

const StyledLoginForm = styled(Form)`
  padding: 1rem;
`;

const StyledFormFeedback = styled(FormFeedback)`
  display: block;
  margin-bottom: 1rem;
`;

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const { setToken } = useAuthStore();

  const navigate = useNavigate();
  const mutation = useLogin();

  const loginErrors: ValidationErrors = (mutation.error as AxiosError)?.response
    ?.data as ValidationErrors;

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    mutation.mutate(data, {
      onSuccess: (responseData) => {
        setToken(responseData.access);
      },
    });
  };

  return (
    <StyledLoginForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              {...errorValidationState(loginErrors, "email")}
            />
            <FormFeedback errors={loginErrors} fieldName="email" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              {...errorValidationState(loginErrors, "password")}
            />
            <FormFeedback errors={loginErrors} fieldName="password" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <StyledFormFeedback errors={loginErrors} />
      </Row>

      <Button type="submit" variant="primary">
        Login
      </Button>
      <hr />
      <Button
        type="button"
        variant="secondary"
        onClick={() => navigate("/register")}
      >
        Signup
      </Button>
    </StyledLoginForm>
  );
}

export default LoginForm;
