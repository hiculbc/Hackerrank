import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { cookies } from "../../Cookies/cookies";

export const Home = () => {

    const userId = cookies.get("userId")
      
  return (
    <React.Fragment>
      <div className="heading">
        <h1 className="heading-one">
          <q>code all days lace up the pace</q>
        </h1>
        <div className="heading-two">
            {
                userId === null && <React.Fragment>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          <div className="vertical"></div>
          <Link to="/login" className="btn btn-primary">Login</Link>
                </React.Fragment> 
            }
          
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
