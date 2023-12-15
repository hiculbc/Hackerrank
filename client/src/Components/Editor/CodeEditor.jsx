import axios from "axios";
import React, { useRef, useState } from "react";
import { useQueries } from "react-query";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import "./CodeEditor.scss";
import { BrightnessHigh, BrightnessLow, RunIcon, WriteIcon } from "../../Icons/BootstrapIcons";
import { Testcase } from "./Testcase";

export const CodeEditor = () => {
  const { id } = useParams();
  const editorRef = useRef(null);

  const [isPython, setIsPython] = useState(false);
  const [isDark,setIsDark] = useState(false);
  const [ testcaseResult,setTestcaseResult] = useState([]);

  const fetchQuestion = () => {
    return axios.get(`http://localhost:3002/questions/${id}`);
  };

  const fetchTestcases = () => {
    return axios.get(`http://localhost:3002/questions/${id}/testcases`);
  };

  const handleRun = () => {
    axios
      .post(`http://localhost:3002/questions/${id}/check`, {
        code: editorRef.current.getValue(),
        isPython: isPython,
      })
      .then((res) => setTestcaseResult(res.data))
      .catch((err) => console.log(err));
  };

  const results = useQueries([
    { queryKey: ["question"], queryFn: fetchQuestion },
    { queryKey: ["testcases"], queryFn: fetchTestcases },
  ]);

  const isLoading = results.some((query) => query.isLoading);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const [
    {
      data: {
        data: { question, boilerplate },
      },
    },
    {
      data: { data: testcases },
    },
  ] = results;

  const topics = ["Array", "String", "Hashing", "BinarySearch"];
  let noOfTestcasesPassed = testcaseResult.reduce((result,each) => result + (each.result == true ? 1 : 0),0);

  return (
    <div className="editor">
      <div className="editor-question">
        <h4>
          {question.id}. {question.title}
        </h4>
        <div className="question-details">
          <p className={question.difficulty}>
            { <WriteIcon />}
            {question.difficulty}
          </p>
          <p>{topics[question.topic]}</p>
        </div>
        <p>
          <pre>{question.question}</pre>
        </p>
      </div>
      <div className="editor-code">
        <div className="editor-menu">
          <div class="dropdown editor-menu-language">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Languages
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" onClick={() => setIsPython(false)}>
                Javascript
              </a>
              <a class="dropdown-item" onClick={() => setIsPython(true)}>
                Python
              </a>
            </div>
          </div>
          {isDark ?  <div onClick={() => setIsDark(false)} className="editor-menu-icon"><BrightnessHigh /></div> : <div onClick={() => setIsDark(true)} className="editor-menu-icon"><BrightnessLow /></div> }
        </div>

        <Editor
          height="40vh"
          language={isPython ? "python" : "javascript"}
          theme={ isDark ? "vs-dark" : "vs-light" }
          value={boilerplate[isPython ? 0 : 1].code}
          onMount={(editor, monaco) => (editorRef.current = editor)}
          options={{
            inlineSuggest: true,
            fontSize: "16px",
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { scale: 10 },
          }}
        />
        <div className="editor-testcase">
          <div className="editor-testcase-menu">
          <button className="btn editor-testcase-menu-button" onClick={handleRun}>
            Run
            {<RunIcon />}
          </button>
          </div>
          <div className="editor-testcase-examples">
             {
              testcaseResult.length>0 && 
              <p className={noOfTestcasesPassed == testcaseResult.length ? 'passed overall' : 'failed overall'}>{noOfTestcasesPassed}/{testcaseResult.length} passed</p>
            }
            {
              testcaseResult.map((each_result,index) => {
                return <Testcase each_result= {each_result} index={index} />
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
};