import { useState } from "react";

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

  return (
    <StyledNavbar>
      <LogoWrapper to="/">
        <Logo src={logo} alt="ArgentBank logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </LogoWrapper>

      {!isLoggedIn ? (
        <ButtonsGroup>
          <StyledNavLink to="signin">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </StyledNavLink>
        </ButtonsGroup>
      ) : (
        <ButtonsGroup>
          <StyledNavLink>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </StyledNavLink>
          <StyledNavLink>
            <FontAwesomeIcon icon={faSignOut} />
            Sign In
          </StyledNavLink>
        </ButtonsGroup>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
