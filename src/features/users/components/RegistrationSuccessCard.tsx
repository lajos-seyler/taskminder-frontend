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
          Thank you for registering! We've sent an email with an activation link
          to your provided email address. Please check your inbox and click on
          the link to activate your account.
        </Card.Text>
      </Card.Body>
    </StyledRegistrationSuccessCard>
  );
}

export default RegistrationSuccessCard;
