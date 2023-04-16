import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCredentials } from "../../features/auth/authSlice.js";
import { useLoginMutation } from "../../features/auth/authApiSlice.js";

import { StyledSignInCard } from "./style.js";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInCard = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  // set the login function using the login "custom hook"
  const [login, { isLoading }] = useLoginMutation();
  // setting the dispatch for future actions call
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // send the login credentials as payload thru the authApiSlice
      const userData = await login({ email, password }).unwrap();

      //  get the response token if the http call is successful
      const token = userData.body.token;
      if (token) {
        // call the action to store the token
        dispatch(setCredentials({ token }));
      }
      // empty the fields and redirect to profile page
      setEmail("");
      setPassword("");
      navigate("/profile");
    } catch (err) {
      console.log(err);
      //error handling depending on the response of the api call
      if (err.status) {
        setErrMsg(err.data.message);
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <StyledSignInCard>
      <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            ref={userRef}
            onChange={handleUserInput}
            type="text"
            id="username"
            autoComplete="off"
            value={email}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePwdInput}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <button className="sign-in-button">Sign In</button>
      </form>
    </StyledSignInCard>
  );
  return content;
};

export default SignInCard;
