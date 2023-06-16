import { useEffect, useState } from "react";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";
import Swal from "sweetalert2";
const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const token = localStorage.getItem("aperture-token");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/allclasses`, {
      method: "get",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClasses(data);
        setRefetch(false);
      });
  }, [token, refetch]);
  const handleApproveBtn = (id) => {
    fetch(`${import.meta.env.VITE_BACKEND}/class/approve/${id}`, {
      method: "put",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setRefetch(true);
      });
  };
  const handleDenyBtn = (id) => {
    Swal.fire({
      title: "Enter the cancellation reason",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: (feedback) => {
        return fetch(`${import.meta.env.VITE_BACKEND}/class/deny/${id}`, {
          method: "put",
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({ feedback }),
        }).then((res) => res.json());
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        setRefetch(true);
      }
    });
  };
  return (
    <>
      {!classes.length > 0 && (
        <h1 className="text-center text-3xl font-semibold">
          There is no classes.
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
              <th className="text-right">Price</th>
              <th className="text-right">Available Seats</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((classInfo, indx) => (
              <tr key={classInfo._id}>
                <th>{indx + 1}</th>
                <td>{classInfo.className}</td>
                <td className="text-right">${classInfo.price}</td>
                <td className="text-right">{classInfo.seats}</td>
                <td>{classInfo.instructor}</td>
                <td>{classInfo.instructorEmail}</td>
                <td>
                  {classInfo.status === "pending" && (
                    <div className="flex gap-1">
                      <button
                        className="btn bg-green-500 normal-case outline-none"
                        onClick={() => handleApproveBtn(classInfo._id)}
                      >
                        <HiOutlineCheckCircle className="w-5 h-5" />
                      </button>
                      <button className="btn bg-red-500 normal-case outline-none">
                        <HiOutlineXCircle
                          className="w-5 h-5"
                          onClick={() => handleDenyBtn(classInfo._id)}
                        />
                      </button>
                    </div>
                  )}
                  {classInfo.status === "approved" && (
                    <p className="text-green-600 text-center font-semibold">
                      Approved
                    </p>
                  )}
                  {classInfo.status === "denied" && (
                    <p className="text-red-600 text-center font-semibold">
                      Denied
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageClasses;
