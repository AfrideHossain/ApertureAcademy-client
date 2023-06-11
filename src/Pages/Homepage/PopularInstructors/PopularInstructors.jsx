import TitleSection from "../../../Shared/TitleSection/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import Instructor from "../../Instructors/Instructor/Instructor";

SwiperCore.use([Pagination]);
const PopularInstructors = () => {
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
        <SwiperSlide>
          <Instructor />
        </SwiperSlide>
        <SwiperSlide>
          <Instructor />
        </SwiperSlide>
        <SwiperSlide>
          <Instructor />
        </SwiperSlide>
        <SwiperSlide>
          <Instructor />
        </SwiperSlide>
        <SwiperSlide>
          <Instructor />
        </SwiperSlide>
        <SwiperSlide>
          <Instructor />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PopularInstructors;
