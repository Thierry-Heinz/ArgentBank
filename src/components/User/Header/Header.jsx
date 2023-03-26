import { StyledUserHeader } from "./style.js";
import {
  selectCurrentFirstName,
  selectCurrentLastName,
} from "../../../features/profile/profileSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

import UserUpdate from "../UserUpdate/UserUpdate.jsx";

const Header = () => {
  const [isEditMode, setIsEditmode] = useState(false);
  const userFirstName = useSelector(selectCurrentFirstName);
  const userLastName = useSelector(selectCurrentLastName);

  return (
    <StyledUserHeader>
      <h1>
        Welcome Back
        {!isEditMode ? (
          <div className="userName">
            {userFirstName} {userLastName}
          </div>
        ) : (
          ""
        )}
      </h1>

      {!isEditMode ? (
        <button
          onClick={() => setIsEditmode(!isEditMode)}
          className="edit-button"
        >
          Edit Name
        </button>
      ) : (
        ""
      )}

      {isEditMode ? <UserUpdate setIsEditMode={setIsEditmode} /> : ""}
    </StyledUserHeader>
  );
};
export default Header;
