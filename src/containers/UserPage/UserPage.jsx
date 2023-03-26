import { Link } from "react-router-dom";
import { StyledUserPage } from "./style";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useGetProfileQuery } from "../../features/profile/profileApiSlice";

import {
  setProfile,
  selectCurrentFirstName,
  selectCurrentLastName,
} from "../../features/profile/profileSlice";

import Header from "../../components/User/Header";
import Account from "../../components/User/Account";

const UserPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  // const userFirstName = useSelector(selectCurrentFirstName);
  // const userLastName = useSelector(selectCurrentLastName);
  // console.log(userFirstName, userLastName);

  const {
    data: profile,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProfileQuery();

  console.log(profile);

  useEffect(() => {
    if (isSuccess) {
      const userData = {
        firstName: profile.body.firstName,
        lastName: profile.body.lastName,
      };

      dispatch(setProfile({ ...userData, userData }));

      console.log(profile.body.firstName);

      setFirstName(profile.body.firstName);
      setLastName(profile.body.lastName);
    }
  }, [profile, isSuccess, dispatch]);

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = (
      <StyledUserPage>
        <Header />
        <Account />
      </StyledUserPage>
    );
  }
  return content;
};

export default UserPage;
