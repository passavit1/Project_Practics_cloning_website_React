import styled from "styled-components";
import profile from "./Image/Profile.jpg";

const StyledContainer = styled.div`
  height: 100vh;
  color: white;
  box-sizing: border-box;

  .header {
    height: 5%;
    outline: 0.5px red solid;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .menu {
      width: 10%;
      height: 100%;
    }
  }

  .main {
    height: 85%;
    outline: 0.5px red solid;
  }

  .country {
    height: 5%;
    outline: 0.5px red solid;
  }

  .footer {
    height: 5%;
    outline: 0.5px red solid;
  }
`;

function App() {
  return (
    <StyledContainer>
      <div className="header">
        <div>Gmail</div>
        <div>Images</div>
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -11 180 100"
            fill="rgb(226,226,227)"
          >
            <circle cx="7" cy="7" r="1.8"></circle>
            <circle cx="13" cy="7" r="1.8"></circle>
            <circle cx="19" cy="7" r="1.8"></circle>
            <circle cx="7" cy="13" r="1.8"></circle>
            <circle cx="13" cy="13" r="1.8"></circle>
            <circle cx="19" cy="13" r="1.8"></circle>
            <circle cx="7" cy="19" r="1.8"></circle>
            <circle cx="13" cy="19" r="1.8"></circle>
            <circle cx="19" cy="19" r="1.8"></circle>
          </svg>
          <img src={profile} alt="" />
        </div>
        <div></div>
      </div>
      <div className="main">Main</div>
      <div className="country">Country</div>
      <div className="footer">Footer</div>
    </StyledContainer>
  );
}

export default App;
