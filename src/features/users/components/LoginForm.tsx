import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../../ui/Button";

const StyledLoginForm = styled(Form)`
  padding: 1rem;
`;

function LoginForm() {
  const navigate = useNavigate();

  return (
    <StyledLoginForm>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Col>
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
