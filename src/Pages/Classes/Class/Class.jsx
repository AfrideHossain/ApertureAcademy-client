import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from "react-icons/hi2";

const Class = () => {
  return (
    <div className="card md:card-side h-72 bg-base-100 shadow-xl">
      <figure className="w-96 h-full">
        <img
          src="https://i.ibb.co/Kz24ks9/IMG-20210718-182643-538.jpg"
          alt="Album"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Introduction to Landscape Photography</h2>
        <p className="font-semibold text-blue-500">John Smith</p>
        <p className="flex items-center gap-2">
          <HiOutlineUserGroup className="w-6 h-6" /> Available Seats: 5
        </p>
        <p className="flex items-center gap-2">
          <HiOutlineCurrencyDollar className="w-6 h-6" /> Price: 99.99
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent font-bold">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Class;
