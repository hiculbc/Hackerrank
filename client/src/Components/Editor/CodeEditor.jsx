import axios from "axios";
import React, { useRef, useState } from "react";
import { useQueries } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import Editor from "@monaco-editor/react";
import "./CodeEditor.scss";
import { Bookmark, BookmarkCheckIcon, BrightnessHigh, BrightnessLow, RunIcon, WriteIcon } from "../../Icons/BootstrapIcons";
import { RunTestCase, SubmitTestcase, Testcase } from "./Testcase";
import {  useIfLoggedIn } from "../../CommonFunctionalities/navigate";
import { getUserId } from "../../CommonFunctionalities/cookies";

export const CodeEditor = () => {

   useIfLoggedIn();

  const { id } = useParams();
  const editorRef = useRef(null);

  const [isPython, setIsPython] = useState(false);
  const [isDark,setIsDark] = useState(false);
  const [ testcaseResult,setTestcaseResult] = useState({
    isTest: true,
    result: []
  });

  const fetchQuestion = () => {
    return axios.get(`http://localhost:3002/questions/${id}`);
  };

  const fetchTestcases = () => {
    return axios.get(`http://localhost:3002/questions/${id}/testcases`);
  };

  const fetchSolvedQuestions = () => {
    return axios.post("http://localhost:3002/solved",{
      user_id: getUserId()
    })
  }

  const handleRun = (isTest) => {
    axios
      .post(`http://localhost:3002/questions/${id}/check`, {
        code: editorRef.current.getValue(),
        isPython: isPython,
        user_id: getUserId(),
        isTest: isTest
      })
      .then((res) => setTestcaseResult({
        isTest: isTest,
        output: res.data
      }))
      .catch((err) => console.log(err));
  };

  console.log(testcaseResult);

  const results = useQueries([
    { queryKey: ["question"], queryFn: fetchQuestion },
    { queryKey: ["testcases"], queryFn: fetchTestcases },
    { queryKey: ["solved_questions"],queryFn: fetchSolvedQuestions }
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
    {data: {data: solved_questions}}
  ] = results;

  const topics = ["Array", "String", "Hashing", "BinarySearch"];
  let noOfTestcasesPassed = testcaseResult?.isTest ? 0 : testcaseResult?.output?.reduce((result,each) => result + (each.result == true ? 1 : 0),0);

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
          <p className={solved_questions.includes(question.id) ? 'easy' : ''}>{solved_questions.includes(question.id) ? <BookmarkCheckIcon width="16" height="16" /> : '' }</p>
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
              {isPython? "Python": "Javascript"}
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
          <button className="btn editor-testcase-menu-button" onClick={() => handleRun(false)}>
            Run
            {<RunIcon />}
          </button>
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
            <div className={testcaseResult.length?'underline':''}><strong>Console</strong></div>
          <button className="btn editor-testcase-menu-button" onClick={() => handleRun(true)}>
            Test
            {<RunIcon />}
          </button>
          </div>
          <div className="editor-testcase-examples">
            {
              testcaseResult.isTest ? <RunTestCase testcaseResult={testcaseResult} /> : <SubmitTestcase testcaseResult={testcaseResult} noOfTestcasesPassed={noOfTestcasesPassed}/> 
            }

          </div>
        </div>
      </div>
    </div>
  );
};
