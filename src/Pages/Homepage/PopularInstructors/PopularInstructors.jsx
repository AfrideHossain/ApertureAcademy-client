import TitleSection from "../../../Shared/TitleSection/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
          <div className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="top instructor"
              />
            </figure>
            <div className="card-body absolute bottom-0 glass text-white">
              <h2 className="card-title">John Smith</h2>
              <div className="badge badge-secondary">Landscape Photography</div>
              <p>
                John{"'"}s landscape photography workshop was transformative. I
                learned so much and felt inspired to explore new horizons.
                Highly recommended!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="top instructor"
              />
            </figure>
            <div className="card-body absolute bottom-0 glass text-white">
              <h2 className="card-title">John Smith</h2>
              <div className="badge badge-secondary">Landscape Photography</div>
              <p>
                John{"'"}s landscape photography workshop was transformative. I
                learned so much and felt inspired to explore new horizons.
                Highly recommended!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="top instructor"
              />
            </figure>
            <div className="card-body absolute bottom-0 glass text-white">
              <h2 className="card-title">John Smith</h2>
              <div className="badge badge-secondary">Landscape Photography</div>
              <p>
                John{"'"}s landscape photography workshop was transformative. I
                learned so much and felt inspired to explore new horizons.
                Highly recommended!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="top instructor"
              />
            </figure>
            <div className="card-body absolute bottom-0 glass text-white">
              <h2 className="card-title">John Smith</h2>
              <div className="badge badge-secondary">Landscape Photography</div>
              <p>
                John{"'"}s landscape photography workshop was transformative. I
                learned so much and felt inspired to explore new horizons.
                Highly recommended!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="top instructor"
              />
            </figure>
            <div className="card-body absolute bottom-0 glass text-white">
              <h2 className="card-title">John Smith</h2>
              <div className="badge badge-secondary">Landscape Photography</div>
              <p>
                John{"'"}s landscape photography workshop was transformative. I
                learned so much and felt inspired to explore new horizons.
                Highly recommended!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="top instructor"
              />
            </figure>
            <div className="card-body absolute bottom-0 glass text-white">
              <h2 className="card-title">John Smith</h2>
              <div className="badge badge-secondary">Landscape Photography</div>
              <p>
                John{"'"}s landscape photography workshop was transformative. I
                learned so much and felt inspired to explore new horizons.
                Highly recommended!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PopularInstructors;
