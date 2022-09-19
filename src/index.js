import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { Provider } from "react-redux";

const store = configureStore({ reducer: reducer });

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
