import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { id: null, email: null },
  reducers: {
    setProfile: (state, action) => {
      const { firstName, lastName } = action.payload;
      console.log(firstName);
      console.log(lastName);
      state.firstName = firstName;
      state.lastName = lastName;
    },
    unsetProfile: (state, action) => {
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const { setProfile, unsetProfile } = profileSlice.actions;

export default profileSlice.reducer;

export const selectCurrentFirstName = (state) => state.profile.firstName;
export const selectCurrentLastName = (state) => state.profile.lastName;
