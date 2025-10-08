import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops..! something went wrong</h1>
      <h2>{error.status}</h2>
      <h2>{error.statusText}</h2>
    </div>
  );
};

export default Error;
