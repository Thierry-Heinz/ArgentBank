import { StyledSignInCard } from "./style.js";

import { Link } from "react-router-dom";

import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInCard = () => {
  return (
    <StyledSignInCard>
      <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>

        <Link to="/user" className="sign-in-button">
          Sign In
        </Link>
      </form>
    </StyledSignInCard>
  );
};

export default SignInCard;
