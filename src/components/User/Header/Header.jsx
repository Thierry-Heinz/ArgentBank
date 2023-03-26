import { StyledUserHeader } from "./style.js";
import {
  selectCurrentFirstName,
  selectCurrentLastName,
} from "../../../features/profile/profileSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const userFirstName = useSelector(selectCurrentFirstName);
  const userLastName = useSelector(selectCurrentLastName);

  return (
    <StyledUserHeader>
      <h1>
        Welcome Back <br /> {userFirstName} {userLastName}
      </h1>

      <button className="edit-button">Edit Name</button>
    </StyledUserHeader>
  );
};
export default Header;
