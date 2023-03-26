import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Define the baseQuery & get the headers of the http request ??
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/api/v1",
  credentials: "same-origin",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log(token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
