import TypeSelector from "./TypeSelector";
import Question from "./Question";
import Options from "./Options";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateSurvey = ({ squestions, setSquestions }) => {
  // console.log("sQue", squestions, " ", "SetQ", setSquestions);
  const history = useNavigate();
  const getRandom = () => {
    return Math.floor(Math.random() * 1000 + 1);
  };
  const defaultOptionsState = [
    { uid: getRandom(), value: "" },
    { uid: getRandom(), value: "" },
  ];
  const [qText, setQtext] = useState("");
  const [qType, setQtype] = useState(0);
  const [options, setOptions] = useState(defaultOptionsState);

  const addOptions = () => {
    let newOption = {
      uid: getRandom(),
      value: "",
    };
    let updatedOptions = [...options];
    // console.log("Updated Option: ", updatedOptions);
    updatedOptions.push(newOption);
    setOptions(updatedOptions);
  };

  const deleteOptions = () => {
    if (options.length === 2) {
      alert("Error: A select type question should have atleast 2 options");
    } else {
      let updatedOptions = [...options];
      updatedOptions.pop();
      setOptions(updatedOptions);
    }
  };

  const updateOptionText = (id, text) => {
    let updatedOptions = [...options];
    let changeIndex = updatedOptions.findIndex((x) => x.uid === id);
    // console.log("changedIndex", changeIndex);
    updatedOptions[changeIndex].value = text;
    setOptions(updatedOptions);
  };

  const updateSurveyQuestion = () => {
    if (qText === "") {
      alert("Fill the Data");
      return;
    }
    let newSurveyQuestion = [...squestions];
    let newQ = {
      qtext: qText,
      qtype: qType,
      options: options,
    };
    newSurveyQuestion.push(newQ);
    setSquestions(newSurveyQuestion);
    setQtype(0); //reset
    setQtext(""); //reset
    setOptions(defaultOptionsState); //reset
  };

  const publish = () => {
    updateSurveyQuestion();
    history("/published");
  };

  return (
    <div className="createSurvey">
      <TypeSelector qtype={qType} setQtype={setQtype} />

      {qType !== 0 ? (
        <>
          <Question onTextUpdate={setQtext} />

          {/* Options Code  */}
          {options.map((opt, key) => (
            <Options
              key={key}
              uid={opt.uid}
              addOptions={addOptions}
              deleteOptions={deleteOptions}
              updateText={updateOptionText}
            />
          ))}
          {qType === 1 ? (
            options.length >= 4 ? (
              <>
                <button className="btn1" onClick={() => updateSurveyQuestion()}>
                  Add Question
                </button>
                <button className="btn1" onClick={() => publish()}>
                  Publish
                </button>
              </>
            ) : null
          ) : qType === 2 ? (
            <>
              <button className="btn1" onClick={() => updateSurveyQuestion()}>
                Add Question
              </button>
              <button className="btn1" onClick={() => publish()}>
                Publish
              </button>
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default CreateSurvey;
