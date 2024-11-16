import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledRegistrationSuccessCard = styled(Card)`
  max-width: 35rem;
  background-color: var(--success);
`;

function RegistrationSuccessCard() {
  return (
    <StyledRegistrationSuccessCard>
      <Card.Body>
        <Card.Text>
          Thank you for signing up! We've sent an activation link to your email.
          Please check your inbox and follow the link to activate your account.
          If you don't see the email, remember to check your spam or junk
          folder.
        </Card.Text>
      </Card.Body>
    </StyledRegistrationSuccessCard>
  );
}

export default RegistrationSuccessCard;
