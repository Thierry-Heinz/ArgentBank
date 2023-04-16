import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Define the baseQuery & get the headers of the http request (get called by the middleware)
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/api/v1",
  credentials: "same-origin",
  prepareHeaders: (headers, { getState }) => {
    // get the token
    const token = getState().auth.token;

    // if not already set, set the token
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    //return the headers with the content-type
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

// Redux toolkit Query defining the api endpoint
export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
