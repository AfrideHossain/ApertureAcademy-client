import TitleSection from "../../../Shared/TitleSection/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Instructor from "../../Instructors/Instructor/Instructor";

const PopularInstructors = () => {
  return (
    <>
      <TitleSection title={"Our Top Instructors"} />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mt-10"
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
