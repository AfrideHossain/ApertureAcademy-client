import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextHook from "../../../hooks/useContextHook";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUserWithPass, googleLogin } = useContextHook();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const registrationHandler = (data) => {
    const { name, email, password, photo, confirmPass } = data;
    // console.log({ name, email, password, photo });
    if (password !== confirmPass) {
      setError("Please confirm password.");
      return;
    }
    let formData = new FormData();
    formData.append("image", photo[0]);
    fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_APIKEY}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          let photoUrl = imgRes.data.display_url;
          registerUserWithPass(email, password)
            .then((result) => {
              let currentUser = result.user;
              updateProfile(currentUser, {
                displayName: name,
                photoURL: photoUrl,
              }).then(() => {
                const bodyData = {
                  name,
                  email,
                  photo: photoUrl,
                  role: "student",
                  selectedClasses: [],
                  enrolledClasses: [],
                };
                fetch(`${import.meta.env.VITE_BACKEND}/createuser`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(bodyData),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      navigate(from, { replace: true });
                    }
                  });
              });
            })
            .catch((error) => {
              setError(error.message);
            });
        }
      });
  };
  const socialLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedIn = result.user;
        const bodyData = {
          name: loggedIn.displayName,
          email: loggedIn.email,
          photo: loggedIn.photoURL,
          role: "student",
          selectedClasses: [],
          enrolledClasses: [],
        };
        fetch(`${import.meta.env.VITE_BACKEND}/createuser`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(bodyData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
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
                {...register("name", { required: true })}
              />
            </div>
            <div className="mt-3 text-red-600">
              {errors.name?.type === "required" && (
                <p role="alert">This field is required</p>
              )}
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
                {...register("photo", { required: true })}
              />
            </div>
            <div className="mt-3 text-red-600">
              {errors.photo?.type === "required" && (
                <p role="alert">This field is required</p>
              )}
            </div>

            <div className="form-control">
              <p className="mt-1">
                Already have an account?
                <Link className="ms-2 text-blue-600 font-medium" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
            <div className="mt-3 text-red-600">
              {error && <p role="alert">{error}</p>}
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Create"
                className="btn btn-accent mt-6"
              />
            </div>
          </form>
          <button
            className="btn btn-outline btn-primary w-full capitalize text-sm"
            onClick={socialLogin}
          >
            <BsGoogle className="text-2xl" /> Sign in with google
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
