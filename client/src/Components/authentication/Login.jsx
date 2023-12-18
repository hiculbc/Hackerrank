import React, { useRef, useState } from "react";
import { setUserId } from "../../CommonFunctionalities/cookies";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const Login = () => {
    const inputRef = useRef({});
    const [messageStatus,setMessage] = useState({
      isError:false,
      message: null

    });
    let { state = {}} = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {};
        for(const x in inputRef.current){
            user[x] = inputRef.current[x].value
        }
        axios.post('http://localhost:3002/sessions/create',user).then((res) => { 
        setUserId(res.data);
          setMessage({
            isError: false,
            message: "LoggedIn Successfully"
          });
       } ).catch((error) => {
        console.log(error);
        setMessage({
          isError: true,
          message: error?.response?.data?.message
        })
       });
    }

  return (
    <React.Fragment>
    <div className="login">
      { (messageStatus.message || state?.message ) && <div className={messageStatus.isError ? 'error-msg' : 'success-msg'}>{messageStatus.message || state?.message} </div> }
      <h2>Login</h2>
      <form>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          ref={el => inputRef.current['email'] = el}
        ></input>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          ref={el => inputRef.current['password'] = el}
        ></input>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <p>Not a User? <Link to="/signup">SignUp here</Link></p>
    </div>
  </React.Fragment>
  );
};
