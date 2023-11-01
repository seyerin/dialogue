import { useEffect, useRef, useState } from "react";
import SubjectData from "./SubjectDate";
function LeftSide(props) {
  const allFocus = {};

  const [subject, setSubject] = useState([]);
  const [subjectPlan, setSubjectPlan] = useState([]);
  const [complete, setComplete] = useState([]);
  const [focusCounter, setFocusCounter] = useState(1);
  const [checkArr, setCheckArr] = useState([]);

  // console.log(props.newPlan.date);
  const plan = JSON.parse(localStorage.getItem("plan"));
  useEffect(() => {
    props.setNewPlan((prev) => {
      let temp = plan;
      // console.log(temp);
      temp.date = props.date;
      temp.memo = props.memo;
      temp.subject = subject;
      temp.subJectPlan = subjectPlan;
      temp.complete = complete;
      return temp;
    });
    // console.log(props.newPlan);
  }, [subject, subjectPlan, complete, props.date, props.memo]);

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  return (
    <div className="schedulerSection">
      <form className="schedulerForm" action="">
        <div className="leftSideHeader">
          <div className="date">
            <span>날짜:</span>
            <input
              type="text"
              onChange={(e) => {
                props.setDate((prev) => {
                  // console.log("A");
                  let temp = [...prev];
                  temp[0] = e.target.value;
                  return temp;
                });
                console.log(props.class);
              }}
            />
            .
            <input
              type="text"
              onChange={(e) => {
                props.setDate((prev) => {
                  let temp = [...prev];
                  temp[1] = e.target.value;
                  return temp;
                });
              }}
            />
            .
            <input
              type="text"
              onChange={(e) => {
                props.setDate((prev) => {
                  let temp = [...prev];
                  temp[2] = e.target.value;
                  return temp;
                });
              }}
            />
          </div>
          <textarea
            className="text"
            maxLength={20}
            onChange={(e) => {
              props.setMemo(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="studyList">
          <ul>
            {arr.map((x) => (
              <SubjectData
                key={x}
                class={x}
                setStudyInfo={props.setStudyInfo}
                newPlan={props.newPlan}
                setSubject={setSubject}
                setSubjectPlan={setSubjectPlan}
                subjectPlan={subjectPlan}
                setComplete={setComplete}
                allFocus={allFocus}
                focusCounter={focusCounter}
                setFocusCounter={setFocusCounter}
                setCheckArr={setCheckArr}
                checkArr={checkArr}
              />
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default LeftSide;
