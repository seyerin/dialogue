import styled from "styled-components";
const Td = styled.td`
  width: 10vw;
  height: 10vh;
  border: 1px solid rgb(0, 0, 0);
  border-top: none;
  border-right: none;
  position: relative;
  cursor: pointer;

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
    background-color: #e0e0e0;
  }
  .angry {
    background-color: #ff0000;
  }
  .happy {
    background-color: #fffd85;
  }
  .soso {
    background-color: #a170bd;
  }
  .sick {
    background-color: #2e913b;
  }
  .sad {
    background-color: #7691fc;
  }
  .tired {
    background-color: #40436e;
  }
`;

export default Td;
