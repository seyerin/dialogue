import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    width: 60%;
    height: 85%;
  }
  thead {
    width: 100%;
    height: 10%;
  }
  th {
    width: 10%;
    height: 100%;
  }
  th::after {
    content: "";
    width: 80%;
    height: 1%;
    border-bottom: 1px solid black;
    display: block;
    position: relative;
    top: 2vh;
    left: 1vw;
  }
  tbody {
    width: 100%;
    height: 90%;
  }
  tbody tr {
    width: 100%;
    height: 15%;
  }
  td {
    width: 14%;
    height: 15%;
    border: 1px solid rgb(0, 0, 0);
    border-top: none;
    border-right: none;
  }
  tr td:last-child {
    border-right: 1px solid black;
  }
  td span {
    margin-left: 0.5vw;
    display: block;
    position: relative;
    bottom: 3.5vh;
  }
  .today {
    font-weight: 900;
    text-decoration: underline;
  }
  .sun {
    color: red;
  }
  .set {
    color: blue;
  }
`;

export default Main;
