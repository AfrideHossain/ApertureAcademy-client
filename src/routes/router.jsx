import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import SecretRoute from "./SecretRoutes/SecretRoute";
import InstructorRoute from "./SecretRoutes/InstructorRoute";
import AddClass from "../Dashboard/AddClass/AddClass";
import InstructorHome from "../Dashboard/InstructorHome/InstructorHome";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import AdminRoute from "./SecretRoutes/AdminRoute";
import ManageUsers from "../Dashboard/Manageusers/ManageUsers";
import StudentHome from "../Dashboard/StudentHome/StudentHome";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../Dashboard/StudentsClasses/EnrolledClasses/EnrolledClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <SecretRoute>
        <Dashboard />
      </SecretRoute>
    ),
    children: [
      {
        path: "instructorhome",
        element: (
          <InstructorRoute>
            <InstructorHome />
          </InstructorRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "studenthome",
        element: (
          <SecretRoute>
            <StudentHome />
          </SecretRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <SecretRoute>
            <Payment />
          </SecretRoute>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <SecretRoute>
            <PaymentHistory />
          </SecretRoute>
        ),
      },
      {
        path: "enrolledclasses",
        element: (
          <SecretRoute>
            <EnrolledClasses />
          </SecretRoute>
        ),
      },
    ],
  },
]);

export default router;
