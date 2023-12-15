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