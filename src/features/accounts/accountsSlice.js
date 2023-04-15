import { createSlice } from "@reduxjs/toolkit";

// Initial state for the accounts store
const initialState = [
  {
    id: 1589,
    title: "Argent Bank Checking (x8349)",
    amount: 2082.79,
    description: "Available Balance",
  },
  {
    id: 9563,
    title: "Argent Bank Savings (x6712)",
    amount: 10928.42,
    description: "Available Balance",
  },
  {
    id: 456,
    title: "Argent Bank Credit Card (x8349)",
    amount: 184.3,
    description: "Current Balance",
  },
];

//creating the slice for the accounts reducer
const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
});

export default accountsSlice.reducer;
