import StyleSubjectData from "../css/StyleSubjectData";
function SubjectData(props) {
  return (
    <StyleSubjectData>
      <div>
        <input type="text" className="subject" maxLength={2} />
        <input type="text" maxLength={23} />
      </div>
      <input type="checkbox" className={"class" + props.class} />
    </StyleSubjectData>
  );
}
export default SubjectData;
