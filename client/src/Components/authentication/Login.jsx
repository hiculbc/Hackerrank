import React, { useRef } from "react";
import { cookies } from "../../Cookies/cookies";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
    const inputRef = useRef({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {};
        for(const x in inputRef.current){
            user[x] = inputRef.current[x].value
        }
        axios.post('http://localhost:3002/sessions/create',user).then((res) => cookies.set('userId',res.data)).catch((err) => console.log(err));
    }

  return (
    <React.Fragment>
    <div className="login">
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
