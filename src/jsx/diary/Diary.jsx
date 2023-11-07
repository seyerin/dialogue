import Header from "../Header";
import StyleDiary from "../../css/diary/StyleDiary";
import DiaryHeader from "./DiaryHeader";
import { useState } from 'react';
function Diary(props) {
  const [diary, setDiary] = useState(() => (
    [{
      day1{
        feeling: 이미지,
        weather: 이미지,
        date: [],
        diaryTitle: "",
        diaryText: ""
      }
    },] || JSON.parse(localStorage.getItem("diary"))
  ))
  return (
    <>
      <Header />
      <StyleDiary>
        <DiaryHeader />
        <div className="diary">
          <p>
            제목: <input type="text" maxLength={60} />
          </p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            maxLength={1500}
          ></textarea>
          <div className="btnBox">
            <button type="submit" className="change">
              수정
            </button>
            <button type="submit" className="save">
              저장
            </button>
          </div>
        </div>
      </StyleDiary>
    </>
  );
}

export default Diary;
