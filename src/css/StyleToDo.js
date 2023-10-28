import styled from "styled-components";

const StyleToDo = styled.main`
  width: 100%;
  height: 90%;
  display: flex;

  .toDoSection {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: wheat; */
  }
  .toDoForm {
    width: 60%;
    height: 75%;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .toDoInput {
    margin-top: 1vh;
    width: 21vw;
    height: 5.5vh;
    border: 2px dotted rgb(133, 141, 143);
    color: black;
    font-size: 15px;
    text-align: center;
    outline: none;
    /* visibility: hidden; */
  }
  .toDoInput::placeholder {
    color: rgb(133, 141, 143);
  }
  .toDoInput:focus {
    border: 2px solid black;
    color: black;
  }
  .todoBox {
    width: 100%;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .todoBox::-webkit-scrollbar {
    width: 6px;
  }
  .todoBox::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }
`;

export default StyleToDo;
