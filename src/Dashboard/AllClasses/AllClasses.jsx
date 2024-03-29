import { useEffect, useState } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineXCircle,
} from "react-icons/hi2";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("aperture-token");
    fetch(`${import.meta.env.VITE_BACKEND}/instructorsclasses`, {
      method: "get",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }
  return (
    <>
      {!classes.length > 0 && (
        <h1 className="text-center text-3xl font-semibold">
          You don{"'"}t have any class yet.
        </h1>
      )}
      <div
        className={`${
          !classes.length > 0 ? "hidden" : "overflow-x-auto"
        } border rounded-lg`}
      >
        <table className={`table table-zebra`}>
          {/* head */}
          <thead className="bg-accent text-gray-800">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Students</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((classInfo, indx) => (
              <tr key={classInfo._id}>
                <th>{indx + 1}</th>
                <td>{classInfo.className}</td>
                <td>${classInfo.price}</td>
                <td>{classInfo.seats}</td>
                <td>{classInfo.students}</td>
                <td>
                  {classInfo.status === "pending" && (
                    <p className="badge badge-info py-3 px-3 text-sm items-center gap-1">
                      <HiOutlineClock className="w-4 h-4" /> Pending
                    </p>
                  )}
                  {classInfo.status === "approved" && (
                    <p className="badge badge-success py-3 px-3 text-sm items-center gap-1">
                      <HiOutlineCheckCircle className="w-4 h-4" /> Approved
                    </p>
                  )}
                  {classInfo.status === "denied" && (
                    <p className="badge badge-error py-3 px-3 text-sm items-center gap-1">
                      <HiOutlineXCircle className="w-4 h-4" /> Denied
                    </p>
                  )}
                </td>
                <td>{classInfo?.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllClasses;
