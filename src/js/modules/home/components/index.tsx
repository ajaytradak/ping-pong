import * as React from "react";
import AppLoader from "@src/common/components/AppLoader";

const LoadableHome = AppLoader(import(/* webpackChunkName: "home" */ "./Home"));

export default LoadableHome;
