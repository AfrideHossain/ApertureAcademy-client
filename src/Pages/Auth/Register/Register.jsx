import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-5">
        <div className="w-full md:max-w-sm p-5 border rounded-xl shadow-md space-y-5">
          <form className="w-full space-y-2">
            <h1 className="text-3xl text-center font-bold mb-3">
              Create new account
            </h1>
            <div className="form-control">
              <label htmlFor="email" className="label">
                Name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered input-accent"
                placeholder="Email address"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full input input-bordered input-accent"
                placeholder="Password"
              />
            </div>
            <div className="form-control">
              <label htmlFor="confirmPassword" className="label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full input input-bordered input-accent"
                placeholder="Confirm Password"
              />
            </div>
            <div className="form-control">
              <input
                type="file"
                className="file-input file-input-bordered file-input-accent w-full mt-3"
              />
            </div>
            <div className="form-control">
              <p className="mt-1">
                Don{"'"}t have an account?
                <Link className="ms-2 text-blue-600 font-medium">
                  Create one
                </Link>
              </p>
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Create"
                className="btn btn-accent mt-6"
              />
            </div>
          </form>
          <button className="btn btn-outline btn-primary w-full capitalize text-sm">
            <BsGoogle className="text-2xl" /> Sign in with google
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
