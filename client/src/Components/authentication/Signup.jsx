import React, { useRef } from "react";
import axios from "axios";
import { cookies } from "../../Cookies/cookies";
import { Link } from "react-router-dom";

export const Signup = () => {
    const inputRef = useRef({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {};
        for(const x in inputRef.current){
            user[x] = inputRef.current[x].value
        }
        axios.post('http://localhost:3002/users',user).then((res) => cookies.set('userId',res.data)).catch((err) => console.log(err));
    }

    return (
    <React.Fragment>
    <div className="signup">
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