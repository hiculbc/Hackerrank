import React from "react";
import "./authentication.scss";

export const Template = ({children}) => {
    return (
        <React.Fragment>
            <div className="template">
                <div className="code">
                  {children}
                </div>
                <div className="image">
                  <img src="hand-coding.avif"></img>
                </div>
            </div>
        </React.Fragment>
    )
}