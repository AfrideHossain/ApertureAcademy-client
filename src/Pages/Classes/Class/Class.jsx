import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from "react-icons/hi2";
import useRole from "../../../hooks/useRole";
import useContextHook from "../../../hooks/useContextHook";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Class = ({ classInfo }) => {
  const { _id, classImageUrl, className, instructor, price, seats } = classInfo;
  const { user } = useContextHook();
  const [role] = useRole();
  const navigate = useNavigate();

  const token = localStorage.getItem("aperture-token");

  const handleSelectButton = (id) => {
    if (!user) {
      Swal.fire({
        title: "Please Login",
        text: "You need to login to select classes or create an account if you are new to Aperture Academy",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    } else {
      fetch(
        `${import.meta.env.VITE_BACKEND}/users/selectedclasses/${user?.email}`,
        {
          method: "get",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((selectedClasses) => {
          let classes = selectedClasses.selectedClasses;
          let newClasses = [...classes];
          if (newClasses.find((classId) => classId === id)) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Class Already Exists",
              showConfirmButton: false,
              timer: 1500,
            });
            return;
          } else {
            newClasses.push(id);
          }
          let bodyData = { newClasses };
          fetch(
            `${import.meta.env.VITE_BACKEND}/users/selectedclasses/${
              user?.email
            }`,
            {
              method: "put",
              headers: {
                authorization: `Bearer ${token}`,
                "content-type": "application/json",
              },
              body: JSON.stringify(bodyData),
            }
          )
            .then((res) => res.json())
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class selected",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        });
    }
  };
  return (
    <div
      className={`card md:card-side md:h-72 ${
        seats <= 0 ? "bg-red-400" : "bg-base-100"
      } shadow-xl`}
    >
      <figure className="md:w-96 h-full">
        <img
          src={classImageUrl}
          alt="Album"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body bg-opacity-5">
        <h2 className="card-title">{className}</h2>
        <p className="font-semibold text-blue-500">{instructor}</p>
        <p className="flex items-center gap-2">
          <HiOutlineUserGroup className="w-6 h-6" /> Available Seats: {seats}
        </p>
        <p className="flex items-center gap-2">
          <HiOutlineCurrencyDollar className="w-6 h-6" /> Price: {price}
        </p>
        <div className="card-actions justify-end">
          <button
            disabled={role === "admin" || role === "instructor"}
            className="btn btn-accent font-bold"
            onClick={() => handleSelectButton(_id)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
