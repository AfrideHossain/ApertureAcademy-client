const TitleSection = ({ title }) => {
  return (
    <div className="border-b border-blue-500 mt-10">
      <h2 className="px-6 py-3 bg-sky-500 text-gray-200 text-2xl font-semibold w-fit">
        {title}
      </h2>
    </div>
  );
};

export default TitleSection;
