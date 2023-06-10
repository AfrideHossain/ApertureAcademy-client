import Banner from "./Banner/Banner";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import PopulerClasses from "./PopulerClasses/PopulerClasses";

const Homepage = () => {
  return (
    <>
      <Banner />
      <PopulerClasses />
      <PopularInstructors />
    </>
  );
};

export default Homepage;
