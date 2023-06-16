import { useEffect, useState } from "react";
import TitleSection from "../../../Shared/TitleSection/TitleSection";

const PopulerClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/popularclasses`, {
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
      <TitleSection title={"Popular classes"} />
      <div className="grid md:grid-cols-3 gap-5 mt-5 max-w-full">
        {/* <div className="card w-auto h-72 bg-base-100 shadow-xl image-full transition-all imgscale cursor-pointer">
          <figure>
            <img
              src="https://i.ibb.co/Kz24ks9/IMG-20210718-182643-538.jpg"
              className="object-cover w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title justify-center text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div> */}
        {classes?.map((classInfo) => (
          <div
            key={classInfo._id}
            className="card w-auto h-72 bg-base-100 shadow-xl image-full transition-all imgscale cursor-pointer"
          >
            <figure>
              <img
                src={classInfo.classImageUrl}
                className="object-cover w-full"
                alt="Shoes"
              />
            </figure>
            <div className="card-body my-auto">
              <h2 className="card-title justify-center text-2xl">
                {classInfo.className}
              </h2>
              <p>Instructor : {classInfo.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopulerClasses;
