import styled from "styled-components";

const Style = styled.section`
  width: 25vw;
  margin-left: 3vw;

  .time {
    width: 100%;
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
    width: 15%;
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
    width: 250px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .timeData {
    width: 36.9px;
    height: 23px;
    border-bottom: 1px solid black;
    position: relative;
  }
  .timeData::after {
    content: "";
    width: 34px;
    height: 6px;
    display: block;
    border-right: 1px solid black;
    position: absolute;
    top: 2.5vh;
    z-index: 2;
  }
  .timeData:nth-child(6n + 0)::after {
    /* background-color: wheat; */
    display: none;
  }
  /* background-color: yellowgreen; */

  .click {
    background-color: blue;
  }
`;

export default Style;
