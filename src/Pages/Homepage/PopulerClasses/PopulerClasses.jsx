import TitleSection from "../../../Shared/TitleSection/TitleSection";

const PopulerClasses = () => {
  return (
    <>
      <TitleSection title={"Popular classes"} />
      <div className="grid md:grid-cols-3 gap-5 mt-5 max-w-full">
        <div className="card w-auto h-72 bg-base-100 shadow-xl image-full transition-all imgscale cursor-pointer">
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
        </div>

        <div className="card w-auto h-72 bg-base-100 shadow-xl image-full imgscale cursor-pointer">
          <figure>
            <img
              src="https://i.ibb.co/yNTFTHX/joshua-rondeau-ec-Sc-Gr6-Oicw-unsplash.jpg"
              className="object-cover w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title justify-center text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card w-auto h-72 bg-base-100 shadow-xl image-full imgscale cursor-pointer">
          <figure>
            <img
              src="https://i.ibb.co/JrL9Z90/mostafa-meraji-r-QZn-IC91rf-U-unsplash.jpg"
              className="object-cover w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title justify-center text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card w-auto h-72 bg-base-100 shadow-xl image-full imgscale cursor-pointer">
          <figure>
            <img
              src="https://i.ibb.co/S6pcgrD/ozan-oztaskiran-f3u87if-ZZPk-unsplash.jpg"
              className="object-cover w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title justify-center text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card w-auto h-72 bg-base-100 shadow-xl image-full imgscale cursor-pointer">
          <figure>
            <img
              src="https://i.ibb.co/jgNHFgs/IMG-20220508-191859-11.jpg"
              className="object-cover w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title justify-center text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card w-auto h-72 bg-base-100 shadow-xl image-full imgscale cursor-pointer">
          <figure>
            <img
              src="https://i.ibb.co/GHkGgNz/IMG-20221023-115911-078.jpg"
              className="object-cover w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title justify-center text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopulerClasses;
