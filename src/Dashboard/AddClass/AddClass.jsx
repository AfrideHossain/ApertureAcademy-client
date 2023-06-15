import { useForm } from "react-hook-form";
import useContextHook from "../../hooks/useContextHook";
import Swal from "sweetalert2";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContextHook();
  const token = localStorage.getItem("aperture-token");
  const addClassHandler = (data) => {
    console.log(data);
    const { className, instructor, instructorEmail, seats, price, classImage } =
      data;
    let formData = new FormData();
    formData.append("image", classImage[0]);
    fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_APIKEY}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgBbRes) => {
        if (imgBbRes.success) {
          let photoUrl = imgBbRes.data.display_url;
          const bodyData = {
            className,
            instructor,
            instructorEmail,
            seats,
            price,
            classImageUrl: photoUrl,
            status: "pending",
            students: 0,
            feedback: "",
          };
          fetch(`${import.meta.env.VITE_BACKEND}/addclass`, {
            method: "post",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(bodyData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "New class added",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
              }
            });
        }
      });
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
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Set price"
                className="input input-bordered w-full"
                {...register("price", { required: true, valueAsNumber: true })}
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
