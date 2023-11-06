import Header from "../Header";
import StyleDiary from "../../css/diary/StyleDiary";
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
