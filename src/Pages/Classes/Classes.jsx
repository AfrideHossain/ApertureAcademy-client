import PageTitle from "../../Shared/PageTitle/PageTitle";
import Class from "./Class/Class";

const Classes = () => {
  return (
    <>
      <PageTitle title="Classes" />
      <div className="grid md:grid-cols-2 gap-5 w-fit mx-auto mt-10 p-3">
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
      </div>
    </>
  );
};

export default Classes;
