// import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import Style from "../css/StyleSchedulerRightSide";
import Time from "./TableDate";
// import Table from "./TableDate";

import Table from "./AAA";

function RightSide() {
  const [studyStart, setStudyStart] = useState(
    () => JSON.parse(localStorage.getItem("studyStart")) || []
  );
  const [studyEnd, setStudyEnd] = useState(
    () => JSON.parse(localStorage.getItem("studyEnd")) || []
  );
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("count")) || 0
  );
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState([]);
  const [target, setTarget] = useState([]);

  useEffect(() => {
    localStorage.setItem("studyStart", JSON.stringify(studyStart));
    localStorage.setItem("studyEnd", JSON.stringify(studyEnd));
    localStorage.setItem("count", count);
  }, [studyStart, studyEnd, count]);

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
  return (
    <Style className="rightSide">
      <div className="time">
        <p>
          <span>{time[0]}</span>시간<span>{time[1]}</span>분
        </p>
      </div>
      <div className="table">
        <div className="timeTitle">
          {timeArr.map((x, y) => (
            <Time key={y} time={y} />
          ))}
        </div>
        <div
          className="timeTable"
          onMouseDown={(e) => {
            setTarget(() => {
              let temp = [];
              temp = [e.target];
              console.log(temp);
              return temp;
            });
          }}
        >
          {arr.map((x) => (
            <Table
              time={x % 7 == 0 || x == 0 ? timeArr[counter++] : ""}
              key={x}
              x={x}
              setStart={setStudyStart}
              setEnd={setStudyEnd}
              setCount={setCount}
              flag={flag}
              setFlag={setFlag}
              setTime={setTime}
              // target={target}
            />
          ))}
        </div>
      </div>
    </Style>
  );
}

export default RightSide;
