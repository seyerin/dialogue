import Header from "./header";
import "../css/diary.css";
function Diary(props) {
  return (
    <>
      <Header />
      <main>
        <section className="inpo">
          <p className="todayFeeling">오늘의 기분</p>
          <div>
            <p>
              날짜: <input type="text" />.<input type="text" />.
              <input type="text" />
            </p>
            <p>날씨</p>
          </div>
        </section>
        <section className="diary">
          <p>
            제목: <input type="text" />
          </p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </section>
      </main>
    </>
  );
}

export default Diary;
