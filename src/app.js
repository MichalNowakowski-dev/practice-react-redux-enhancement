// ./src/app.js
import React from "react";
import { createRoot } from "react-dom/client";
import githubReducer from "./modules/github/github.reducer";
import stackOverflowReducer from "./modules/stackoverflow/stackoverflow.reducer";
import App from "./components/App";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  github: githubReducer,
  stackOverflow: stackOverflowReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
