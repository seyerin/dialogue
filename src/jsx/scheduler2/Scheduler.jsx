import { useState, useEffect } from "react";
import RightSide from "./SchedulerRightSide";
import SchedulerLeftSide from "../../css/scheduler/StyleScheduler";
import LeftSide from "./SchedulerLeftSide";
function Scheduler() {
  const [date, setDate] = useState([]);
  const [memo, setMemo] = useState("");

  const [newPlan, setNewPlan] = useState(() => {
    if (JSON.parse(localStorage.getItem("plan")) == null) {
      return {
        // date: "",
        studyPlan: {
          memo: "",
          subject: [],
          subJectPlan: [],
          complete: [],
        },
      };
    } else {
      return JSON.parse(localStorage.getItem("plan"));
    }
  });

  // if (JSON.parse(localStorage.getItem("plan")) == null) {
  //   localStorage.setItem("plan", JSON.stringify(newPlan));
  // }

  const [scheduler, setScheduler] = useState(() => [
    {
      day1: {
        studyPlan: {
          subject: [],
          plan: [],
          complete: [],
          memo: "",
        },
        studyTimeTable: {
          start: [],
          end: [],
          count: 0,
          time: [],
        },
        toDo: {
          toDoText: [],
          toDoComplete: [],
        },
      },
    },
  ]);

  // useEffect(() => {
  // localStorage.setItem("studyStart", JSON.stringify(studyStart));
  // localStorage.setItem("studyEnd", JSON.stringify(studyEnd));

  // localStorage.setItem("count", count);

  // localStorage.setItem("scheduler", )

  // localStorage.setItem("plan", JSON.stringify(newPlan));

  // if (JSON.parse(localStorage.getItem("plan")) != null) {
  //   localStorage.setItem("studyPlan", JSON.stringify(newPlan));
  // }
  // }, [studyStart, studyEnd, count, studyInfo, newPlan]);

  return (
    <>
      <SchedulerLeftSide>
        <LeftSide
        // newPlan={newPlan}
        // setNewPlan={setNewPlan}
        // setStudyInfo={setStudyInfo}
        // setDate={setDate}
        // date={date}
        // setMemo={setMemo}
        // memo={memo}
        />
        <RightSide
        // newPlan={newPlan}
        // setStart={setStudyStart}
        // setEnd={setStudyEnd}
        // setCount={setCount}
        // flag={flag}
        // setFlag={setFlag}
        // setTime={setTime}
        // count={count}
        // time={time}
        />
      </SchedulerLeftSide>
    </>
  );
}

export default Scheduler;
