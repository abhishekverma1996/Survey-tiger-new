const Options = ({ addOptions, deleteOptions, uid, updateText }) => {
  return (
    <>
      <div className="option">
        <input
          type="text"
          className="form-control"
          placeholder="Option"
          onChange={(event) => {
            updateText(uid, event.target.value);
          }}
        />
        <div className="inc-dec">
          <button className="inc" type="button" onClick={() => addOptions()}>
            +
          </button>
          <button className="dec" type="button" onClick={() => deleteOptions()}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Options;
