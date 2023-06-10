import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registrationHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-5">
        <div className="w-full md:max-w-sm p-5 border rounded-xl shadow-md space-y-5">
          <form
            className="w-full space-y-2"
            onSubmit={handleSubmit(registrationHandler)}
          >
            <h1 className="text-3xl text-center font-bold mb-3">
              Create new account
            </h1>
            <div className="form-control">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered input-accent"
                placeholder="Full name"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered input-accent"
                placeholder="Email address"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mt-3 text-red-600">
              {errors.email?.type === "required" && (
                <p role="alert">Email is required</p>
              )}
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[@#$%^&*])/,
                    message:
                      "Password must have a capital letter and a special character",
                  },
                })}
              />
            </div>
            <div className="mt-3 text-red-600">
              {errors.password?.type === "required" && (
                <p role="alert">Password should not be empty</p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert">
                  Password should be at least 6 characters long
                </p>
              )}
              {errors.password && <p role="alert">{errors.password.message}</p>}
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
                {...register("confirmPass", { required: true })}
              />
            </div>
            <div className="mt-3 text-red-600">
              {errors.confirmPass?.type === "required" && (
                <p role="alert">This field is required</p>
              )}
            </div>
            <div className="form-control">
              <input
                type="file"
                className="file-input file-input-bordered file-input-accent w-full mt-3"
                {...register("photo")}
              />
            </div>
            <div className="form-control">
              <p className="mt-1">
                Already have an account?
                <Link className="ms-2 text-blue-600 font-medium" to={"/login"}>
                  Login
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
