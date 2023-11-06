import SubjectData from "./SubjectData";
import LeftSide from "../../css/scheduler/StyleSchedulerLeftSide";
import { useEffect, useState } from "react";

function SchedulerLeftSide(props) {
  const allFocus = {};
  // const data = useRef([]);

  const [subject, setSubject] = useState([]);
  const [subjectPlan, setSubjectPlan] = useState([]);
  const [complete, setComplete] = useState([]);
  const [focusCounter, setFocusCounter] = useState(1);
  const [checkArr, setCheckArr] = useState([]);

  const plan = JSON.parse(localStorage.getItem("scheduler"));
  useEffect(() => {
    props.setScheduler((prev) => {
      let temp = { ...prev };
      temp[0].studyPlan.memo = props.memo;
      temp[0].studyPlan.subject = subject;
      temp[0].studyPlan.plan = subjectPlan;
      temp[0].studyPlan.complete = complete;
      return temp;
    });
  }, [subject, subjectPlan, complete, props.date, props.memo]);

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  console.log();

  return (
    <LeftSide className="schedulerSection">
      <form className="schedulerForm" action="">
        <div className="leftSideHeader">
          <div className="date">
            <span>날짜:</span>
            <span>{new Date().getFullYear()}.</span>
            <span>{new Date().getMonth() + 1}.</span>
            <span>{new Date().getDate()}</span>
          </div>
          <textarea
            className="text"
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
                setSubject={setSubject}
                setSubjectPlan={setSubjectPlan}
                subjectPlan={subjectPlan}
                setComplete={setComplete}
                allFocus={allFocus}
                focusCounter={focusCounter}
                setFocusCounter={setFocusCounter}
                setCheckArr={setCheckArr}
                checkArr={checkArr}
                plan={
                  JSON.parse(localStorage.getItem("scheduler"))[0].studyPlan
                    .paln
                }
              />
            ))}
          </ul>
        </div>
      </form>
    </LeftSide>
  );
}

export default SchedulerLeftSide;
