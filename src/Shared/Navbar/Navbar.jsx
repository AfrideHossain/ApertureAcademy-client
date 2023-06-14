import { Link, NavLink } from "react-router-dom";
import apertureAcademy from "../../assets/Aperture_Academy_logos_transparent.png";
import useContextHook from "../../hooks/useContextHook";

const Navbar = () => {
  const { user, logOutUser } = useContextHook();
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img src={apertureAcademy} className="w-16" alt="" />
        <Link
          to="/"
          className="px-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d397fa] to-[#8364e8]"
        >
          ApertureAcademy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    logOutUser();
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="btn btn-primary text-white font-semibold"
            to={"/login"}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
