import Atest from "../css/StyleTest";
function Table(props) {
  const painting = (e) => {
    let start = JSON.parse(localStorage.getItem("studyStart"));
    let end = JSON.parse(localStorage.getItem("studyEnd"));
    let count = Number(localStorage.getItem("count")) - 1;
    let counter = 0;

    for (let i = start[count]; i <= end[count]; i++) {
      e.target.parentNode.children[i].className = "timeData click";
    }

    for (let i = 0; i < 144; i++) {
      if (e.target.parentNode.children[i].className == "timeData click") {
        counter++;
      }
    }
    let hour = Math.floor((counter * 10) / 60);
    let minute = (counter * 10) % 60;

    props.setTime(() => {
      let temp = 0;
      temp = [hour, minute];
      // console.log(temp);
      return temp;
    });
  };

  return (
    <Atest
      className={"timeData"}
      onMouseDown={(e) => {
        props.setFlag(false);

        props.setCount((prev) => prev + 1);
        props.setStart((prev) => {
          let temp = [...prev];
          temp.push(props.x);
          return temp;
        });
      }}
      onMouseUp={(e) => {
        props.setEnd((prev) => {
          let temp = [...prev];
          temp.push(props.x);
          return temp;
        });
        props.setFlag(true);
      }}
      onMouseMove={(e) => {
        painting(e);
      }}
    ></Atest>
  );
}
export default Table;
