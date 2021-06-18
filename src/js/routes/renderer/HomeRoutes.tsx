import React from "react";
import { routes } from "@src/routes";
import RouteRenderer from "@src/routes/renderer/components/RouteRenderer";

const HomeRoutes = React.memo<any>(() => {;
  return routes.map((route, i) => <RouteRenderer key={i} {...route} />);
});

export default HomeRoutes;
