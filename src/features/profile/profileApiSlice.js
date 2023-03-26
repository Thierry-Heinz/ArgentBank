import { apiSlice } from "../../app/api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "POST",
        body: {},
      }),
    }),

    setProfile: builder.query({
      query: ({ userData }) => ({
        url: "/user/profile",
        method: "PUT",
        body: { ...userData },
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApiSlice;
export const { userSetProfileQuery } = profileApiSlice;
