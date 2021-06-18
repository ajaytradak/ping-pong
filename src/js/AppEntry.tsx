import { hot, setConfig } from "react-hot-loader";
import React from "react";
import { Router } from "react-router-dom";
import Main from "./modules/Main";
import history from "./constants/History";
import StylesProviderCustom from "@src/common/styles/StylesProviderCustom";

setConfig({
  logLevel: "debug"
});

const AppEntry = () => (
  <StylesProviderCustom>
    <Router history={history}>
      <Main />
    </Router>
  </StylesProviderCustom>
);

export default hot(module)(AppEntry);
