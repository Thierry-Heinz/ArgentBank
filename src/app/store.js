import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import accountReducer from "../features/accounts/accountsSlice";

// create and export the store (future usage in the provider)
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    profile: profileReducer,
    accounts: accountReducer,
  },

  // defining a middleware, like an interceptor function (in this instance apiSplice will set the token in the headers of the baseQuery)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
