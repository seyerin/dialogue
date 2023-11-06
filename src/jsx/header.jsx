import "../css/header.css";
import styled from "styled-components";

import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <LinkItem to="/">DIALOGUE</LinkItem>
        </div>
        <nav>
          <LinkItem to="/">CALENDER</LinkItem>
          <LinkItem to="/Diary">DIARY</LinkItem>
          <LinkItem to="/Scheduler">SCHEDULER</LinkItem>
        </nav>
      </header>
    </>
  );
}

const LinkItem = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default Header;
