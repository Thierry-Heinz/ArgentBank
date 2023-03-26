import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { firstName: null, lastName: null },
  reducers: {
    setProfile: (state, action) => {
      const { firstName, lastName } = action.payload;
      console.log("reducer " + firstName);
      console.log("reducer " + lastName);
      state.firstName = firstName;
      state.lastName = lastName;
    },
    unsetProfile: (state) => {
      state.firstName = null;
      state.lastName = null;
      console.log("reducer " + state.firstName);
      console.log("reducer " + state.lastName);
    },
  },
});

export const { setProfile, unsetProfile } = profileSlice.actions;

export default profileSlice.reducer;

export const selectCurrentFirstName = (state) => state.profile.firstName;
export const selectCurrentLastName = (state) => state.profile.lastName;
