import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppEntry from "@src/AppEntry";
import store from "@src/store";

const rootRunner = () => {
  ReactDOM.render(
    <Provider store={store as any}>
      <AppEntry />
    </Provider>,
    document.getElementById("root")
  );
};

rootRunner();
