import PageTitle from "../../Shared/PageTitle/PageTitle";
import Class from "./Class/Class";

const Classes = () => {
  return (
    <>
      <PageTitle title="Classes" />
      <div className="grid md:grid-cols-2 gap-4 w-fit mx-auto mt-10">
        <Class />
      </div>
    </>
  );
};

export default Classes;
