import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

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
  return (
    <StyledRegistrationForm>
      <Row>
        <Col xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Row>
        <Col xs={12} sm={6}>
          <Form.Group as={Col} className="mb-3" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group as={Col} className="mb-3" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <StyledSubmitButton type="submit">Register</StyledSubmitButton>
    </StyledRegistrationForm>
  );
}

export default RegistrationForm;