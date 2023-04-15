import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

import Router from "./components/Router/Router";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* Wrapping the app with the Redux provider for the store consumption */}
    <Provider store={store}>
      {/* Calling the router with the navigation logic and user token verification */}
      <Router />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
