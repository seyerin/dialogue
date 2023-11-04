import { useState, useEffect } from "react";
import RightSide from "./SchedulerRightSide";
import SchedulerLeftSide from "../../css/scheduler/StyleScheduler";
import LeftSide from "./SchedulerLeftSide";
function Scheduler() {
  // const [studyPlanner, setStudyPlanner] = useState(() => {
  //   if (JSON.parse(localStorage.getItem("studyPlanner")) != null) {
  //     return JSON.parse(localStorage.getItem("studyPlanner"));
  //   } else {
  // const a = [
  //   {
  //     날짜1: {
  //       studyPlan: {
  //         plan: [],
  //       },
  //       studyTime: {
  //         studyStart: [],
  //         studyEnd: [],
  //         count: "",
  //         time: "",
  //       },
  //     },
  //   },
  //   {
  //     날짜2: {
  //       studyPlan: {
  //         plan: [],
  //       },
  //       studyTime: {
  //         studyStart: [],
  //         studyEnd: [],
  //         count: "",
  //         time: "",
  //       },
  //     },
  //   },
  //   // 날짜2 ...
  // ];
  // a.map((a) => {
  // console.log(a.날짜1);
  // });

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

// 오늘의 기분, 날짜, 날씨, 일기 제목, 일기 내용

// {
//   날짜1{}
// }

// []

// {
//   너너: [
//     {
//     20231101{
//       feeling: 이미지,
//       wether: 이미지,
//       date: [],
//       diaryTitle: "",
//       diaryText: ""
//     }
//   },
//   ]
// }
