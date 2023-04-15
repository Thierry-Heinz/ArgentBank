import { StyledUserPage } from "./style";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetProfileMutation } from "../../features/profile/profileApiSlice";
import { setProfile } from "../../features/profile/profileSlice";
import Header from "../../components/User/Header";
import Account from "../../components/User/Account";

const UserPage = () => {
  // setting the "custom hook" to get the profile info
  const [profile, { isLoading }] = useGetProfileMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // getting the profile data from the profile api call
      const data = await profile().unwrap();

      if (data) {
        const userData = {
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        };

        // storing the user data
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
