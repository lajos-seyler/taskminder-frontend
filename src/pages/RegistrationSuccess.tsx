import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import RegistrationSuccessCard from "../features/users/components/RegistrationSuccessCard";

const StyledRegistrationSuccess = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 2rem 0;
`;

const StyledH2 = styled.h2`
  margin: 2rem auto;
`;

const StyledButton = styled(Button)`
  margin: 2rem auto;

  color: var(--light-green);
  background-color: var(--dark-blue);
  border-color: var(--light-green);

  &:hover {
    color: var(--dark-blue);
    background-color: var(--light-green);
    border-color: var(--dark-blue);
  }
`;

function RegistrationSuccess() {
  const navigate = useNavigate();

  return (
    <StyledRegistrationSuccess>
      <StyledH2>Registration Success</StyledH2>
      <RegistrationSuccessCard />
      <StyledButton onClick={() => navigate("/login")}>Login</StyledButton>
    </StyledRegistrationSuccess>
  );
}

export default RegistrationSuccess;
