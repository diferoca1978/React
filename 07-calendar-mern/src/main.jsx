import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import { CalendarApp } from "./CalendarApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <CalendarApp />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
