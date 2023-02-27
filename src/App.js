import "./styles.css";
import Logo from "./logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import CreateSurvey from "./components/CreateSurvey";
import Published from "./components/Published";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [squestions, setSquestions] = useState([]);

  return (
    <>
      <div className="app">
        <Router>
          <Link className="logo" to="/">
            <img alt="logo" src={Logo} />
          </Link>
          <Routes>
            <Route path="/" element={<Menu />} exact />
            <Route
              path="/create"
              element={
                <CreateSurvey
                  squestions={squestions}
                  setSquestions={setSquestions}
                />
              }
              exact
            />
            <Route
              path="/published"
              element={
                <Published
                  questions={squestions}
                  setQuestions={setSquestions}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
