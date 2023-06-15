import { HiBars3 } from "react-icons/hi2";
import useContextHook from "../hooks/useContextHook";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const Dashboard = () => {
  const { user } = useContextHook();
  const [role] = useRole();
  return (
    <>
      <div className="drawer lg:drawer-open mt-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden ms-auto"
          >
            <HiBars3 className="w-6 h-6" />
          </label>
          <div className="container">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li className="w-full">
              <div className="flex flex-col items-center">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-16 h-16 object-cover rounded-full"
                />
                <p className="text-xl font-bold text-blue-600">
                  {user?.displayName}
                </p>
                <p className="text-sm font-semibold text-orange-600">{role}</p>
                <p>{user?.email}</p>
              </div>
            </li>
            <li></li>
            {role === "instructor" && (
              <>
                <Navigate to={"instructorhome"} replace />
                <li>
                  <NavLink to="instructorhome">Instructor home</NavLink>
                </li>
                <li>
                  <NavLink to={"addclass"}>Add class</NavLink>
                </li>
              </>
            )}
            {role === "admin" && (
              <>
                <Navigate to={"adminhome"} replace />
                <li>
                  <NavLink to="/dashboard">Admin home</NavLink>
                </li>
                <li>
                  <NavLink to={"paymentHistory"}>Payment history</NavLink>
                </li>
              </>
            )}
            <li></li>
            <li>
              <Link to="/"> Back to homepage</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
