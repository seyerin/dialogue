import styled from "styled-components";

const StyleDiaryHeader = styled.section`
  margin-top: 3vh;
  width: 55%;
  height: 8%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  input {
    margin: 0;
    width: 1.5vw;
    height: 3vh;
    border: none;
    font-size: 17px;
    font-weight: 300;
    outline: none;
    background-color: rgba(240, 248, 255, 0);
  }
  input:first-child {
    margin-left: 0.5vw;
    width: 3vw;
  }
`;

export default StyleDiaryHeader;
