import { PropsWithChildren } from "react";
import { Badge as DefaultBadge } from "react-bootstrap";
import styled from "styled-components";

const PrimaryBadge = styled(DefaultBadge)`
  color: var(--light-green) !important;
  background-color: var(--dark-blue) !important;
`;

const SecondaryBadge = styled(DefaultBadge)`
  color: var(--dark-blue) !important;
  background-color: var(--light-green) !important;
  -webkit-box-shadow: inset 0px 0px 0px 1px var(--dark-blue);
  -moz-box-shadow: inset 0px 0px 0px 1px var(--dark-blue);
  box-shadow: inset 0px 0px 0px 1px var(--dark-blue);
`;

const SuccessBadge = styled(DefaultBadge)`
  color: var(--dark-blue) !important;
  background-color: var(--success) !important;
`;

const WarningBadge = styled(DefaultBadge)`
  color: var(--dark-blue) !important;
  background-color: var(--warning) !important;
`;

const ErrorBadge = styled(DefaultBadge)`
  color: var(--light-green) !important;
  background-color: var(--error) !important;
`;

const InfoBadge = styled(DefaultBadge)`
  color: var(--dark-blue) !important;
  background-color: var(--info) !important;
`;

interface BadgeProps {
  bg?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
}

function Badge({
  bg = "primary",
  children,
  ...rest
}: PropsWithChildren<BadgeProps>) {
  let StyledBadge;

  switch (bg) {
    case "secondary":
      StyledBadge = SecondaryBadge;
      break;
    case "success":
      StyledBadge = SuccessBadge;
      break;
    case "warning":
      StyledBadge = WarningBadge;
      break;
    case "error":
      StyledBadge = ErrorBadge;
      break;
    case "info":
      StyledBadge = InfoBadge;
      break;
    default:
      StyledBadge = PrimaryBadge;
  }

  return <StyledBadge {...rest}>{children}</StyledBadge>;
}

export default Badge;
