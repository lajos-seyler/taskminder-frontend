import { Card } from "react-bootstrap";
import styled from "styled-components";

import LoginForm from "../features/users/components/LoginForm";

const StyledCard = styled(Card)`
  text-align: center;
  color: var(--dark-blue);
  background-color: var(--light-cyan);
  margin: 0.5rem;
`;

const StyledCardTitle = styled(Card.Title)`
  padding: 1rem 1rem 0;
`;

function Login() {
  return (
    <>
      <StyledCard>
        <Card.Body>
          <StyledCardTitle>Login</StyledCardTitle>
          <LoginForm />
        </Card.Body>
      </StyledCard>
    </>
  );
}

export default Login;
