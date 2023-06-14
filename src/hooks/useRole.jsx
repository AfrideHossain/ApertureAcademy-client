import { useEffect, useState } from "react";
import useContextHook from "./useContextHook";

const useRole = () => {
  const [roleLoading, setRoleLoading] = useState(true);
  const [role, setRole] = useState(false);
  const { user } = useContextHook();
  const token = localStorage.getItem("aperture-token");
  useEffect(() => {
    const fetchInstructor = async () => {
      const instructorReq = await fetch(
        `${import.meta.env.VITE_BACKEND}/user/role/${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      let resp = await instructorReq.json();
      setRoleLoading(false);
      setRole(resp.role.role);
    };
    fetchInstructor();
  }, [token, user]);
  return [role, roleLoading];
};

export default useRole;

// export default useRole
