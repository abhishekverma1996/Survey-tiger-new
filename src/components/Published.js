import { useNavigate } from "react-router-dom";

const Published = ({ questions, setQuestions }) => {
  // console.log(questions);
  let history = useNavigate();
  return (
    <>
      <div className="publish">
        {questions.length > 0 ? (
          questions.map((q, key) => (
            <div className="row" key={key}>
              <div className="col">
                <h3>
                  {key + 1}. {q.qtext}
                </h3>
              </div>
              <div className="">
                {q.options.map((opt) =>
                  q.qtype === 1 ? (
                    <div className="option" key={opt.uid}>
                      <label className="">
                        <input type="checkbox" className="" value="" />
                        {opt.value}
                      </label>
                    </div>
                  ) : (
                    <div className="option" key={opt.uid}>
                      <label>
                        <input type="radio" className="" name="random" />
                        {opt.value}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <h2>No Questions added</h2>
            <button
              className="btn1"
              onClick={() => {
                history("/");
              }}
            >
              Go back
            </button>
          </div>
        )}

        {questions.length !== 0 ? (
          <div className="">
            <button
              className="btn1"
              onClick={() => {
                history("/");
                setQuestions("");
              }}
            >
              Confirm
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Published;
