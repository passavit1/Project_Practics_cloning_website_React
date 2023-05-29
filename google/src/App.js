import styled from "styled-components";

const StyledContainer = styled.div`
  color: red;
`;

function App() {
  return (
    <StyledContainer>
      <div className="header">Header</div>
      <div className="main">Main</div>
      <div>Country</div>
      <div>Footer</div>
    </StyledContainer>
  );
}

export default App;
