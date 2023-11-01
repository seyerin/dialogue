import { useState, useEffect } from "react";
import RightSide from "./SchedulerRightSide";
import SchedulerLeftSide from "../../css/scheduler/StyleScheduler";
import LeftSide from "./SchedulerLeftSide";
function Scheduler() {
  // const [studyPlanner, setStudyPlanner] = useState(() => {
  //   if (JSON.parse(localStorage.getItem("studyPlanner")) != null) {
  //     return JSON.parse(localStorage.getItem("studyPlanner"));
  //   } else {
  //     return {
  //       날짜1: {
  //         studyPlan: {
  //           plan: SON.parse(localStorage.getItem("plan")),
  //         },
  //         studyTime: {
  //           studyStart: JSON.parse(localStorage.getItem("studyStart")),
  //           studyEnd: JSON.parse(localStorage.getItem("studyEnd")),
  //           count: localStorage.getItem("studyStart"),
  //           time: "",
  //         },
  //       },
  //       날짜2 ...
  //     };
  //   }
  // }); //--> 나중에 여기에 저장해서 정리 아마 날짜별로 예상 날짜는 date? 아님 입력 받은걸 토대로?

  const [date, setDate] = useState([]);
  const [memo, setMemo] = useState("");

  const [newPlan, setNewPlan] = useState(() => {
    if (JSON.parse(localStorage.getItem("plan")) == null) {
      return {
        date: "",
        memo: "",
        subject: [],
        subJectPlan: [],
        complete: [],
      };
    } else {
      return JSON.parse(localStorage.getItem("plan"));
    }
  });

  if (JSON.parse(localStorage.getItem("plan")) == null) {
    localStorage.setItem("plan", JSON.stringify(newPlan));
  }

  const [studyInfo, setStudyInfo] = useState(
    () =>
      JSON.parse(localStorage.getItem("studyPlan")) || [
        JSON.parse(localStorage.getItem("plan")),
      ]
  );
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState([0, 0]);

  const [studyStart, setStudyStart] = useState(
    () => JSON.parse(localStorage.getItem("studyStart")) || []
  );
  const [studyEnd, setStudyEnd] = useState(
    () => JSON.parse(localStorage.getItem("studyEnd")) || []
  );
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("studyStart", JSON.stringify(studyStart));
    localStorage.setItem("studyEnd", JSON.stringify(studyEnd));

    localStorage.setItem("count", count);

    localStorage.setItem("plan", JSON.stringify(newPlan));

    if (JSON.parse(localStorage.getItem("plan")) != null) {
      localStorage.setItem("studyPlan", JSON.stringify(newPlan));
    }
  }, [studyStart, studyEnd, count, studyInfo, newPlan]);

  return (
    <>
      <SchedulerLeftSide>
        <LeftSide
          newPlan={newPlan}
          setNewPlan={setNewPlan}
          setStudyInfo={setStudyInfo}
          setDate={setDate}
          date={date}
          setMemo={setMemo}
          memo={memo}
        />
        <RightSide
          newPlan={newPlan}
          setStart={setStudyStart}
          setEnd={setStudyEnd}
          setCount={setCount}
          flag={flag}
          setFlag={setFlag}
          setTime={setTime}
          count={count}
          time={time}
        />
      </SchedulerLeftSide>
    </>
  );
}

export default Scheduler;
