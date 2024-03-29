import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {
    
  const nevigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const { siginUser } = useContext(AuthContext);
  const handelLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    siginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        nevigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login Please</h2>
      <form onSubmit={handelLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Your email"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Your password"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to="/logout">Create New Account</Link>
        </small>{" "}
      </p>
    </div>
  );
};

export default Login;
