function Whether(props) {
  return (
    <>
      <img
        src={`img/whether/${props.whether}.png`}
        alt=""
        onClick={(e) => {
          props.changeWhether(e);
        }}
      />
    </>
  );
}

export default Whether;
