import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from "react-icons/hi2";
import useRole from "../../../hooks/useRole";
import useContextHook from "../../../hooks/useContextHook";

const Class = ({ classInfo }) => {
  const { _id, classImageUrl, className, instructor, price, seats } = classInfo;
  const { user } = useContextHook();
  const [role] = useRole();

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
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
