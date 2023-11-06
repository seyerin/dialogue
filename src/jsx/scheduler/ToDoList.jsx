import StyleToDoForm from "../../css/scheduler/StyleToDoForm";
function ToDoList() {
  return (
    <StyleToDoForm>
      <input type="checkbox" className="check" />
      <p></p>
      <span className="delete"></span>
    </StyleToDoForm>
  );
}
export default ToDoList;
