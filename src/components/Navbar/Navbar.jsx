import { StyledNavbar, ButtonsGroup } from "./style";
import logo from "../../assets/argentBankLogo.png";

import { ButtonIcon } from "./ButtonIcon";

const Navbar = () => {
  return (
    <StyledNavbar>
      <img src={logo} alt="ArgentBank logo" />
      <ButtonsGroup>
        <ButtonIcon faIcon="user-circle" />
      </ButtonsGroup>
    </StyledNavbar>
  );
};

export default Navbar;
