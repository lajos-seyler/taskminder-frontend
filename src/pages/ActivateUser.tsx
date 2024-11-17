import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import useActivateUser from "../features/users/hooks/useActivateUser";
import Button from "../ui/Button";

const StyledActivateUser = styled.div`
  text-align: center;
`;

const StyledSuccessCard = styled(Card)`
  background-color: var(--success);
  margin: 2rem auto;
`;

const StyledWarningCard = styled(Card)`
  background-color: var(--error);
  margin: 2rem auto;
`;

function ActivateUser() {
  const navigate = useNavigate();
  const { uuid, token } = useParams();
  const status = useActivateUser(uuid, token);

  return (
    <StyledActivateUser>
      {status === "success" && (
        <>
          <h2>Email Verification Success</h2>
          <StyledSuccessCard>
            <Card.Body>
              <Card.Text>
                Your email has been successfully verified and your account has
                been activated. You can now log in.
              </Card.Text>
            </Card.Body>
          </StyledSuccessCard>
          <Button type="primary" onClick={() => navigate("/login")}>
            Login
          </Button>
        </>
      )}
      {status === "error" && (
        <>
          <h2>Email Verification Failed</h2>
          <StyledWarningCard>
            <Card.Body>
              <Card.Text>
                Sorry, we couldn't verify your email. The verification link
                might be invalid or expired.
              </Card.Text>
            </Card.Body>
          </StyledWarningCard>
        </>
      )}
      {status === null && <p>Verifying email...</p>}
    </StyledActivateUser>
  );
}

export default ActivateUser;
