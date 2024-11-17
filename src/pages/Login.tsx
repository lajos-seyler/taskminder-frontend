import { Card } from "react-bootstrap";
import styled from "styled-components";

import LoginForm from "../features/users/components/LoginForm";

const StyledLogin = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <StyledLogin>
      <StyledCard>
        <Card.Body>
          <StyledCardTitle>Login</StyledCardTitle>
          <LoginForm />
        </Card.Body>
      </StyledCard>
    </StyledLogin>
  );
}

export default Login;
