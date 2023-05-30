import styled from "styled-components";
import profile from "./Image/Profile.jpg";
import logoWhite from "./Image/LogoWhite.png";

const StyledContainer = styled.div`
  height: 100vh;
  color: white;
  box-sizing: border-box;
  padding: 6px;

  .header {
    height: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div:first-child,
    div:nth-child(2) {
      padding-left: 15px;
    }

    .menu {
      height: 100%;
      padding-right: 0.5%;
      padding-bottom: 0.2%;
      margin-left: 0.68%;

      svg {
        height: 100%;
      }
    }

    .profile {
      margin-right: 0.65%;
      padding-top: 0.505%;

      img {
        border-radius: 50%;
      }
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
            viewBox="-12 -11.8 47 47"
            fill="rgb(226,226,227)"
          >
            <circle cx="7" cy="7" r="1.85"></circle>
            <circle cx="13" cy="7" r="1.85"></circle>
            <circle cx="19" cy="7" r="1.85"></circle>
            <circle cx="7" cy="13" r="1.85"></circle>
            <circle cx="13" cy="13" r="1.85"></circle>
            <circle cx="19" cy="13" r="1.85"></circle>
            <circle cx="7" cy="19" r="1.85"></circle>
            <circle cx="13" cy="19" r="1.85"></circle>
            <circle cx="19" cy="19" r="1.85"></circle>
          </svg>
        </div>
        <div className="profile">
          <img src={profile} alt="" />
        </div>

        <div></div>
      </div>
      <div className="main">
        <img src={logoWhite} alt="" />
      </div>
      <div className="country">Country</div>
      <div className="footer">Footer</div>
    </StyledContainer>
  );
}

export default App;
