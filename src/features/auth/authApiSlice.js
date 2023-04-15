import { apiSlice } from "../../app/api/apiSlice";

//creating and exporting the login route
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

//auto generated mutation hooks, to use like a custom hook to call the login route
export const { useLoginMutation } = authApiSlice;
