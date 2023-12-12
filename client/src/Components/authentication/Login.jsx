import React from "react";

export const Login = () => {
  return (
    <React.Fragment>
    <div className="Signup">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
        ></input>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
        ></input>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </React.Fragment>
  );
};
