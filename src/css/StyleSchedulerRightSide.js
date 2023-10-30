import styled from "styled-components";

// const RightSide = styled.
const Style = styled.section`
  margin-left: 3vw;

  .time {
    width: 100%;
    height: 9%;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .timeTable {
    margin-top: 0.4vh;
    position: relative;
    /* z-index: 3; */
    /* background-color: yellowgreen; */
  }
  .input {
    margin-top: 0.5vh;
    width: 85%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* top: 0; */
    left: 2.5vw;
    /* z-index: 1; */
  }
  .click {
    background-color: blue;
  }
`;

export default Style;
