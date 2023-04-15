import { createSlice } from "@reduxjs/toolkit";

// creating the profile action and reducer
const profileSlice = createSlice({
  name: "profile",
  initialState: { firstName: null, lastName: null },
  reducers: {
    // storing the profile
    setProfile: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    // clearing the profile
    unsetProfile: (state) => {
      state.firstName = null;
      state.lastName = null;
    },
  },
});

// exporting the functions for future dispatch
export const { setProfile, unsetProfile } = profileSlice.actions;

export default profileSlice.reducer;

// creating and exporting the selecters for getting the state = of the profile
export const selectCurrentFirstName = (state) => state.profile.firstName;
export const selectCurrentLastName = (state) => state.profile.lastName;
