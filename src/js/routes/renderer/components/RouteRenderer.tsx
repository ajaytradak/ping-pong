import React from "react";
import { Route } from "react-router-dom";
import RouteContentWrapper from "@src/routes/renderer/components/RouteContentWrapper";

const RouteRenderer = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      // pass the sub-routes down to keep nesting
      <RouteContentWrapper route={route} {...props} />
    )}
  />
);

export default RouteRenderer;
