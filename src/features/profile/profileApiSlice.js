import { apiSlice } from "../../app/api/apiSlice";

// creating and exporting the api calls in order to get the profile of the user and update it
export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.mutation({
      query: () => ({
        url: "/user/profile",
        method: "POST",
        body: {},
      }),
    }),

    updateProfile: builder.mutation({
      query: (userData) => ({
        url: "/user/profile",
        method: "PUT",
        body: { ...userData },
      }),
    }),
  }),
});

//auto generated mutation hooks, to use like a custom hook to call the getprofile and updateProfile routes
export const { useGetProfileMutation } = profileApiSlice;
export const { useUpdateProfileMutation } = profileApiSlice;
