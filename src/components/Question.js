const Question = ({ onTextUpdate }) => {
  return (
    <>
      <div className="question">
        <div className="quetion-icon">
          <button className="" id="">
            ?
          </button>
        </div>
        <input
          type="text"
          className=""
          placeholder="Question"
          onChange={(event) => onTextUpdate(event.target.value)}
        />
      </div>
    </>
  );
};

export default Question;
