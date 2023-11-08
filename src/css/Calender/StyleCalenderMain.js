import styled from "styled-components";
const Td = styled.td`
  width: 10vw;
  height: 10vh;
  border: 1px solid rgb(0, 0, 0);
  border-top: none;
  border-right: none;
  position: relative;

  .calenderData {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
  }
  .diaryInfo {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .feelingColor {
    width: 85%;
    height: 25%;
  }
  .diaryTitle {
    width: 85%;
    height: 25%;
  }

  .angry,
  .tired,
  .soso,
  .sick,
  .sad,
  .happy,
  .title {
    border: 1px solid black;
  }
  .title {
    background-color: gray;
  }
  .angry {
    background-color: red;
  }
  .happy {
    background-color: yellow;
  }
  .soso {
    background-color: gray;
  }
  .sick {
    background-color: green;
  }
  .sad {
    background-color: blue;
  }
  .tired {
    background-color: dodgerblue;
  }
`;

export default Td;
