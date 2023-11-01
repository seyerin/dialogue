import StyleDiaryHeader from "../../css/diary/StyleDiaryHeader";
function DiaryHeader() {
  return (
    <StyleDiaryHeader className="inpo">
      <p className="todayFeeling">오늘의 기분</p>
      <p>
        날짜: <input type="text" />.<input type="text" />.
        <input type="text" />
      </p>
      <p>날씨</p>
    </StyleDiaryHeader>
  );
}

export default DiaryHeader;
