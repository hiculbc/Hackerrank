import React from "react";
import "./Home.scss";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="heading">
        <h1 className="heading-one">
          <q>code all days lace up the pace</q>
        </h1>
        <div className="heading-two">
          <button className="btn btn-primary">Sign Up</button>
          <div className="vertical"></div>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>

      <div className="sample-code">
        <div className="sample-code-answer">
           <img src="answer.webp"></img>
        </div>
        <div className="sample-code-question">
           <img src="question.png"></img>
        </div>
      </div>
    </React.Fragment>
  );
};
