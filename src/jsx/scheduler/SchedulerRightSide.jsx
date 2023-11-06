import TimeTable from "./TimeTable";
import TimeTitle from "./TimeTitle";
import Style from "../../css/scheduler/StyleSchedulerRightSide";
import { useState, useRef, useEffect } from "react";
function SchedulerRightSide(props) {
  const data = useRef([]);

  const [time, setTime] = useState([0, 0]);
  const [studyStart, setStudyStart] = useState([]);
  const [studyEnd, setStudyEnd] = useState([]);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  // const schedule = JSON.parse(localStorage.getItem("scheduler"));
  useEffect(() => {
    props.setScheduler((prev) => {
      let temp = { ...prev };
      temp[0].studyTimeTable.start = studyStart;
      temp[0].studyTimeTable.end = studyEnd;
      temp[0].studyTimeTable.time = time;
      temp[0].studyTimeTable.count = count;
      // console.log(studyStart);
      return temp;
    });
  }, [time, setStudyEnd, setStudyStart, count]);

  let arr = [];
  for (let i = 0; i < 144; i++) {
    arr.push(i);
  }
  const timeArr = [
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
  ];
  let counter = 0;
  let counter2 = 0;

  const painting = () => {
    let start = JSON.parse(localStorage.getItem("scheduler"))[0].studyTimeTable
      .start;
    let end = JSON.parse(localStorage.getItem("scheduler"))[0].studyTimeTable
      .end;
    let countArr = JSON.parse(localStorage.getItem("scheduler"))[0]
      .studyTimeTable.count;

    for (let j = 0; j < countArr; j++) {
      for (let i = start[j]; i <= end[j]; i++) {
        data[i].className = "timeData click";
      }
    }
    timeFunc();
  };

  const timeFunc = () => {
    for (let i = 0; i < 144; i++) {
      if (data[i].className == "timeData click") {
        counter2++;
      }
    }
    const hour = Math.floor((counter2 * 10) / 60);
    const minute = (counter2 * 10) % 60;

    setTime((prev) => {
      let temp = [hour, minute];
      return temp;
    });
  };

  return (
    <>
      <Style className="rightSide">
        <div className="time">
          <p>
            <span>{time[0]}</span>시간<span>{time[1]}</span>분
          </p>
        </div>
        <div className="table">
          <div className="timeTitle">
            {timeArr.map((x, y) => (
              <TimeTitle key={y} time={x} />
            ))}
          </div>
          <div
            className="timeTable"
            onMouseMove={painting}
            onMouseEnter={timeFunc}
          >
            {arr.map((x) => (
              <TimeTable
                time={x % 7 == 0 || x == 0 ? timeArr[counter++] : ""}
                key={x}
                x={x}
                data={data}
                setCount={setCount}
                setStudyEnd={setStudyEnd}
                setStudyStart={setStudyStart}
                setTime={setTime}
                timeFunc={timeFunc}
                studyStart={studyStart}
                setFlag={setFlag}
              />
            ))}
          </div>
        </div>
      </Style>
    </>
  );
}

export default SchedulerRightSide;
