import TitleSection from "../../../Shared/TitleSection/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import Instructor from "../../Instructors/Instructor/Instructor";
import { useEffect, useState } from "react";

SwiperCore.use([Pagination]);
const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/users/popularinstructors`, {
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
      <TitleSection title={"Our Top Instructors"} />
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mt-10"
        breakpoints={{ 640: { slidesPerView: 4, centeredSlides: true } }}
      >
        {instructors?.map((instructor) => (
          <SwiperSlide key={instructor._id}>
            <Instructor instructor={instructor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularInstructors;
