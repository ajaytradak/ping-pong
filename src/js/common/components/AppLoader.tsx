import * as React from "react";
import Loadable from "react-loadable";
import LinearProgress from "@material-ui/core/LinearProgress";

const AppLoader = loader => {
  return Loadable({
    loader: () => loader,
    loading() {
      return <LinearProgress color="primary" />;
    },
    delay: 4000,
    timeout: 2000
  });
}

export default AppLoader;