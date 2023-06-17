import { useEffect, useState } from "react";
import StudentsClasses from "../StudentsClasses";
import useContextHook from "../../../hooks/useContextHook";
const EnrolledClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContextHook();
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(true);
  const token = localStorage.getItem("aperture-token");
  useEffect(() => {
    setLoading(true);
    fetch(
      `${import.meta.env.VITE_BACKEND}/users/enrolledclasses/${user?.email}`,
      {
        method: "get",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        let ids = data.enrolledClasses;
        fetch(`${import.meta.env.VITE_BACKEND}/classesbyid`, {
          method: "post",
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({ ids }),
        })
          .then((res) => res.json())
          .then((resp_data) => {
            setClasses(resp_data);
            setLoading(false);
            setRefetch(false);
          });
      });
  }, [token, user, refetch]);
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }
  return (
    <>
      <div className="w-full">
        <StudentsClasses classes={classes} showDelete={false} />
      </div>
    </>
  );
};

export default EnrolledClasses;
