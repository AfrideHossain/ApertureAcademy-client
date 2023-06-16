const Instructor = ({ instructor }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      <figure>
        <img
          src={instructor.photo}
          className="w-full object-cover"
          alt="instructor"
        />
      </figure>
      <div className="card-body w-full absolute bottom-0 glass text-white bg-black bg-opacity-60">
        <h2 className="card-title">{instructor.name}</h2>
        <p className="w-full">{instructor.email}</p>
      </div>
    </div>
  );
};

export default Instructor;
