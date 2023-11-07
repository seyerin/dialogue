import { useState } from "react";
import StyleDiaryHeader from "../../css/diary/StyleDiaryHeader";
// import happy from "../../img/feeling/happy.png";
import Feeling from "./Feeling";
import Whether from "./Whether";

function DiaryHeader() {
  const [feelingRemove, setFeelingRemove] = useState(true);
  const [whetherRemove, setWhetherRemove] = useState(true);
  const [feeling, setFeeling] = useState("img/feeling/happy.png");
  const [whether, setWhether] = useState("img/whether/sun.png");

  const changeFeeling = (e) => {
    setFeeling(e.target.src);
  };

  const changeWhether = (e) => {
    setWhether(e.target.src);
  };

  const feelingArr = ["happy", "angry", "sad", "soso", "sick", "tired"];
  const whetherArr = ["sun", "cloud", "rain", "snow"];
  const nowDate = new Date();
  return (
    <StyleDiaryHeader className="inpo">
      <div className="feelingBox">
        <div className="curruntFeeling">
          <p className="todayFeeling">오늘의 기분 :</p>
          <img
            src={feeling}
            alt=""
            onClick={() => {
              setFeelingRemove((prev) => !prev);
            }}
          />
        </div>
        <div className={`${feelingRemove ? "remove" : "feeling"}`}>
          {feelingArr.map((x, y) => (
            <Feeling feel={x} key={y} changeFeeling={changeFeeling} />
          ))}
        </div>
      </div>
      <p>
        날짜: <span>{nowDate.getFullYear()}</span>.
        <span>{nowDate.getMonth() + 1}</span>.<span>{nowDate.getDate()}</span>
      </p>
      <div className="whetherBox">
        <div className="curruntWhether">
          <p>날씨 : </p>
          <img
            src={whether}
            alt=""
            onClick={() => {
              setWhetherRemove((prev) => !prev);
            }}
          />
        </div>
        <div className={`${whetherRemove ? "remove" : "whether"}`}>
          {whetherArr.map((x, y) => (
            <Whether whether={x} key={y} changeWhether={changeWhether} />
          ))}
        </div>
      </div>
    </StyleDiaryHeader>
  );
}

export default DiaryHeader;
