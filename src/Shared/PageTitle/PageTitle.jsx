import pageBg from "../../assets/gulf-dec0ccde.svg";
const PageTitle = ({ title }) => {
  return (
    <div className="relative w-full h-96 overflow-hidden bg-[#0f235d] rounded-b-xl">
      <img
        src={pageBg}
        alt="Page title background"
        className="w-full object-cover"
      />
      <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20">
        <p className="text-4xl font-semibold text-white">{title}</p>
      </div>
    </div>
  );
};

export default PageTitle;
