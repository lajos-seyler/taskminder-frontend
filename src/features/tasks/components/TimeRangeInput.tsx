import { Dispatch, SetStateAction } from "react";
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

interface TimeRangeInputProps {
  setStartDate: Dispatch<SetStateAction<string>>;
  setStartTime: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
  setEndTime: Dispatch<SetStateAction<string>>;
}
export default function TimeRangeInput({
  setStartDate,
  setStartTime,
  setEndDate,
  setEndTime,
}: TimeRangeInputProps) {
  return (
    <StyledTimeRangeInput>
      <StyledDateTimeContainer>
        <Form.Label>Start&nbsp;Time</Form.Label>
        <span style={{ display: "flex", gap: "0.5rem" }}>
          <Form.Control
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Form.Control
            type="time"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </span>
      </StyledDateTimeContainer>
      <StyledDateTimeContainer>
        <Form.Label>End&nbsp;Time</Form.Label>
        <span style={{ display: "flex", gap: "0.5rem" }}>
          <Form.Control
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Form.Control
            type="time"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </span>
      </StyledDateTimeContainer>
    </StyledTimeRangeInput>
  );
}
