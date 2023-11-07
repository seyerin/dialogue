import { useState } from "react";
import StyleDiaryHeader from "../../css/diary/StyleDiaryHeader";
// import happy from "../../img/feeling/happy.png";
import Feeling from "./Feeling";
import Weather from "./Weather";

function DiaryHeader(props) {
  const diaryLength = props.diary.length;

  const [feelingRemove, setFeelingRemove] = useState(true);
  const [weatherRemove, setWeatherRemove] = useState(true);
  const [feeling, setFeeling] = useState("img/feeling/happy.png");
  const [weather, setWeather] = useState("img/weather/sun.png");

  const changeFeeling = (e) => {
    setFeeling(e.target.src);
    props.setFeelingEmoji(e.target.src);
    for (let i = 0; i < diaryLength; i++) {
      if (
        String(Object.keys(props.currentDiary)) ==
        String(Object.keys(props.diary[i]))
      ) {
        props.setDiary((prev) => {
          let temp = [...prev];
          temp[i][Object.keys(props.diary[i])].feeling = e.target.src;
          console.log(temp);
          return prev;
        });
        break;
      }
    }
  };

  const changeWeather = (e) => {
    setWeather(e.target.src);
    props.setWeatherEmoji(e.target.src);
    for (let i = 0; i < diaryLength; i++) {
      if (
        String(Object.keys(props.currentDiary)) ==
        String(Object.keys(props.diary[i]))
      ) {
        props.setDiary((prev) => {
          let temp = [...prev];
          temp[i][Object.keys(props.diary[i])].weather = e.target.src;
          console.log(temp);
          return prev;
        });
        break;
      }
    }
  };

  const feelingArr = ["happy", "angry", "sad", "soso", "sick", "tired"];
  const weatherArr = ["sun", "cloud", "rain", "snow"];
  const nowDate = new Date();
  return (
    <StyleDiaryHeader className="inpo">
      <div className="feelingBox">
        <div className="curruntFeeling">
          <p className="todayFeeling">오늘의 기분 :</p>
          <img
            src={props.diary
              .map((x) => {
                if (x[Object.keys(x)].weather != "") {
                  if (String(Object.keys(x)) == "day" + nowDate.getDate()) {
                    return x[Object.keys(x)].feeling;
                  }
                } else {
                  return feeling;
                }
              })
              .join("")}
            alt=""
            onClick={() => {
              setFeelingRemove((prev) => !prev);
            }}
          />
        </div>
        <div className={`${feelingRemove ? "remove" : "feeling"}`}>
          {feelingArr.map((x, y) => (
            <Feeling
              feel={x}
              key={y}
              changeFeeling={changeFeeling}
              setFeelingRemove={setFeelingRemove}
              setDiary={props.setDiary}
            />
          ))}
        </div>
      </div>
      <p>
        날짜: <span>{nowDate.getFullYear()}</span>.
        <span>{nowDate.getMonth() + 1}</span>.<span>{nowDate.getDate()}</span>
      </p>
      <div className="weatherBox">
        <div className="curruntweather">
          <p>날씨 : </p>
          <img
            src={props.diary
              .map((x) => {
                if (x[Object.keys(x)].weather != "") {
                  if (String(Object.keys(x)) == "day" + nowDate.getDate()) {
                    return x[Object.keys(x)].weather;
                  }
                } else {
                  return weather;
                }
              })
              .join("")}
            alt=""
            onClick={() => {
              setWeatherRemove((prev) => !prev);
            }}
          />
        </div>
        <div className={`${weatherRemove ? "remove" : "weather"}`}>
          {weatherArr.map((x, y) => (
            <Weather
              weather={x}
              key={y}
              changeWeather={changeWeather}
              setWeatherRemove={setWeatherRemove}
              setDiary={props.setDiary}
            />
          ))}
        </div>
      </div>
    </StyleDiaryHeader>
  );
}

export default DiaryHeader;
