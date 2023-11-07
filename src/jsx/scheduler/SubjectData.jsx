import StyleSubjectData from "../../css/scheduler/StyleSubjectData";
import { useEffect, useRef } from "react";
function SubjectData(props) {
  let counter = 0;
  let focus = useRef([]);

  const addFunc = (e) => {
    if (e.key == "Enter") {
      if (e.target.className == "subject") {
        props.setSubject((prev) => {
          let temp = [...prev];
          // console.log(props.class);
          // if()
          temp[props.class - 1] = focus.current[0].value;
          // console.log(temp);
          return temp;
        });
      } else {
        props.setSubjectPlan((prev) => {
          let temp = [...prev];
          temp[props.class - 1] = focus.current[1].value;
          // console.log(temp);
          return temp;
        });
      }
      if (props.focusCounter <= 21) {
        props.allFocus[props.focusCounter].children[0].children[ // children 괜찮나?
          `${e.target.className == "subject" ? 1 : 0}`
        ]
          .focus(); //
        // console.log(props.allFocus[props.focusCounter], props.focusCounter);
      }
      if (e.target.className == "subject") {
        props.setFocusCounter((prev) => prev + 1);
      }
    }
  };
  // console.log(props.checkRef);
  return (
    <StyleSubjectData ref={(ref) => (props.allFocus[props.class] = ref)}>
      <div>
        <input
          type="text"
          className="subject"
          maxLength={2}
          ref={(el) => (focus.current[0] = el)}
          onKeyPress={(e) => {
            addFunc(e);
          }}
          defaultValue={props.subjectRef != undefined ? props.subjectRef : ""}
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
          defaultValue={props.planRef != undefined ? props.planRef : ""}
        />
      </div>
      <input
        type="checkbox"
        className={"class" + props.class}
        onChange={(e) => {
          props.setComplete((prev) => {
            let temp = [...prev];
            e.target.checked
              ? (temp[props.class] = true)
              : (temp[props.class] = false);
            return temp;
          });
        }}
        disabled={props.subjectPlan.length >= props.class ? false : true}
        defaultChecked={props.checkRef != undefined ? props.checkRef : ""}
      />
    </StyleSubjectData>
  );
}

export default SubjectData;
