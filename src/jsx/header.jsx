import "../css/header.css";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <span>DIALOGUE</span>
        </div>
        <nav>
          <span>CALENDER</span>
          <span>DIARY</span>
          <span>TODO</span>
        </nav>
      </header>
    </>
  );
}

export default Header;
