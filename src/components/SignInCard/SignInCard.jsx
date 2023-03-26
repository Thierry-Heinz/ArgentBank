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

  const [login, { isLoading }] = useLoginMutation();
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
      const userData = await login({ email, password }).unwrap();

      // destructuring userData from the store and saving the user local state variable ???
      const token = userData.body.token;
      if (token) {
        dispatch(setCredentials({ ...userData, token }));
      }
      setEmail("");
      setPassword("");
      navigate("/profile");
    } catch (err) {
      //error handling
      if (!err?.originalStatus) {
        setErrMsg("No server Response");
      } else if (err.originalStatus?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
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
