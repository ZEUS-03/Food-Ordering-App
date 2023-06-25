import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="bg-red-500 p-4">
      <h2 className="text-white text-lg font-bold">
        {err.status} ! {err.statusText}
      </h2>
    </div>
  );
};

export default Error;