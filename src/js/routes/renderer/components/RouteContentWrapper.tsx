import React from "react";

const RouteContentWrapper = React.memo<any>(props => {
  const { route } = props;

  React.useEffect(() => {
    const { title } = route;

    if (title) {
      document.title = title;
    }
  }, [route]);

  return <route.main {...props} routes={route.routes} />;
});

export default RouteContentWrapper;
