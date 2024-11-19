import styled from "styled-components";

const StyledPageNotFound = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
