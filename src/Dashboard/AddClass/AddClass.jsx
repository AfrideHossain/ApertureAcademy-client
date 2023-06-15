import { useForm } from "react-hook-form";
import useContextHook from "../../hooks/useContextHook";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContextHook();

  const addClassHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container h-screen flex justify-center items-center">
        <div className="container md:max-w-lg m-3 shadow-xl bg-base-100 rounded-xl border">
          <form className="p-6" onSubmit={handleSubmit(addClassHandler)}>
            <h1 className="text-center text-3xl font-semibold">
              Add new class
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <input
                type="text"
                placeholder="Class name"
                className="input input-bordered w-full"
                {...register("className", { required: true })}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor name</span>
              </label>
              <input
                type="text"
                placeholder="Instructor's name"
                className="input input-bordered w-full"
                readOnly
                {...register("instructor", {
                  required: true,
                  value: user?.displayName,
                })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor email</span>
              </label>
              <input
                type="text"
                placeholder="Instructor's email"
                className="input input-bordered w-full"
                {...register("instructorEmail", {
                  required: true,
                  value: user?.email,
                })}
                readOnly
                // defaultValue={instructorEmail}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="text"
                placeholder="Available seats"
                className="input input-bordered w-full"
                {...register("seats", { required: true, valueAsNumber: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class image</span>
              </label>
              <input
                type="file"
                placeholder="instructor"
                className="file-input file-input-bordered w-full"
                {...register("classImage", { required: true })}
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-accent"
                value={"Add Class"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddClass;
