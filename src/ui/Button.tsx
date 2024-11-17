import { PropsWithChildren } from "react";
import { Button as DefaultButton } from "react-bootstrap";
import styled from "styled-components";

const BaseButton = styled(DefaultButton)`
  &:hover {
    color: var(--dark-blue);
    background-color: var(--light-green);
    border-color: var(--dark-blue);
  }
`;

const PrimaryButton = styled(BaseButton)`
  color: var(--light-green);
  background-color: var(--dark-blue);
  border-color: var(--light-green);
`;

const SecondaryButton = styled(BaseButton)`
  color: var(--dark-blue);
  background-color: var(--light-green);
  border-color: var(--dark-blue);

  &:hover {
    color: var(--light-green);
    background-color: var(--dark-blue);
    border-color: var(--light-green);
  }
`;

const SuccessButton = styled(BaseButton)`
  color: var(--dark-blue);
  background-color: var(--success);
  border-color: var(--dark-blue);
`;

const WarningButton = styled(BaseButton)`
  color: var(--dark-blue);
  background-color: var(--warning);
  border-color: var(--dark-blue);
`;

const ErrorButton = styled(BaseButton)`
  color: var(--light-green);
  background-color: var(--error);
  border-color: var(--dark-blue);
`;

const InfoButton = styled(BaseButton)`
  color: var(--dark-blue);
  background-color: var(--info);
  border-color: var(--dark-blue);
`;

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  onClick?: () => void;
}

function Button({
  type = "button",
  variant = "primary",
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  let StyledButton;

  switch (variant) {
    case "secondary":
      StyledButton = SecondaryButton;
      break;
    case "success":
      StyledButton = SuccessButton;
      break;
    case "warning":
      StyledButton = WarningButton;
      break;
    case "error":
      StyledButton = ErrorButton;
      break;
    case "info":
      StyledButton = InfoButton;
      break;
    default:
      StyledButton = PrimaryButton;
  }

  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
