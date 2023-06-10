import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen shadow-md">
      <div className="rounded-md w-full md:max-w-xl m-5 bg-blue-500 flex flex-col items-center p-4 gap-2">
        <img
          src="https://i.ibb.co/T18Fsw0/6330890-removebg-preview.png"
          className="w-64"
          alt="404 Error Image"
        />
        <h1 className="text-3xl font-bold text-gray-200">
          Lost in the Darkroom!
        </h1>
        <p className="font-medium text-gray-200">
          {" "}
          Looks like this page has developed into a mysterious negative. Let
          {"'"}s adjust the exposure and navigate back to the vibrant world of
          Aperture Academy.
        </p>
        <Link className="btn btn-accent" to={"/"}>
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
