import StyleSubjectData from "../../css/scheduler/StyleSubjectData";
import { useRef } from "react";
function SubjectData(props) {
  let counter = 0;
  let focus = useRef([]);

  const addFunc = (e) => {
    if (e.key == "Enter") {
      if (e.target.className == "subject") {
        props.setSubject((prev) => {
          let temp = [...prev];
          // if()
          temp.push(focus.current[0].value);
          // console.log(temp);
          return temp;
        });
      } else {
        props.setSubjectPlan((prev) => {
          let temp = [...prev];
          temp.push(focus.current[1].value);
          // console.log(temp);
          return temp;
        });
      }
      if (props.focusCounter <= 21) {
        props.allFocus[props.focusCounter].children[0].children[ // children 괜찮나?
          `${e.target.className == "subject" ? 1 : 0}`
        ]
          .focus(); //
      }
      if (e.target.className == "subject") {
        props.setFocusCounter((prev) => prev + 1);
      }
    }
  };
  let arr = JSON.parse(localStorage.getItem("scheduler"))[0].studyPlan.plan;
  // console.log(props.plan);
  arr.map((i) => {
    console.log(i);
  });
  return (
    <StyleSubjectData ref={(ref) => (props.allFocus[props.class] = ref)}>
      <div>
        <input
          type="text"
          className="subject"
          maxLength={2}
          ref={(el) => (focus.current[0] = el)}
          onKeyPress={(e) => {
            // console.log()
            console.log(focus.current);
            addFunc(e);
          }}
        />
        <input
          type="text"
          maxLength={25}
          ref={(el) => (focus.current[1] = el)}
          onKeyPress={(e) => {
            addFunc(e);
          }}
          onClick={(e) => {
            props.setFocusCounter(props.class);
          }}
          // value={() => {

          // }}
        />
      </div>
      <input
        type="checkbox"
        className={"class" + props.class}
        onChange={(e) => {
          props.setComplete((prev) => {
            let temp = [...prev];
            e.target.checked ? temp.push(props.class) : temp.push(0);
            return temp;
          });
        }}
        disabled={props.subjectPlan.length >= props.class ? false : true}
      />
    </StyleSubjectData>
  );
}

export default SubjectData;
