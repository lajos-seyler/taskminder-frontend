import { Dispatch, SetStateAction, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import Badge from "../../../ui/Badge";
import { toggleWeekday } from "../../../utils/date";
import { TaskInput } from "../interfaces/Task";

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

const StyledBadge = styled(Badge)`
  cursor: pointer;
`;

interface OccurrencesInputParams {
  register: UseFormRegister<TaskInput>;
  byweekday: number[];
  setByweekday: Dispatch<SetStateAction<number[]>>;
}

export default function OccurrencesInput({
  register,
  byweekday,
  setByweekday,
}: OccurrencesInputParams) {
  const [isRepeating, setIsRepeating] = useState<boolean>(false);

  const handleWeekdayClick = (weekdayNumber: number) => {
    setByweekday((prevWeekdays) => toggleWeekday(prevWeekdays, weekdayNumber));
  };

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
              <Form.Control
                type="number"
                min={1}
                {...register("rrule_params.interval")}
              />
              <Form.Select {...register("rrule_params.freq")}>
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
                  <StyledBadge
                    key={i}
                    onClick={() => handleWeekdayClick(i)}
                    bg={byweekday.includes(i) ? "info" : "primary"}
                  >
                    {day}
                  </StyledBadge>
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
                value={"never"}
                {...register("rrule_params.ends_on")}
              />
            </StyledRepeatEndsChoiceContainer>
            <StyledRepeatEndsChoiceContainer>
              <Form.Check
                type="radio"
                label="On"
                id="On"
                value={"date"}
                {...register("rrule_params.ends_on")}
              />
              <Form.Control type="date" {...register("rrule_params.until")} />
            </StyledRepeatEndsChoiceContainer>
            <StyledRepeatEndsChoiceContainer>
              <Form.Check
                type="radio"
                label="After"
                id="After"
                value={"count"}
                {...register("rrule_params.ends_on")}
              />
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  min={1}
                  {...register("rrule_params.count")}
                />
                <InputGroup.Text>occurrences</InputGroup.Text>
              </InputGroup>
            </StyledRepeatEndsChoiceContainer>
          </StyledRepeatEndsContainer>
        </Form.Group>
      )}
    </>
  );
}
