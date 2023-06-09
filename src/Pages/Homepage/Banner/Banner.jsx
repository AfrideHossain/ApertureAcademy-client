import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
const Banner = () => {
  const flowerImg = `https://i.ibb.co/sRPr2W1/IMG-20210622-085421-855-22.jpg`;
  const streetFood = `https://i.ibb.co/GHkGgNz/IMG-20221023-115911-078.jpg`;
  const streetStall = `https://i.ibb.co/S6pcgrD/ozan-oztaskiran-f3u87if-ZZPk-unsplash.jpg`;
  const buildings = `https://i.ibb.co/yNTFTHX/joshua-rondeau-ec-Sc-Gr6-Oicw-unsplash.jpg`;
  return (
    <>
      <Carousel
        showArrows
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        dynamicHeight={true}
        autoPlay={true}
      >
        <div>
          <img src={flowerImg} className="h-[700px] w-full object-cover" />
          <div className="absolute top-0 h-full w-full flex items-center justify-center md:justify-start px-16 bg-black bg-opacity-40">
            <div className="max-w-xl space-y-4">
              <p className="text-white text-center md:text-left text-3xl md:text-5xl font-semibold">
                Unleash Your Photography Potential
              </p>
              <p className="text-base md:text-lg text-center md:text-left text-gray-200">
                Join our photography learning community and take your skills to
                new heights.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href="">
                  <BsFacebook className="text-2xl md:text-3xl text-blue-600" />
                </a>
                <a href="">
                  <BsLinkedin className="text-2xl md:text-3xl text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={streetFood} className="h-[700px] w-full object-cover" />
          <div className="absolute top-0 h-full w-full flex items-center justify-center md:justify-start px-16 bg-black bg-opacity-40">
            <div className="max-w-xl space-y-4">
              <p className="text-white text-center md:text-left text-3xl md:text-5xl font-semibold">
                Embrace the Beauty of Visual Storytelling
              </p>
              <p className="text-base md:text-lg text-center md:text-left text-gray-200">
                Capture breathtaking moments and create images that leave a
                lasting impression.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href="">
                  <BsFacebook className="text-2xl md:text-3xl text-blue-600" />
                </a>
                <a href="">
                  <BsLinkedin className="text-2xl md:text-3xl text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={streetStall} className="h-[700px] w-full object-cover" />
          <div className="absolute top-0 h-full w-full flex items-center justify-center md:justify-start px-16 bg-black bg-opacity-40">
            <div className="max-w-xl space-y-4">
              <p className="text-white text-center md:text-left text-3xl md:text-5xl font-semibold">
                Capture Moments That Last a Lifetime
              </p>
              <p className="text-base md:text-lg text-center md:text-left text-gray-200">
                Unleash your creativity through hands-on projects and practical
                exercises.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href="">
                  <BsFacebook className="text-2xl md:text-3xl text-blue-600" />
                </a>
                <a href="">
                  <BsLinkedin className="text-2xl md:text-3xl text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={buildings} className="h-[700px] w-full object-cover" />
          <div className="absolute top-0 h-full w-full flex items-center justify-center md:justify-start px-16 bg-black bg-opacity-40">
            <div className="max-w-xl space-y-4">
              <p className="text-white text-center md:text-left text-3xl md:text-5xl font-semibold">
                Unlock Your Creative Vision
              </p>
              <p className="text-base md:text-lg text-center md:text-left text-gray-200">
                Embark on a transformative journey to become a skilled
                photographer.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href="">
                  <BsFacebook className="text-2xl md:text-3xl text-blue-600" />
                </a>
                <a href="">
                  <BsLinkedin className="text-2xl md:text-3xl text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
