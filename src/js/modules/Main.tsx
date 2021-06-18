import React from "react";
import { Link, withRouter } from "react-router-dom";
import HomeRoutes from "@src/routes/renderer/HomeRoutes";
import MessageProvider from "@src/common/components/MessageProvider/MessageProvider";

const Main = React.memo<any>(() => {
  return (
    <div>
      <HomeRoutes />
      <MessageProvider />
    </div>
  );
});

export default withRouter(Main);
