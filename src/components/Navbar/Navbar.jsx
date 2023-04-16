import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentFirstName,
  unsetProfile,
} from "../../features/profile/profileSlice";
import { selectCurrentToken, logOut } from "../../features/auth/authSlice";

import { useNavigate } from "react-router-dom";

import {
  StyledNavbar,
  LogoWrapper,
  Logo,
  StyledNavLink,
  ButtonsGroup,
} from "./style";
import logo from "../../assets/argentBankLogo.png";

import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");

  // get the user firstName and the token from the store
  const firstName = useSelector(selectCurrentFirstName);
  const token = useSelector(selectCurrentToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (firstName) {
      setUserFirstName(firstName);
    }
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [firstName, token]);

  // when clicking on the logout button
  const handleLogOut = () => {
    // call the logout function to clear token
    dispatch(logOut());
    // call the unsetProfile to clear the profile info
    dispatch(unsetProfile());
    setUserFirstName("");
    setIsLoggedIn(false);
    // and navigate to HomePage
    navigate("/");
  };

  return (
    <StyledNavbar>
      <LogoWrapper to="/">
        <Logo src={logo} alt="ArgentBank logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </LogoWrapper>

      {!isLoggedIn ? (
        <ButtonsGroup>
          <StyledNavLink to="login">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </StyledNavLink>
        </ButtonsGroup>
      ) : (
        <ButtonsGroup>
          <StyledNavLink to="profile">
            <FontAwesomeIcon icon={faUserCircle} />
            {userFirstName}
          </StyledNavLink>
          <StyledNavLink onClick={handleLogOut}>
            <FontAwesomeIcon icon={faSignOut} />
            Sign Out
          </StyledNavLink>
        </ButtonsGroup>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
