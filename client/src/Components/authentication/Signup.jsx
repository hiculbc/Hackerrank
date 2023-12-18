import React, { useRef, useState } from "react";
import axios from "axios";
import { setUserId } from "../../CommonFunctionalities/cookies";
import { Link } from "react-router-dom";

export const Signup = () => {
    const inputRef = useRef({});
    const [messageStatus,setMessage] = useState({
      isError: false,
      message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {};
        for(const x in inputRef.current){
            user[x] = inputRef.current[x].value
        }
        axios.post('http://localhost:3002/users',user).then((res) => { setUserId(res.data);
        setMessage({
          isError: false,
          message: "LoggedIn Successfully"
        }) 
      }
        ).catch((error) => { 
          console.log(error);
          setMessage({
            isError: true,
            message: Object.keys(error?.response?.data?.error)[0] + " " + Object.values(error?.response?.data?.error)[0]
          })
        });
    }

    return (
    <React.Fragment>
    <div className="signup">
    {  messageStatus.message && <div className={messageStatus.isError ? 'error-msg' : 'success-msg'}>{ messageStatus.message} </div> }
      <h2>SignUp</h2>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          ref={el => inputRef.current['name'] = el}
        ></input>

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
        <input
          type="password"
          className="form-control"
          placeholder="Confirm your password"
          ref={el => inputRef.current['password_confirmation'] = el}
        ></input>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          SignUp
        </button>
      </form>
      <p>Already a User? <Link to="/login">Login here</Link></p>
    </div>
  </React.Fragment>
    )
}