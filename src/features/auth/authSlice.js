import { createSlice } from "@reduxjs/toolkit";

//Create the reducer and action for the auth (token) in the store
const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },

    // and the logout function (clear the token)
    logOut: (state) => {
      state.token = null;
    },
  },
});

// creating the action function for future dispatch
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

// creating and exporting the selecter
export const selectCurrentToken = (state) => state.auth.token;
