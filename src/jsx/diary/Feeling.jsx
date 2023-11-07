function Feeling(props) {
  return (
    <>
      <img
        src={`img/feeling/${props.feel}.png`}
        alt=""
        onClick={(e) => {
          props.changeFeeling(e);
        }}
      />
    </>
  );
}

export default Feeling;
