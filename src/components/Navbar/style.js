import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const LogoWrapper = styled(Link)``;

const Logo = styled.img`
  max-width: 100%;
  width: 200px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledNavLink = styled(NavLink)`
  background: none;
  outline: none;
  border: none;
  display: flex;
  gap: 5px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
  font-size: 16px;
  align-items: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export { StyledNavbar, LogoWrapper, Logo, ButtonsGroup, StyledNavLink };
