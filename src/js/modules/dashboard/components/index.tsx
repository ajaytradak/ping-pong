import * as React from "react";
import AppLoader from "@src/common/components/AppLoader";

const LoadableAbout = AppLoader(import(/* webpackChunkName: "dashboard" */ "./Dashboard"));

export default LoadableAbout;
