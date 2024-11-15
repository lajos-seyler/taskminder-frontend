import Card from "react-bootstrap/Card";
import styled from "styled-components";

import RegistrationForm from "../features/users/components/RegistrationForm";

const StyledCard = styled(Card)`
  color: var(--dark-blue);
  background-color: var(--light-cyan);
  margin: 0.5rem;
`;

const StyledCardTitle = styled(Card.Title)`
  padding: 1rem 1rem 0;
`;

function Register() {
  return (
    <>
      <StyledCard>
        <Card.Body>
          <StyledCardTitle>Create a new account</StyledCardTitle>
          <Card.Text>
            <RegistrationForm />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </>
  );
}

export default Register;