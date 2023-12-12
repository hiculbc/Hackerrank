import React from "react";
import "./authentication.scss";

export const Template = ({children}) => {
    return (
        <React.Fragment>
            <h1>A Step Closer</h1>
            <div className="template">
                <div className="code">
                  {children}
                </div>
                <div className="image">
                  <img src="hand-coding.avif"></img>
                </div>
            </div>
            <div className="slant-line"></div>
        </React.Fragment>
    )
}