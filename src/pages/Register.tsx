import Card from "react-bootstrap/Card";
import styled from "styled-components";

import RegistrationForm from "../features/users/components/RegistrationForm";

const StyledRegister = styled.div`
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

function Register() {
  return (
    <StyledRegister>
      <StyledCard>
        <Card.Body>
          <StyledCardTitle>Create a new account</StyledCardTitle>
          <RegistrationForm />
        </Card.Body>
      </StyledCard>
    </StyledRegister>
  );
}

export default Register;
