import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProfileMutation } from "../../../features/profile/profileApiSlice";
import {
  selectCurrentFirstName,
  selectCurrentLastName,
  setProfile,
} from "../../../features/profile/profileSlice.js";
import { StyledUserUpdate } from "./style.js";

const UserUpdate = ({ setIsEditMode }) => {
  const currentFirstName = useSelector(selectCurrentFirstName);
  const currentLastName = useSelector(selectCurrentLastName);

  const [updateProfile, { _isLoading }] = useUpdateProfileMutation();
  const dispatch = useDispatch();

  const fNameRef = useRef();
  const errRef = useRef();
  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    fNameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await updateProfile({
        firstName,
        lastName,
      }).unwrap();

      console.log(data);
      if (data) {
        const userData = {
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        };
        dispatch(setProfile({ ...userData, userData }));
        setIsEditMode(false);
      }
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

  const handleFNameInput = (e) => setFirstName(e.target.value);
  const handleLNameInput = (e) => setLastName(e.target.value);

  return (
    <StyledUserUpdate>
      <div className="input-group">
        <div className="input-wrapper">
          <label className="sr-only" htmlFor="firstNameInput">
            First Name
          </label>
          <input
            ref={fNameRef}
            onChange={handleFNameInput}
            type="text"
            id="firstNameInput"
            value={firstName}
            required
          />
        </div>
        <div className="input-wrapper">
          <label className="sr-only" htmlFor="firstNameInput">
            Last Name
          </label>
          <input
            onChange={handleLNameInput}
            type="text"
            id="lastNameInput"
            value={lastName}
            required
          />
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={() => setIsEditMode(false)}>Cancel</button>
      </div>

      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
    </StyledUserUpdate>
  );
};
export default UserUpdate;
