import Header from "../Header";
import StyleDiary from "../../css/diary/StyleDiary";
import DiaryHeader from "./DiaryHeader";
import DiaryMain from "./DiaryMain";
import { useEffect, useState } from "react";
function Diary(props) {
  const [diary, setDiary] = useState(
    () => obj || JSON.parse(localStorage.getItem("diary"))
  );

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [feelingEmoji, setFeelingEmoji] = useState("img/feeling/happy.png");
  const [weatherEmoji, setWeatherEmoji] = useState("img/weather/sun.png");
  const [currentDiary, setCurrentDiary] = useState(obj[0]);

  useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(diary));
  }, [diary]);
  return (
    <>
      <Header />
      <StyleDiary>
        <DiaryHeader
          feelingEmoji={feelingEmoji}
          setFeelingEmoji={setFeelingEmoji}
          weatherEmoji={weatherEmoji}
          setWeatherEmoji={setWeatherEmoji}
          diary={diary}
          setDiary={setDiary}
          currentDiary={currentDiary}
        />
        <DiaryMain
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
          setDiary={setDiary}
          diary={diary}
          feelingEmoji={feelingEmoji}
          weatherEmoji={weatherEmoji}
          currentDiary={currentDiary}
          setCurrentDiary={setCurrentDiary}
          now={props.now}
        />
      </StyleDiary>
    </>
  );
}

export default Diary;

const nowDate = new Date();
const obj = [
  {
    ["day" + nowDate.getDate()]: {
      feeling: "",
      weather: "",
      date:
        String(nowDate.getFullYear()) +
        String(nowDate.getMonth() + 1) +
        +String(nowDate.getDate()),
      diaryTitle: "",
      diaryText: "",
    },
  },
];
