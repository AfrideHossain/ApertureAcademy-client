import { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Instructor from "./Instructor/Instructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/users/instructors`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }
  return (
    <>
      <PageTitle title="Our Instructors" />
      <div className="grid md:grid-cols-4 gap-4 w-fit mx-auto mt-10">
        {instructors?.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </>
  );
};

export default Instructors;
