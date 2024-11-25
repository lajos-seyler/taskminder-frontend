import { Form } from "react-bootstrap";
import styled from "styled-components";

const StyledTimeRangeInput = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 1rem 0;
`;

const StyledDateTimeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default function TimeRangeInput() {
  return (
    <StyledTimeRangeInput>
      <StyledDateTimeContainer>
        <Form.Label>Start&nbsp;Time</Form.Label>
        <span style={{ display: "flex", gap: "0.5rem" }}>
          <Form.Control type="date" />
          <Form.Control type="time" />
        </span>
      </StyledDateTimeContainer>
      <StyledDateTimeContainer>
        <Form.Label>End&nbsp;Time</Form.Label>
        <span style={{ display: "flex", gap: "0.5rem" }}>
          <Form.Control type="date" />
          <Form.Control type="time" />
        </span>
      </StyledDateTimeContainer>
    </StyledTimeRangeInput>
  );
}
