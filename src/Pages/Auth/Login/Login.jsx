import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { HiEye } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const submitHandler = (credentials) => {
    console.log(credentials);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-5">
        <div className="w-full md:max-w-sm p-5 border rounded-xl shadow-md space-y-5">
          <form
            className="w-full space-y-2"
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className="text-3xl text-center font-bold mb-3">
              Welcome Back!
            </h1>
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
              <div className="mt-3 text-red-600">
                {errors.email?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="flex items-center w-full relative input input-bordered input-accent">
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full outline-none"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <button
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  type="button"
                  className="h-8"
                >
                  <HiEye className="h-8" />
                </button>
              </div>
              <div className="mt-3 text-red-600">
                {errors.password?.type === "required" && (
                  <p role="alert">Password should not empty</p>
                )}
              </div>
            </div>
            <div className="form-control">
              <p className="mt-1">
                Don{"'"}t have an account?
                <Link
                  className="ms-2 text-blue-600 font-medium"
                  to={"/register"}
                >
                  Create one
                </Link>
              </p>
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Login"
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

export default Login;
