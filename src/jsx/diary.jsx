import Header from "./Header";
// import "../css/diary.css";
import StyleDiary from "../css/StyleDiary";
import DiaryHeader from "./DiaryHeader";
function Diary(props) {
  return (
    <>
      <Header />
      <StyleDiary>
        <DiaryHeader />
        <div className="diary">
          <p>
            제목: <input type="text" />
          </p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </StyleDiary>
    </>
  );
}

export default Diary;
