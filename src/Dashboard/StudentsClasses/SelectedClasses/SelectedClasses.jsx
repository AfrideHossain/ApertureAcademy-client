import { useEffect, useState } from "react";
import StudentsClasses from "../StudentsClasses";
import useContextHook from "../../../hooks/useContextHook";

const SelectedClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContextHook();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("aperture-token");
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
      .then((data) => {
        let ids = data.selectedClasses;
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
          });
      });
  }, [user]);
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }
  return (
    <>
      <StudentsClasses classes={classes} />
    </>
  );
};

export default SelectedClasses;
