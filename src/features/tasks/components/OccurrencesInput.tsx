import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

import Badge from "../../../ui/Badge";

const StyledIntervalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const StyledFormCheck = styled(Form.Check)`
  margin-bottom: 0;
  display: inline-block;
`;

const StyledRepeatOnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const StyledRepeatOnBadgesContainer = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

const StyledRepeatEndsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.25rem;
`;

const StyledRepeatEndsChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export default function OccurrencesInput() {
  const [isRepeating, setIsRepeating] = useState<boolean>(false);

  return (
    <>
      <Form.Group className="mb-3" controlId="occurrences">
        <StyledIntervalContainer>
          <StyledFormCheck
            type="checkbox"
            label="Repeat"
            name="interval"
            onChange={(e) => setIsRepeating(e.target.checked)}
          />
          {isRepeating && (
            <>
              <span>every</span>
              <Form.Control type="number" min={1} />
              <Form.Select>
                <option value="DAILY">day</option>
                <option value="WEEKLY">week</option>
                <option value="MONTHLY">month</option>
                <option value="YEARLY">year</option>
              </Form.Select>
            </>
          )}
        </StyledIntervalContainer>
      </Form.Group>
      <Form.Group className="mb-3" controlId="repeatsOn">
        {isRepeating && (
          <>
            <StyledRepeatOnContainer>
              <span>Repeat&nbsp;on</span>
              <StyledRepeatOnBadgesContainer>
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <Badge key={i}>{day}</Badge>
                ))}
              </StyledRepeatOnBadgesContainer>
            </StyledRepeatOnContainer>
          </>
        )}
      </Form.Group>
      {isRepeating && (
        <Form.Group className="mb-3" controlId="endsOn">
          <StyledRepeatEndsContainer>
            <span>Ends on</span>
            <StyledRepeatEndsChoiceContainer>
              <Form.Check
                type="radio"
                label="Never"
                id="Never"
                name="repeatsOn"
              />
            </StyledRepeatEndsChoiceContainer>
            <StyledRepeatEndsChoiceContainer>
              <Form.Check type="radio" label="On" id="On" name="repeatsOn" />
              <Form.Control type="date" />
            </StyledRepeatEndsChoiceContainer>
            <StyledRepeatEndsChoiceContainer>
              <Form.Check
                type="radio"
                label="After"
                id="After"
                name="repeatsOn"
              />
              <InputGroup className="mb-3">
                <Form.Control type="number" min={1} />
                <InputGroup.Text>occurrences</InputGroup.Text>
              </InputGroup>
            </StyledRepeatEndsChoiceContainer>
          </StyledRepeatEndsContainer>
        </Form.Group>
      )}
    </>
  );
}
