import React, { useState } from "react";
import { DownIcon, RunIcon } from "../../Icons/BootstrapIcons";

export const Testcase = ({each_result,index}) => {
    const [up,setUp] = useState(true);
    const result = each_result.result;
    return (
         
          <div className="example">
            <div onClick={() => setUp(!up)}>
            {up ? <RunIcon /> : <DownIcon />}
            
            </div>
            <p className={result == true? 'passed' : 'failed'}>Testcase {index+1}</p>
            <div >{ !up && <textarea className="example-textarea">
                {each_result.testcase.testcase}
            </textarea> }</div>
          </div>
       
    )
}

export const SubmitTestcase = ({testcaseResult,noOfTestcasesPassed}) => {

  return (

    <React.Fragment>

    {
      testcaseResult.output.length>0 && 
      <p className={noOfTestcasesPassed == testcaseResult.output.length ? 'passed overall' : 'failed overall'}>{noOfTestcasesPassed}/{testcaseResult.output.length} passed</p>
    }
    {
      testcaseResult.output.map((each_result,index) => {
        return <Testcase each_result= {each_result} index={index} />
      })
    }
    </React.Fragment>

  )
 
}

export const RunTestCase = ({testcaseResult}) => {
  console.log(testcaseResult);
  return (
    <pre>
    <div className="test">
      <div className="result">
      {testcaseResult?.output?.result}
      </div>
      <div className="testcase">
      <strong>Testcase</strong>
      <p>{testcaseResult?.output?.testcase?.testcase}</p>
      </div>
      
    </div>
    </pre>
  )
}