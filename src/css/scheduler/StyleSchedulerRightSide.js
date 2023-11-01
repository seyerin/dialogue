import styled from "styled-components";

const Style = styled.section`
  width: 20vw;
  margin-left: 3vw;

  .time {
    width: 97.8%;
    height: 9%;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table {
    width: 300px;
    height: 90.5%;
    display: flex;
    justify-content: center;
  }
  .timeTitle {
    width: 20%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .timeTitle div {
    width: 100%;
    height: 23px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    text-align: center;
  }
  .timeTable {
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .timeData {
    width: 40px;
    height: 23px;
    border-bottom: 1px solid black;
    position: relative;
  }
  .timeData::after {
    content: "";
    width: 40px;
    height: 6px;
    display: block;
    border-right: 1px solid black;
    position: absolute;
    top: 2.5vh;
    z-index: 2;
  }
  .timeData:nth-child(6n + 0)::after {
    display: none;
  }
  .unClick:hover {
    background-color: gray;
  }
  .click {
    background-color: blue;
  }
`;

export default Style;
