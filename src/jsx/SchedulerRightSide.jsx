import styled from "styled-components";
import Table from "./As";
function RightSide() {
  const arr = [
    6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4,
    5,
  ];
  return (
    <Style className="rightSide">
      <div className="time"></div>
      <table className="timeTable">
        <tbody>
          {arr.map((x) => (
            <Table time={x} />
          ))}
        </tbody>
      </table>
    </Style>
  );
}

export default RightSide;

const Style = styled.section`
  td {
    width: 20px;
    height: 20px;
    border: 1px solid black;
  }
`;
