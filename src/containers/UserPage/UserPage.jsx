import { StyledUserPage } from "./style";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { useGetProfileMutation } from "../../features/profile/profileApiSlice";

import { setProfile } from "../../features/profile/profileSlice";

import Header from "../../components/User/Header";
import Account from "../../components/User/Account";

const UserPage = () => {
  // const userFirstName = useSelector(selectCurrentFirstName);
  // const userLastName = useSelector(selectCurrentLastName);

  const [profile, { isLoading }] = useGetProfileMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await profile().unwrap();

      if (data) {
        const userData = {
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        };

        dispatch(setProfile({ ...userData, userData }));
      }
    };

    fetchData();
  }, []);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <StyledUserPage>
      <Header />
      <Account />
    </StyledUserPage>
  );

  return content;
};

export default UserPage;
