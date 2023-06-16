import { useEffect, useState } from "react";
import { FaUserTie, FaUserCog, FaUser } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const token = localStorage.getItem("aperture-token");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/users`, {
      method: "get",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setRefetch(false);
      });
  }, [token, refetch]);
  const handleChangeUserRole = (id, role) => {
    fetch(`${import.meta.env.VITE_BACKEND}/user/changerole/${id}`, {
      method: "put",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then(() => {
        setRefetch(true);
      });
  };

  return (
    <>
      {!users.length > 0 && (
        <h1 className="text-center text-3xl font-semibold">
          There is no users.
        </h1>
      )}
      <div
        className={`${
          !users.length > 0 ? "hidden" : "overflow-x-auto"
        } border rounded-lg`}
      >
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-indigo-400 text-gray-800">
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamic Rows */}
            {users?.map((userInfo, indx) => (
              <tr key={userInfo._id}>
                <th>{indx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img src={userInfo.photo} alt={userInfo.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{userInfo.name}</div>
                    </div>
                  </div>
                </td>
                <td>{userInfo.email}</td>
                <td>
                  {userInfo.role === "student" && (
                    <p className="badge badge-info py-3 px-3 text-sm items-center gap-1 font-semibold">
                      <FaUser className="w-4 h-4" /> Student
                    </p>
                  )}
                  {userInfo.role === "instructor" && (
                    <p className="badge badge-success py-3 px-3 text-sm items-center gap-1 font-semibold">
                      <FaUserTie /> Instructor
                    </p>
                  )}
                  {userInfo.role === "admin" && (
                    <p className="badge badge-primary py-3 px-3 text-sm items-center gap-1 font-semibold">
                      <FaUserCog className="w-4 h-4" /> Admin
                    </p>
                  )}
                </td>
                <th className="grid gap-2">
                  <button
                    className="btn btn-sm btn-primary btn-outline normal-case"
                    onClick={() => handleChangeUserRole(userInfo._id, "admin")}
                  >
                    Make Admin
                  </button>
                  <button
                    className="btn btn-sm btn-success btn-outline normal-case"
                    onClick={() =>
                      handleChangeUserRole(userInfo._id, "instructor")
                    }
                  >
                    Make Instructor
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
