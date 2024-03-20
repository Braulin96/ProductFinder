import { Link } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";

const NotFound = () => {
  return (
    <div className="h-full w-full flex" style={{ height: "100vh" }}>
      <div className="m-auto flex flex-col gap-y-2 text-secondary-gray px-2">
        <div className="mb-4 mx-auto flex flex-col">
          <p className="mx-auto text-8xl flex">
            <span className="animate-fade-up animate-duration-500 animate-delay-500">4</span>
            <span className="my-auto mx-1 animate-fade-up animate-duration-500 animate-delay-700">
              <TfiFaceSad size={80} color="#1976d2" />
            </span>
            <span className="animate-fade-up animate-duration-500 animate-delay-1000">4</span>
          </p>
          <p className="mx-auto text-2xl text-primary-blue animate-fade-up animate-duration-500 animate-delay-[1.2s]">Page Not Found.</p>
        </div>
        <p className="text-center animate-fade-up animate-duration-500 animate-delay-[1.4s]">
          The page you are looking for is temporary unavailable or was removed.
        </p>
        <Link
          to="/"
          className="slide px-8 w-fit mx-auto py-2 rounded-lg bg-primary-blue text-white font-bold mt-4 animate-fade-up animate-duration-[1s] animate-delay-[1.8s]"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
