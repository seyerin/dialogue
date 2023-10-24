import styled from "styled-components";

const StyleDiary = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .diary {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .diary p {
    width: 80%;
    height: 8%;
    display: flex;
    align-items: center;
  }
  .diary p input {
    margin: 0 0 0 1vw;
    width: 90%;
    height: 3vh;
    font-size: 15px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: rgba(240, 248, 255, 0);
  }
  textarea {
    margin-top: 1vh;
    padding: 1vw 1vw 1vw 1vw;
    width: 77%;
    height: 80%;
    border: 1px solid black;
    font-size: 15px;
    resize: none;
    outline: none;
  }
`;

export default StyleDiary;
