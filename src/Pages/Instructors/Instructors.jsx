import PageTitle from "../../Shared/PageTitle/PageTitle";
import Instructor from "./Instructor/Instructor";

const Instructors = () => {
  return (
    <>
      <PageTitle title="Our Instructors" />
      <div className="grid md:grid-cols-4 gap-4 w-fit mx-auto mt-10">
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
      </div>
    </>
  );
};

export default Instructors;
