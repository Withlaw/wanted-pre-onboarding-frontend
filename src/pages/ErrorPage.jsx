import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log("route error: ", error);
  console.log("is route error? ", isRouteErrorResponse);

  return (
    <div>
      <h1>Error Page</h1>
    </div>
  );
};

export default ErrorPage;
