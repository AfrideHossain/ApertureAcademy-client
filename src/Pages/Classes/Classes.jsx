import { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Class from "./Class/Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/approvedclasses`, {
      method: "get",
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
      <PageTitle title="Classes" />
      <div className="grid md:grid-cols-2 gap-5 w-fit mx-auto mt-10 p-3">
        {classes?.map((classInfo) => (
          <Class key={classInfo._id} classInfo={classInfo} />
        ))}
      </div>
    </>
  );
};

export default Classes;
