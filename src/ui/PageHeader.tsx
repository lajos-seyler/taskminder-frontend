import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledPageHeader = styled.h1`
  background-color: white;
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  font-size: 2rem;
`;

function PageHeader({ children }: PropsWithChildren) {
  return <StyledPageHeader>{children}</StyledPageHeader>;
}

export default PageHeader;
